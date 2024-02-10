
import Programs from "../Components/Programs";
import styles from './Home.module.css';


const Home = () => {
    return <section className={styles.programsParentDiv}>
        <div className={styles.wrapper}>
            <Programs path='bsse'>BSSE</Programs>
            <Programs path='bscs'>BSCS</Programs>
        </div>

    </section>
}

export default Home