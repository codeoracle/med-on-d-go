import { BrowserRouter, Routes, Route } from "react-router-dom";
import AskAi from "./pages/AskAi/AskAi";
import Result from "./pages/Result/Result";
import Map from "./components/map/Map";
import HomePage from "./pages/home/Home";
import Booking from "./pages/booking/Booking"
import Doctors from "./pages/doctors/Doctors";
import { useState } from "react";

const App = () => {

     //👇🏻 state holding the result
     const [result, setResult] = useState({});

    return (
        <div>
            <BrowserRouter>
            <Routes>
                    <Route path='/askai' element={<AskAi setResult={setResult} />} />
                    <Route path='/symptom' element={<Result result={result} />} />
                    <Route path='/map' element={<Map />} />
                    <Route path='/' element={<HomePage />} />
                    <Route path='/appointment' element={<Booking />} />
                    <Route path='/doctors' element={<Doctors />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
