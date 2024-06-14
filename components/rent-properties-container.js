import { memo } from "react";
import PropertyGridCard from "./property-grid-card";
import PropTypes from "prop-types";
import styles from "./rent-properties-container.module.css";

const RentPropertiesContainer = memo(({ className = "" }) => {
  return (
    <div className={[styles.latestPropertiesOfRentCard, className].join(" ")}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <div className={styles.latestPropertiesOf}>
            Latest Properties of Rent
          </div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cardsRow}>
          <PropertyGridCard
            imageDimensions="/property-image@2x.png"
            imageDimensionsText="/ellipse-1@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
          />
          <PropertyGridCard
            imageDimensions="/property-image1@2x.png"
            imageDimensionsText="/ellipse-1@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
          />
          <PropertyGridCard
            imageDimensions="/property-image2@2x.png"
            imageDimensionsText="/ellipse-1@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
          />
          <PropertyGridCard
            imageDimensions="/property-image3@2x.png"
            imageDimensionsText="/ellipse-1@2x.png"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
          />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </div>
  );
});

RentPropertiesContainer.propTypes = {
  className: PropTypes.string,
};

export default RentPropertiesContainer;
