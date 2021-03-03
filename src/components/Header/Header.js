import styles from "./Header.module.css"
import logo from "../../images/logo.png"
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
    const [show, setShow] = useState('none')
    const handleClick = () => {
        setShow(show === "none" ? "block" : "none");
    }

    return ( 
        <div className={styles.header}>
            <div className={styles.left}>
                <img src={logo} alt=""/>
                <span className={styles.school}>Eden Education</span>
            </div>
            <div className={styles.right}>
                <span className={styles.name}>Admin</span>
                <Avatar onClick={handleClick} src="/broken-image.jpg" />
            </div>
            <div className={styles.popup} style={{"display": show}}>
                <ul>
                    <Link to="/"><li>Settings</li></Link>
                    <hr/>
                    <Link to="/"><li>Logout</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default Header;