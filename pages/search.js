import React, { useState } from 'react'
import styles from "./properties-grid-view.module.css";
import DropDown from '@/components/DropDown';
import PropertyGridContainer from '@/components/property-grid-container';
import Footer from '@/components/footer';

const search = () => {
    // const [properties, setProperties] = useState([])
    const [dropValues, setDropValues] = useState("Default Order")
    const [dropValues2, setDropValues2] = useState("Price")
  
  return (
    <div className={styles.propertiesGridView}>
    {/* <Header /> */}
    <div className={styles.category}>
      <div className={styles.properties}>
        <div className={styles.properties1}>Search</div>
        <div className={styles.homePropertiesContainer}>
          <span>{`Home / `}</span>
          <span className={styles.properties2}>Search</span>
        </div>
      </div>
    </div>
    <div className={styles.contents}>
      <div className={styles.container}>
        <div className={styles.sortBy}>
          <div className={styles.options}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/listbullets.svg"
            />
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/squaresfour.svg"
            />
          </div>
          <div className={styles.text}>Sort by:</div>
          <DropDown heading={dropValues} setDropValues={setDropValues} options={["Popular properties", "Latest properties", "Recommended properties",]} />
          {/* <DropDown heading={dropValues2} setDropValues={setDropValues2} options={["$500-$2000", "$2500-$10000", "$10000+",]} /> */}

        </div>
      </div>
      <PropertyGridContainer  />
      <div className={styles.pagination}>
        <div className={styles.backArrow}>
          <img
            className={styles.listbulletsIcon}
            alt=""
            src="/arrowleft.svg"
          />
        </div>
        <div className={styles.div}>
          <div className={styles.div1}>1</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>3</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>...</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>54</div>
        </div>
        <div className={styles.forwardArrow}>
          <img
            className={styles.listbulletsIcon}
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default search
