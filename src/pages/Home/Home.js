import Card from "../../components/Card/Card"
import Cards from "../../components/Cards/Cards"
import styles from "./Home.module.css"
import student from "../../icons/student.svg"
import teacher from "../../icons/teacher.svg"
import income from "../../icons/income.svg"
import expense from "../../icons/expense.svg"
import profit from "../../icons/profit.svg"
import BigCard from "../../components/BigCard/BigCard"
import StickyHeadTable from "../../components/Table/Table"

const Home = () => {
    return ( 
        <div className={styles.home}>
            <p className={styles.heading}>Dashboard</p>
            <main className={styles.main}>
                <Cards>
                    <Card img={student} name="Total Stuudents" value={108} color="#fc930a" />
                    <Card img={teacher} name="Total Teachers" value={108} color="#51ab55" />
                    <Card img={income} name="Total Income" value={1000} color="#e7403c" />
                    <Card img={expense} name="Total Expense" value={1000} color="#12b8cd" />
                    <Card img={income} name="Expected Income" value={1000} color="#8892d6" />
                    <Card img={profit} name="Profit" value={1000} color="#f06292" />
                </Cards>
                <BigCard img={student} name="Defaulters" value={108} color="#fc930a">
                    <StickyHeadTable />
                </BigCard>
            </main>
        </div>
     );
}
 
export default Home;