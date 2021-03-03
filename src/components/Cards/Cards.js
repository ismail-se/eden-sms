import styles from "./Cards.module.css"

const Cards = ({ children }) => {
    return ( 
    <div className={styles.cards}>
        {children}
    </div> );
}
 
export default Cards;