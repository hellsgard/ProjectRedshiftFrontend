import {Link} from 'react-router-dom';

const Nav = () => {
    return ( 
        <div>
            <h2> This is the nav bar </h2>
<<<<<<< HEAD
            <Link to="/home">
=======
            <Link to="/Home">
>>>>>>> 70f79a144000d9382038245aac74ded4fd8f437c
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