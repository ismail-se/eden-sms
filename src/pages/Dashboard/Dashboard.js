import styles from "./Dashboard.module.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import Header from "../../components/Header/Header"
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "../Home/Home";
import Students from "../Students/Students";
import Teachers from "../Teachers/Teachers";
import Classes from "../Classes/Classes";
import Subjects from "../Subjects/Subjects";
import Details from "../Details/Details";
import Messaging from "../Messaging/Messaging";

const Dashboard = () => {
    let match = useRouteMatch();

    return ( 
        <div className={styles.dashboard}>
            <Header />
            <main className={styles.main}>
                <Sidebar />
                <Switch>
                    <Route path={`${match.path}/home`}>
                        <Home/>
                    </Route>
                    <Route path={`${match.path}/students`}>
                        <Students />
                    </Route>
                    <Route path={`${match.path}/teachers`}>
                        <Teachers />
                    </Route>
                    <Route path={`${match.path}/classes`}>
                        <Classes />
                    </Route>
                    <Route path={`${match.path}/subjects`}>
                        <Subjects />
                    </Route>
                    <Route path={`${match.path}/register-student`}>
                        <Students />
                    </Route>
                    <Route path={`${match.path}/update-student`}>
                        <Students />
                    </Route>
                    <Route path={`${match.path}/delete-student`}>
                        <Students />
                    </Route>
                    <Route path={`${match.path}/messaging`}>
                        <Messaging />
                    </Route>
                    <Route path={`${match.path}/`}>
                        <Details/>
                    </Route>
                </Switch>
            </main>
        </div>
     );
}
 
export default Dashboard;