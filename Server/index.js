const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const dotenv = require('dotenv')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


dotenv.config();

const configuration = new Configuration({
	apiKey: process.env.OPENKEY,
});

const openai = new OpenAIApi(configuration);

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

app.post("/symptoms/askai", async (req, res) => {
	const {
		symptoms,
		ageRange,
		gender,
	} = req.body;


	const prompt1 = `I have been experiencing some symptoms and I would appreciate your help in providing some suggestions or insights. My symptoms include \n symptoms: ${symptoms} \n age range: ${ageRange} \n gender: ${gender}.`;

	const prompt2 = `What could be the possible causes or conditions associated with these symptoms? \n symptoms: ${symptoms} \n age range: ${ageRange} \n gender: ${gender}.`;

	// const remainderText = () => {
	// 	let stringText = "";
	// 	for (let i = 0; i < workArray.length; i++) {
	// 		stringText += ` ${workArray[i].name} as a ${workArray[i].position}.`;
	// 	}
	// 	return stringText;
	// };

	const prompt3 = `What to do next if i notice these symptoms \n  ${symptoms} \n age range: ${ageRange} \n gender: ${gender}.`;

	const symptomsCheck = await ChatGPTFunction(prompt1);
	const causes = await ChatGPTFunction(prompt2);
	const treatment = await ChatGPTFunction(prompt3);

	const chatgptData = { symptomsCheck, causes, treatment };
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