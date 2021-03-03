import styles from "./Sidebar.module.css"
import DetailsIcon from '@material-ui/icons/Details';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import ClassIcon from '@material-ui/icons/Class';
import SubjectIcon from '@material-ui/icons/Subject';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ChatIcon from '@material-ui/icons/Chat';
import DescriptionIcon from '@material-ui/icons/Description';
import { Link } from "react-router-dom";

const Sidebar = () => {

    return ( 
        <div className={styles.sidebar}>
            <Link to="/dashboard/">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <DetailsIcon className={styles.icon} />
                    <div className={styles.iconName}>Details</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/home">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <DashboardIcon className={styles.icon} />
                    <div className={styles.iconName}>Dashboard</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/students">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <SupervisorAccountIcon className={styles.icon} />
                    <div className={styles.iconName}>Students</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/teachers">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <PermIdentityIcon className={styles.icon} />
                    <div className={styles.iconName}>Teachers</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/classes">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <ClassIcon className={styles.icon} />
                    <div className={styles.iconName}>Classes</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/subjects">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <SubjectIcon className={styles.icon} />
                    <div className={styles.iconName}>Subjects</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/messaging">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <ChatIcon className={styles.icon} />
                    <div className={styles.iconName}>Messaging</div>
                </div>
            </div>
            </Link>
            {/* <Link to="/dashboard/fees">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <AttachMoneyIcon className={styles.icon} />
                    <div className={styles.iconName}>Fees</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/attendence">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <EventAvailableIcon className={styles.icon} />
                    <div className={styles.iconName}>Attendence</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/income">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <AccountBalanceWalletIcon className={styles.icon} />
                    <div className={styles.iconName}>Income</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/expense">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <ListAltIcon className={styles.icon} />
                    <div className={styles.iconName}>Expense</div>
                </div>
            </div>
            </Link>
            <Link to="/dashboard/reports">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <AssessmentIcon className={styles.icon} />
                    <div className={styles.iconName}>Reports</div>
                </div>
            </div>
            </Link>
            
            <Link to="/dashboard/documents">
            <div className={styles.tab}>
                <div className={styles.logo}>
                    <DescriptionIcon className={styles.icon} />
                    <div className={styles.iconName}>Documents</div>
                </div>
            </div>
            </Link> */}
        </div>
     );
}
 
export default Sidebar;