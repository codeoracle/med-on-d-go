const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const fs = require("fs");
const app = express();
const dotenv = require('dotenv')


app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname + "/Client/build")));

dotenv.config();

const generateID = () => Math.random().toString(36).substring(2, 10);

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads");
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + path.extname(file.originalname));
	},
});

const upload = multer({
	storage: storage,
	limits: { fileSize: 1024 * 1024 * 5 },
});

const configuration = new Configuration({
	apiKey: process.env.OPENKEY,
});

const openai = new OpenAIApi(configuration);

const database = [];

const ChatGPTFunction = async (text) => {
	const response = await openai.createCompletion({
		model: "text-davinci-003",
		prompt: text,
		temperature: 0.6,
		max_tokens: 250,
		top_p: 1,
		frequency_penalty: 1,
		presence_penalty: 1,
	});
	return response.data.choices[0].text;
};

app.post("/resume/create", upload.single("headshotImage"), async (req, res) => {
	const {
		fullName,
		currentPosition,
		currentLength,
		currentTechnologies,
		workHistory,
	} = req.body;

	const workArray = JSON.parse(workHistory);
	const newEntry = {
		id: generateID(),
		fullName,
		// image_url: `http://localhost:4000/uploads/${req.file.filename}`,
		currentPosition,
		currentLength,
		currentTechnologies,
		workHistory: workArray,
	};

	const prompt1 = `I have been experiencing some symptoms and I would appreciate your help in providing some suggestions or insights. My symptoms include \n symptoms: ${currentPosition} \n age range: ${currentLength} \n gender: ${currentTechnologies}.`;

	const prompt2 = `What could be the possible causes or conditions associated with these symptoms? \n symptoms: ${currentPosition} \n age range: ${currentLength} \n gender: ${currentTechnologies}.`;

	const remainderText = () => {
		let stringText = "";
		for (let i = 0; i < workArray.length; i++) {
			stringText += ` ${workArray[i].name} as a ${workArray[i].position}.`;
		}
		return stringText;
	};

	const prompt3 = `What to do next if i notice these symptoms \n  ${currentPosition} \n age range: ${currentLength} \n gender: ${currentTechnologies}.`;

	const objective = await ChatGPTFunction(prompt1);
	const keypoints = await ChatGPTFunction(prompt2);
	const jobResponsibilities = await ChatGPTFunction(prompt3);

	const chatgptData = { objective, keypoints, jobResponsibilities };
	const data = { ...newEntry, ...chatgptData };
	database.push(data);

	res.json({
		message: "Request successful!",
		data,
	});
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});