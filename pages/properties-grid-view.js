
// import { createClient } from "@supabase/supabase-js";
import PropertyGridContainer from "../components/property-grid-container";
import Footer from "../components/footer";
import styles from "./properties-grid-view.module.css";
import {useState } from "react";
import DropDown from "@/components/DropDown";


const defaultOrder = [
  {
    key: "1",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Popular Properties
      </a>
    )
  },
  {
    key: "2",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Latest Properties
      </a>
    )
  },
  {
    key: "3",
    label: (
      <a onClick={(e) => e.preventDefault()}>
        Recommended Properties
      </a>
    )
  },
]
const PropertiesGridView = () => {

  const [properties, setProperties] = useState([])
  const [dropValues, setDropValues] = useState("Default Order")

  // const client = createClient(
  //   process.env.NEXT_PUBLIC_URL,
  //   process.env.NEXT_PUBLIC_KEY,
  // );

  // useEffect(() => {
  //   const fetchProperties = async () => {
  //     const result = await client.from('properties').select('*');
  //     setProperties(result.data);
  //   }
  //   fetchProperties();
  // }, [])
  return (
    <div className={styles.propertiesGridView}>
      {/* <Header /> */}
      <div className={styles.category}>
        <div className={styles.properties}>
          <div className={styles.properties1}>Properties</div>
          <div className={styles.homePropertiesContainer}>
            <span>{`Home / `}</span>
            <span className={styles.properties2}>Properties</span>
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
          </div>
        </div>
        <PropertyGridContainer allProperties={properties} />
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
      <Footer />
    </div>
  );
};

export default PropertiesGridView;
