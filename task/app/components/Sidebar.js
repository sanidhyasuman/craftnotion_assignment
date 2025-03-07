import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { MdOutlineHome } from "react-icons/md";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
            <li className={styles.sidebarItem}>
                    <Link href="#">
                    <MdOutlineHome />
                        Home
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="/AllContent">
                        All Content
                    </Link>
                </li>

                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Live Events
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Ask Amplitude
                    </Link>
                </li>
                <hr />
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Product Analytics
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Web Analytics
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Users
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Session Replay
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                       Experiment
                    </Link>
                </li>
                <hr />
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Data
                    </Link>
                </li>
                <li className={styles.sidebarItem}>
                    <Link href="#">
                        Releases
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
