import { memo } from "react";
import PropertyAreaCard from "./property-area-card";
import PropTypes from "prop-types";
import styles from "./area-property-container.module.css";

const AreaPropertyContainer = memo(({ className = "" }) => {
  return (
    <div className={[styles.propertiesByAreaImagesSect, className].join(" ")}>
      <div className={styles.description}>
        <div className={styles.propertiesByArea}>Properties by Area</div>
        <div className={styles.vestibulumAnteIpsum}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardwrapper}>
          <div className={styles.row1}>
            <PropertyAreaCard cityName="Centerville" />
            <PropertyAreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-2@3x.png')"
              propPadding="unset"
            />
            <PropertyAreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-3@3x.png')"
              propPadding="unset"
            />
          </div>
          <div className={styles.row2}>
            <PropertyAreaCard
              cityName="Arlington"
              propBackgroundImage="url('/card-4@3x.png')"
              propPadding="10px"
            />
            <PropertyAreaCard
              cityName="Centerville"
              propBackgroundImage="url('/card-5@3x.png')"
              propPadding="10px"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

AreaPropertyContainer.propTypes = {
  className: PropTypes.string,
};

export default AreaPropertyContainer;
