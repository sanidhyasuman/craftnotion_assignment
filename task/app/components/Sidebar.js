import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { MdOutlineHome } from "react-icons/md";
import { TbTriangleSquareCircle } from "react-icons/tb";
import { HiCursorClick } from "react-icons/hi";
import { BsStars } from "react-icons/bs";
import { MdOutlineInsertChart } from "react-icons/md";
import { FiMonitor } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { FaRegPlayCircle } from "react-icons/fa";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaDatabase } from "react-icons/fa";
import { TbArrowGuide } from "react-icons/tb";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarList}>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <MdOutlineHome className={styles.icon} />
            Home
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="/AllContent">
            <TbTriangleSquareCircle className={styles.icon} />
            All Content
          </Link>
        </li>

        <li className={styles.sidebarItem}>
          <Link href="/live_events">
            <HiCursorClick className={styles.icon} />
            Live Events
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <BsStars className={styles.icon} />
            Ask Amplitude
          </Link>
        </li>
        <hr />

        <li className={styles.sidebarItem}>
          <Link href="#">
            <div className={styles.dropdown}>
              <span>
                <MdOutlineInsertChart className={styles.icon} />
                Product Analytics
              </span>
              <FaChevronDown className={styles.icon} />
            </div>

          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <div className={styles.dropdown}>
              <span>
                <FiMonitor className={styles.icon} />
                Web Analytics
              </span>
              <FaChevronDown className={styles.icon} />
            </div>
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <div className={styles.dropdown}>
              <span>
                <HiOutlineUsers className={styles.icon} />
                Users
              </span>
              <FaChevronDown className={styles.icon} />
            </div>
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <FaRegPlayCircle className={styles.icon} />
            Session Replay
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <div className={styles.dropdown}>
              <span>
                <AiOutlineExperiment className={styles.icon} />
                Experiment
              </span>
              <FaChevronDown className={styles.icon} />
            </div>
          </Link>
        </li>
        <hr />
        <li className={styles.sidebarItem}>
          <Link href="#">
            <FaDatabase className={styles.icon} />
            Data
          </Link>
        </li>
        <li className={styles.sidebarItem}>
          <Link href="#">
            <TbArrowGuide className={styles.icon} />
            Releases
          </Link>
        </li>
      </ul>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span>MTU</span>
          <span>4/50k</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <button className={styles.manageButton}>Manage Plan</button>
      </div>
    </div>
  );
};

export default Sidebar;
