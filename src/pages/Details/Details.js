import Cards from "../../components/Cards/Cards";
import ColorCard from "../../components/ColorCard/ColorCard";
import styles from "./Details.module.css"
import student from "../../icons/student.svg"
import logo from "../../images/logo.png"

const Details = () => {
    return ( 
        <div className={styles.details}>
            <p className={styles.heading}>Details</p>
            <main className={styles.main}>
                <Cards>
                   <ColorCard img={logo} name1="Eden Education" color="#12b8cd" color2="#a1e5ee" /> 
                </Cards>
                <Cards>
                   <ColorCard img={student} name1="Smartcodes" color="#e7403c" color2="#ff6e6e" /> 
                </Cards>
            </main>
        </div>
     );
}
 
export default Details;