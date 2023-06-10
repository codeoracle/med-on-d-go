import './navbar.scss'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="navWrapper">
             <div className="logo">
                <Link to={'/'} className='link'>
                <LocalHospitalOutlinedIcon className='icon'/>
            <span className="logoText">Med-On-D-Go</span>
            </Link>
        </div>
        <div className="navLists">
            <div className="navbar-toggle">
            <span></span>
            <span></span>
            <span></span>
        </div>
            <ul className="navList">
            <li className="navItem">
             <HashLink to="#howto" className='link'>
                <ArticleOutlinedIcon className='icon'/>
                <span>How to</span>
                </HashLink>
                </li>
            <li className="navItem">
                <HashLink to="#feature" className='link'>
                <VisibilityOutlinedIcon className='icon'/>
                <span>Features</span>
                </HashLink>
                </li>
            <li className="navItem">
                <Link to="#" className='link'>
                <ContactsOutlinedIcon className='icon'/>
                <span>Contact</span>
                </Link>
                </li>
        </ul>
        <div className="buttons">
                <Link to="/askai" className='link'>
        <button className="chat">Ask ai</button>
        </Link>
                <Link to="/login" className='link'>
        {/* <button className="login">Login</button> */}
        </Link>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar