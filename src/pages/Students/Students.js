import BigCard from "../../components/BigCard/BigCard";
import Cards from "../../components/Cards/Cards";
import StickyHeadTable from "../../components/Table/Table";
import styles from "./Students.module.css"
import student from "../../icons/student.svg"
import ColorCard from "../../components/ColorCard/ColorCard";

const Stduents = () => {

    return ( 
        <div className={styles.students}>
            <p className={styles.heading}>Students</p>
            <main className={styles.main}>
                <Cards>
                   <ColorCard img={student} name1="Register" name2="Student" color="#51ab55" color2="#85ce88" /> 
                   <ColorCard img={student} name1="Update" name2="Student" color="#12b8cd" color2="#a1e5ee" /> 
                   <ColorCard img={student} name1="Delete" name2="Student" color="#e7403c" color2="#ff6e6e" /> 
                </Cards>
                <BigCard img={student} name="Students" value={108} color="#fc930a">
                    <StickyHeadTable />
                </BigCard>
            </main>
        </div>
     );
}
 
export default Stduents;