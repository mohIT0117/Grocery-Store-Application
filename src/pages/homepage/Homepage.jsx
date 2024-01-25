import "./Homepage.css";
import {Categories} from "../index";
import {Link} from "react-router-dom";



function Homepage(){

    return(
    <div className="homepage">
        <div className="hero-container">
           
            <div>
                <p className="hero-text">Your choice matters, Buy groceries at Grocers to make the best choice...</p>
                <Link to="/products"><button className="button primary-blue">Shop now</button></Link>
            </div>
        </div>
        <Categories />
    </div>
    );
}

export { Homepage }