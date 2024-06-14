import { memo } from "react";
import PropertyFormCard from "./property-form-card";
import PropTypes from "prop-types";
import styles from "./rent-properties-form.module.css";

const RentPropertiesForm = memo(({ className = "" }) => {
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
        <div className={styles.cardRow}>
          <PropertyFormCard />
          <PropertyFormCard propBackgroundImage="url('/card-21@3x.png')" />
          <PropertyFormCard propBackgroundImage="url('/card-31@3x.png')" />
          <PropertyFormCard propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </div>
  );
});

RentPropertiesForm.propTypes = {
  className: PropTypes.string,
};

export default RentPropertiesForm;
