import { Button, TextField } from "@material-ui/core";
import BigCard from "../../components/BigCard/BigCard";
import styles from "./Subjects.module.css"
import subject from "../../icons/subject.svg"
import StickyHeadTable from "../../components/Table/Table";

const Subjects = () => {
    return ( 
        <div className={styles.subjects}>
            <p className={styles.heading}>Subjects</p>
            <main className={styles.main}>
                <form>
                <TextField id="outlined-basic" label="Subject" variant="outlined" />
                <Button variant="contained" color="primary">Add Subject</Button>
                </form>
                <BigCard img={subject} name="Subjects" value={108} color="#fc930a">
                    <StickyHeadTable />
                </BigCard>
            </main>
        </div>
     );
}
 
export default Subjects;