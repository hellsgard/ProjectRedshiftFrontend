import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <div>
            <h2> This is the nav bar </h2>
            <Link to="/home">
                <h4> Home </h4>
                </Link>
            <Link to="/lock">
                <h4> Lock console </h4>
            </Link>
                <Link to="/logout">
                <h4> Logout </h4>
                </Link>
        </div>
     );
}
 
export default Nav;