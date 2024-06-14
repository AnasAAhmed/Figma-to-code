import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./info-card.module.css";

const InfoCard = memo(
  ({ className = "", listingImageId, homeActionImageUrl, propWidth }) => {
    const sellYourHomeStyle = useMemo(() => {
      return {
        width: propWidth,
      };
    }, [propWidth]);

    return (
      <div
        className={[styles.sellYourHome, className].join(" ")}
        style={sellYourHomeStyle}
      >
        <div className={styles.contents}>
          <img className={styles.icon} alt="" src={listingImageId} />
          <div className={styles.contents}>
            <div className={styles.sellYourHome1}>{homeActionImageUrl}</div>
            <div className={styles.weDoA}>
              We do a free evaluation to be sure you want to start selling.
            </div>
            <button className={styles.readMore}>Read more</button>
          </div>
        </div>
      </div>
    );
  }
);

InfoCard.propTypes = {
  className: PropTypes.string,
  listingImageId: PropTypes.string,
  homeActionImageUrl: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default InfoCard;
