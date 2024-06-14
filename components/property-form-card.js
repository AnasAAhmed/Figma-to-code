import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./property-form-card.module.css";

const PropertyFormCard = memo(({ className = "", propBackgroundImage }) => {
  const card11Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.card1, className].join(" ")} style={card11Style}>
      <div className={styles.details}>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
          <div className={styles.washington}>Washington</div>
        </div>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/arrowsout1.svg" />
          <div className={styles.washington}>12000</div>
        </div>
      </div>
    </div>
  );
});

PropertyFormCard.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default PropertyFormCard;
