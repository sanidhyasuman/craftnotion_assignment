import data from "../Assets/List.json";
import styles from "../styles/AllContent.module.css";
import { FaChevronDown } from "react-icons/fa";

const AllContent = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>All Content</h1>

            {/* Sub-header Section */}
            <div className={styles.header}>
                <p className={styles.totalItems}>{data.length} items</p>
                <p className={styles.dropdown}>
                    Relevance <FaChevronDown className={styles.icon} />
                </p>
            </div>

            {/* List View Instead of Table */}
            <div className={styles.listContainer}>

                <div className={styles.listHeader}>
                    <div className={styles.itemField}>Name</div>
                    <div className={styles.itemField}>Last Modified</div>
                    <div className={styles.itemField}>Views</div>
                    <div className={styles.itemField}>Editors</div>
                </div>
                {data.map((item, index) => (
                    <div key={index} className={styles.listItem}>
                        <div className={styles.itemField}> {item.name}</div>
                        <div className={styles.itemField}> {item.lastModified}</div>
                        <div className={styles.itemField}> {item.views} views</div>
                        <div className={styles.itemField}> {item.editors}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default AllContent;
