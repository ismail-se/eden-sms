import { Button, TextField } from "@material-ui/core";
import BigCard from "../../components/BigCard/BigCard";
import styles from "./Classes.module.css"
import classes from "../../icons/class.svg"
import StickyHeadTable from "../../components/Table/Table";

const Classes = () => {
    return ( 
        <div className={styles.classes}>
            <p className={styles.heading}>Classes</p>
            <main className={styles.main}>
                <form>
                <TextField id="outlined-basic" label="Class" variant="outlined" />
                <Button variant="contained" color="primary">Add Class</Button>
                </form>
                <BigCard img={classes} name="Classes" value={108} color="#fc930a">
                    <StickyHeadTable />
                </BigCard>
            </main>
        </div>
     );
}
 
export default Classes;