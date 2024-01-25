import { EPISODE_LIST_PAGE } from '../routes'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

/*
    App's navbar, contains a logo with a link to the main page.
*/

export default function Navbar(){
    return (
        <div className="navbar">
            <Link to={EPISODE_LIST_PAGE}><img className="logo-img" src={logo}/></Link>
        </div>
    );
}

