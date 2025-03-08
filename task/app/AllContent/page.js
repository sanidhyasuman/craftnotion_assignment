import data from "../Assets/List.json";
import styles from "../styles/AllContent.module.css";
import { MdOutlineInsertChart, MdOutlineDashboard } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";


const icons = {
  MdOutlineInsertChart,
  MdOutlineDashboard,
  IoDocumentTextOutline,
  AiOutlineExperiment,
  FaRegFlag,
  HiOutlineUsers,
};

const AllContent = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>All Content</h1>
      <div className={styles.header}>
        <p className={styles.totalItems}>{data.length} items</p>
        <p className={styles.dropdown}>
          Relevance <FaChevronDown className={styles.icon} />
        </p>
      </div>

      <div className={styles.listContainer}>

        <div className={styles.listHeader}>
          <div className={styles.itemField}>Name</div>
          <div className={styles.itemField}>Last Modified</div>
          <div className={styles.itemField}>Views</div>
          <div className={styles.itemField}>Editors</div>
        </div>

        {data.map((item, index) => {
          const Icon = icons[item.icon];

          return (
            <div key={index} className={styles.listItem}>
              <div className={styles.itemField}>
                <Icon style={{ color: item.color, marginRight: "5px", fontSize: "1rem" }} />
                {item.name}
              </div>
              <div className={styles.itemField}>{item.lastModified}</div>
              <div className={styles.itemField}>{item.views} views</div>
              <div className={styles.itemField}>
                <span className={styles.editorAvatar}>{item.editors}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};


export default AllContent;
