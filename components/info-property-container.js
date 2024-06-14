import { memo } from "react";
import InfoCard from "./info-card";
import PropTypes from "prop-types";
import styles from "./info-property-container.module.css";

const InfoPropertyContainer = memo(({ className = "" }) => {
  return (
    <div className={[styles.propertiesByAreaFeatureCar, className].join(" ")}>
      <div className={styles.areaContent}>
        <div className={styles.areaLabels}>
          <div className={styles.areaTitle}>Properties by Area</div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.propertiesRow}>
          <InfoCard
            listingImageId="/icon.svg"
            homeActionImageUrl="Sell your home"
          />
          <InfoCard
            listingImageId="/icon1.svg"
            homeActionImageUrl="Rent your home"
            propWidth="312px"
          />
          <InfoCard
            listingImageId="/icon2.svg"
            homeActionImageUrl="Buy a home"
            propWidth="unset"
          />
          <InfoCard
            listingImageId="/icon3.svg"
            homeActionImageUrl="Free marketing"
            propWidth="312px"
          />
        </div>
      </div>
    </div>
  );
});

InfoPropertyContainer.propTypes = {
  className: PropTypes.string,
};

export default InfoPropertyContainer;
