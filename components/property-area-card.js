import { memo, useMemo } from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "./property-area-card.module.css";

const PropertyAreaCard = memo(
  ({ className = "", cityName, propBackgroundImage, propPadding }) => {
    const card1Style = useMemo(() => {
      return {
        backgroundImage: propBackgroundImage,
        padding: propPadding,
      };
    }, [propBackgroundImage, propPadding]);

    return (
      <Link
        className={[styles.card1, className].join(" ")}
        href="/properties-grid-view"
        style={card1Style}
      >
        <div className={styles.text}>
          <div className={styles.centerville}>{cityName}</div>
          <div className={styles.listings}>25 listings</div>
        </div>
      </Link>
    );
  }
);

PropertyAreaCard.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propPadding: PropTypes.any,
};

export default PropertyAreaCard;
