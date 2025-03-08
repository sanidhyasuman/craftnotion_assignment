import React from "react";
import styles from "../styles/FilterSection.module.css";
import { MdOutlineInsertChart, MdOutlineDashboard } from "react-icons/md";
import { AiOutlineExperiment } from "react-icons/ai";
import { FaRegFlag } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";


const filterTypes = [
  { name: "Chart", icon: <MdOutlineInsertChart />, color: "#FF5733" },
  { name: "Cohort", icon: <HiOutlineUsers />, color: "#33A1FF" },
  { name: "Dashboard", icon: <MdOutlineDashboard />, color: "#28A745" },
  { name: "Experiment", icon: <AiOutlineExperiment />, color: "#FFC107" },
  { name: "Flag", icon: <FaRegFlag />, color: "#DC3545" },
  { name: "Notebook", icon: <IoDocumentTextOutline />, color: "#6F42C1" }
];

const FilterSection = () => {


  return (
    <div className={styles.filterSection}>

      <div className={styles.header}>
        <h5>Filters</h5>
        <button className={styles.clearButton} disabled>Clear All Filters</button>
      </div>


      <div className={styles.filterInput}>
        <label >Editors</label>
        <input type="text" className={styles.inputField} placeholder="" />
      </div>

      <div className={styles.filterInput}>
        <label>Space</label>
        <input type="text" className={styles.inputField} placeholder="" />
      </div>

      <div className={styles.typeFilters}>
        <h4>Type</h4>
        <div className={styles.filterItem}>
          <input type="checkbox" name="chart" value="Chart" />
          <span className={styles.icon} style={{ color: "#FF5733" }}>
            <MdOutlineInsertChart />
          </span>
          Chart
        </div>

        <div className={styles.filterItem}>
          <input type="checkbox" name="cohort" value="Cohort" />
          <span className={styles.icon} style={{ color: "#33A1FF" }}>
            <HiOutlineUsers />
          </span>
          Cohort
        </div>

        <div className={styles.filterItem}>
          <input type="checkbox" name="dashboard" value="Dashboard" />
          <span className={styles.icon} style={{ color: "#28A745" }}>
            <MdOutlineDashboard />
          </span>
          Dashboard
        </div>

        <div className={styles.filterItem}>
          <input type="checkbox" name="experiment" value="Experiment" />
          <span className={styles.icon} style={{ color: "#FFC107" }}>
            <AiOutlineExperiment />
          </span>
          Experiment
        </div>

        <div className={styles.filterItem}>
          <input type="checkbox" name="flag" value="Flag" />
          <span className={styles.icon} style={{ color: "#DC3545" }}>
            <FaRegFlag />
          </span>
          Flag
        </div>

        <div className={styles.filterItem}>
          <input type="checkbox" name="notebook" value="Notebook" />
          <span className={styles.icon} style={{ color: "#6F42C1" }}>
            <IoDocumentTextOutline />
          </span>
          Notebook
        </div>

      </div>

      <div className={styles.typeFilters}>
        <h4>content is....</h4>
        <div className={styles.filterItem}>
          <input type="checkbox" name="archived" value="archived" />
          <label >Archived</label>
        </div>
      </div>

      <div className={styles.filterInput}>
        <label >Project</label>
        <input type="text" className={styles.inputField} placeholder="Filter by project" />
      </div>


      <div className={styles.filterInput}>
        <label >Last Modified</label>
        <select className={styles.dropdown}>
          <option value="today">Today</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
        </select>
      </div>

    </div>
  );
};

export default FilterSection;
