import Sms from "../../components/Sms/Sms";
import styles from "./Messaging.module.css"
import Button from '@material-ui/core/Button';

const Messaging = () => {
    return ( 
        <div className={styles.messaging}>
            <p className={styles.heading}>Messaging</p>
            <main className={styles.main}>
                <Sms>
                    <form>
                        <textarea name="" id=""></textarea>
                        <Button variant="contained" color="primary">Send</Button>
                    </form>
                </Sms>
                
            </main>
        </div>
     );
}
 
export default Messaging;