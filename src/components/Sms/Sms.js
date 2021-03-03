import styles from "./Sms.module.css"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import message from '../../icons/message.svg';

const Sms = ({ children }) => {
    return ( 
        
        <div className={styles.sms}>
        <div className={styles.cardUp} style={{backgroundColor: "#fc930a"}}>
            <img src={message} alt=""/>
        </div>
        
        <div className={styles.search}>
            <FormControl variant="outlined" >
                <InputLabel id="demo-simple-select-outlined-label">Send to</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                //   value={age}
                //   onChange={handleChange}
                label="Age"
                defaultValue={10}
                >
                
                <MenuItem value={10}>All Students</MenuItem>
                <MenuItem value={20}>Defaulters</MenuItem>
                <MenuItem value={30}>All Teachers</MenuItem>
                </Select>
            </FormControl>
            { children }
        </div>
    </div>
     );
}
 
export default Sms;