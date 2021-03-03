import styles from "./Teachers.module.css"
import teacher from "../../icons/teacher.svg"
import ColorCard from "../../components/ColorCard/ColorCard";
import BigCard from "../../components/BigCard/BigCard";
import Cards from "../../components/Cards/Cards";
import StickyHeadTable from "../../components/Table/Table";

const Teachers = () => {
    return ( 
        <div className={styles.teachers}>
            <p className={styles.heading}>Teachers</p>
            <main className={styles.main}>
                <Cards>
                   <ColorCard img={teacher} name1="Register" name2="Teacher" color="#51ab55" color2="#85ce88" /> 
                   <ColorCard img={teacher} name1="Update" name2="Teacher" color="#12b8cd" color2="#a1e5ee" /> 
                   <ColorCard img={teacher} name1="Delete" name2="Teacher" color="#e7403c" color2="#ff6e6e" /> 
                </Cards>
                <BigCard img={teacher} name="Students" value={108} color="#fc930a">
                    <StickyHeadTable />
                </BigCard>
            </main>
        </div>
     );
}
 
export default Teachers;