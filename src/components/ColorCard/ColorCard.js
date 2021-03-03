import styles from "./ColorCard.module.css"

const ColorCard = ({ img, name1, name2, color, color2 }) => {
    return ( 
        <div className={styles.colorCard} style={{backgroundColor: color}}>
            <div className={styles.name}>
                <h2>{name1}<br/>{name2}</h2>
            </div>
            <div className={styles.cardUp} style={{backgroundColor: color2}}>
                <img src={img} alt=""/>
            </div>
        </div>
     );
}
 
export default ColorCard
