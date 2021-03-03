import { useEffect, useState } from "react";
import styles from "./BigCard.module.css"
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {  TextField } from "@material-ui/core";



const BigCard = ({ img, name, value, color, children }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if (count < +value){
            setCount(count+1);
        }
    })

    return ( 
        <div className={styles.card}>
            <div className={styles.cardUp} style={{backgroundColor: color}}>
                <img src={img} alt=""/>
            </div>
            {name}
            <span data-target={value} className="counter">{count}</span>
            <div className={styles.search}>
                <TextField id="outlined-basic" label="Search Defaulters" variant="outlined" />
                <FormControl variant="outlined" >
                    <InputLabel id="demo-simple-select-outlined-label">Select</InputLabel>
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    //   value={age}
                    //   onChange={handleChange}
                    label="Age"
                    defaultValue={10}
                    >
                    
                    <MenuItem value={10}>By Name</MenuItem>
                    <MenuItem value={20}>By ID</MenuItem>
                    <MenuItem value={30}>By Family #</MenuItem>
                    <MenuItem value={40}>By Class</MenuItem>
                    </Select>
                </FormControl>
                { children }
            </div>
        </div>
     );
}
 
export default BigCard;