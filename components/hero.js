import { memo, useCallback, useState } from "react";
// import "antd/dist/reset.css";
// import { Dropdown, Menu } from "antd";
// import { DownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import styles from "./hero.module.css";
import DropDown from "./DropDown";

const Hero = memo(({ className = "" }) => {
  const router = useRouter();
  const [dropValues, setDropValues] = useState("Select your city")
  const [dropValues2, setDropValues2] = useState("Select property type")
  const [dropValues3, setDropValues3] = useState("Select rent rate")

  const onSearchCTAClick = useCallback(() => {
    router.push("/properties-grid-view");
  }, [router]);

  return (
    <div className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroSectionContents}>
        <div className={styles.text}>
          <div className={styles.findYourDream}>Find Your Dream Home</div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.rentsale}>
          <div className={styles.tabs}>
            <button className={styles.rent}>
              <div className={styles.search}>Rent</div>
            </button>
            <button className={styles.sale}>
              <div className={styles.sale1}>Sale</div>
            </button>
          </div>
          <div className={styles.formwrapper}>
            <div className={styles.formcontainer}>
              <div className={styles.locations}>
                <div className={styles.locations1}>Locations</div>
                <DropDown heading={dropValues} setDropValues={setDropValues} options={["New York", "Los Angeles", "Chicago", "Berlin"]} />
              </div>
              <div className={styles.propertyType}>
                <div className={styles.propertyType1}>Property Type</div>
                <DropDown heading={dropValues2} setDropValues={setDropValues2} options={["Studio apartments", "One-bedroom apartments", "Two-bedroom apartments", "Three-bedroom apartments", "Four or more bedroom apartments/houses"]} />
              </div>
              <div className={styles.rentRange}>
                <div className={styles.propertyType1}>Rent Range</div>

                <DropDown heading={dropValues3} setDropValues={setDropValues3} options={["$500-$2000", "$2500-$10000", "$10000+",]} />
              </div>
              <button className={styles.searchCta} onClick={onSearchCTAClick}>
                <div className={styles.search}>Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
