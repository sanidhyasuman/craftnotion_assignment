import styles from "../styles/Navbar.module.css";
import { FaChevronDown } from "react-icons/fa";
import { CiCircleQuestion, CiSettings, CiSearch, CiBellOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>

      <div className={styles.left_Container}>
      <GiHamburgerMenu className={styles.burgericon}/>
      <button className={styles.createBtn}>Create</button>
      <button className={styles.dropdown}>
          Recent <FaChevronDown className={styles.icon} />
        </button>
        <button className={styles.dropdown}>
          Favorites <FaChevronDown className={styles.icon} />
        </button>
        <button className={styles.dropdown}>
          Spaces <FaChevronDown className={styles.icon} />
        </button>
      </div>

      <div className={styles.searchBar}>
        <CiSearch className={styles.searchIcon} />
        <input type="text" placeholder="Search" />
      </div>

      <div className={styles.actions}>
        <CiBellOn className={styles.icon} />
        <CiCircleQuestion className={styles.icon} />
        <CiSettings className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
