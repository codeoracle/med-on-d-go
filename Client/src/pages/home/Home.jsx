import './home.scss'
import Navbar from '../../components/navbar/Navbar'
import ScreenSearchDesktopOutlinedIcon from '@mui/icons-material/ScreenSearchDesktopOutlined';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import PictureInPictureOutlinedIcon from '@mui/icons-material/PictureInPictureOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AddToQueueOutlinedIcon from '@mui/icons-material/AddToQueueOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='Home'>
        <div className="navWrap" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80)"
}}>
        <Navbar/>
        <div className="navTitle">
            <h1 className="headerTitle">Let help you access fast health care</h1>

            <span className="headertext">
Med-On-D-Go support patients and healthcare providers in all steps of the primary care journey –from symptom to outcome.</span>
                <Link to="/askai" className='link'>
        <button className='btn'>Ask ai</button>
        </Link>
        </div>
        </div>
        <div className="features">
          <div className="featuresWrap" id='howto'>
              <h1 className='featuresTitle'>Meet Med-On-D-Go</h1>
              <span className='featuresDesc'>Med-On-D-Go is one of the most comprehensive digital heal care that focuses on holistic health and well-being. </span>
          </div>
          <div className="featuresCard">
            <div className="featuresCardList">
              <ScreenSearchDesktopOutlinedIcon className='icon'/>
                <div className="featuresCardDetails">
                    <h2>Check Symptoms</h2>
                    <span>Med-On-D-Go is an advanced web app that uses artificial intelligence (AI) to assist users in identifying potential medical conditions based on reported symptoms. </span>
                </div>
                <div className="featuresCardButton">
                <Link to="/askai" className='link'>
                    <button className="featureButton">Learn More</button>
                    </Link>
                </div>
            </div>
            <div className="featuresCardList">
              <AddLocationOutlinedIcon className='icon'/>
                <div className="featuresCardDetails">
                    <h2>HealthCare Direction</h2>
                    <span>Med-On-D-Go assists individuals in navigating their way to healthcare. It aims is to provide guidance, support, and resources to help individuals make informed decisions about their healthcare needs. </span>
                </div>
                <div className="featuresCardButton">
                <Link to="/askai" className='link'>
                    <button className="featureButton">Learn More</button>
                    </Link>
                </div>
            </div>
            <div className="featuresCardList">
              <PictureInPictureOutlinedIcon className='icon'/>
                <div className="featuresCardDetails">
                    <h2>Virtual Session</h2>
                    <span>Med-On-D-Go provide a convenient and accessible way for individuals to seek medical advice, consultation, or treatment remotely. </span>
                </div>
                <div className="featuresCardButton">
                <Link to="/askai" className='link'>
                    <button className="featureButton">Learn More</button>
                    </Link>
                </div>
            </div>
          </div>
        </div>
        <div className="detailWrapper" id='feature'>
            <div className="detailsImage">
                <h3>Why Med-on-D-Go</h3>
                <img src="https://media.istockphoto.com/id/537116429/photo/happy-young-woman-walking-in-the-city-sending-text-message.jpg?s=612x612&w=0&k=20&c=SVKj4l0FxVdbYP8-AgGvdqdqLa9W3n-2B5cRIhb6E88=" alt="" className='img' />
            </div>
            <div className="detailsContent">
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <SentimentSatisfiedAltOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>User-friendly Interface</h3>
                        <span>Provide an intuitive and easy-to-use interface where users can input their symptoms and receive relevant information.</span>
                    </div>
                </div>
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <MedicalInformationOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>Informational Content</h3>
                        <span>Offer detailed information about various medical conditions, including causes, symptoms, treatment options, and when to seek medical help.</span>
                    </div>
                </div>
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <AddLocationOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>Location-based Services</h3>
                        <span>Provide users with a location-based search functionality to find nearby healthcare facilities and services, including emergency rooms, pharmacies, laboratories, and more.</span>
                    </div>
                </div>
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <AddToQueueOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>Telemedicine Integration</h3>
                        <span>Provide a seamless and secure platform for virtual consultations, allowing users to connect with healthcare providers through video calls.</span>
                    </div>
                </div>
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <PersonSearchOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>Advanced Search</h3>
                        <span>Enable users to search for doctors based on specialty, location, availability, patient reviews, and ratings.</span>
                    </div>
                </div>
                <div className="detailsWrap">
                    <div className="detailsIcons">
                    <PaidOutlinedIcon className='detailsIcon'/>
                    </div>
                    <div className="detailsContent">
                        <h3>Secure Payment</h3>
                        <span>Integrate secure payment gateways to facilitate online payment for virtual consultations, ensuring user data privacy and transaction security.</span>
                    </div>
                </div>
            </div>
        </div>
        <div className="subscription">
            <div className="subscriptionContent">
                <h2>We send great healthcare emails. Let’s stay in touch</h2>
                <div className="subForm">
                    <input type="text" placeholder='Your Email Address' className='input'/>
                    <button className='btn'>Let's go!</button>
                </div>
                <span className='terms'>By signing up, you're confirming that you agree with our Terms.</span>
            </div>
            <img src="https://assets.website-files.com/631eddfd322acf4bde169f3f/633317d5a76e94745f6661e5_paytient-home-cta.png" alt="" />
        </div>
        <div className="footer">
            <div className="footer1">
                <div className="logo">
                <LocalHospitalOutlinedIcon className='icon'/>
            <span className="logoText">Med-On-D-Go</span>
        </div>
        <div>
                <Link to="/askai" className='link'>
            <button>Ask ai</button>
            </Link>
        </div>
            </div>
            <div className="footer2">
                <ul>
                    <li className='listHeader'>Company</li>
                    <li>How to</li>
                    <li>Features</li>
                    <li>Contact</li>
                </ul>
                <ul>
                    <li className='listHeader'>Support</li>
                    <li>Help Center</li>
                    <li>FAQs</li>
                </ul>
                <ul>
                    <li className='listHeader'>Legal</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Home

