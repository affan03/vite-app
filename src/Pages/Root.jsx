import { Outlet } from "react-router-dom"
import MainNavigation from "../Components/MainNavigation";
import styles from './Root.module.css'


const Root = () => {
    return <>
        <div className={styles.super}>
            <MainNavigation />
            <Outlet />
        </div>
    </>
}

export default Root