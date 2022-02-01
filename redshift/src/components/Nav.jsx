import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <div>
            <h2> This is the nav bar </h2>
            <Link to="/Welcome">
                <h4> Home </h4>
                </Link>
            <Link to="/Lock">
                <h4> Lock console </h4>
            </Link>
                <Link to="/Logout">
                <h4> Logout </h4>
                </Link>
        </div>
     );
}
 
export default Nav;