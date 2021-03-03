import { useEffect, useState } from "react";
import styles from "./Card.module.css"

const Card = ({ img, name, value, color }) => {

    const [count, setCount] = useState(0)
    
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
        </div>
     );
}
 
export default Card;