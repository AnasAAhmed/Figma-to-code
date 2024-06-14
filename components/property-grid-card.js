import { memo, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./property-grid-card.module.css";

const PropertyGridCard = memo(
  ({
    className = "",
    imageDimensions,
    imageDimensionsText,
    propWidth,
    propFlex,
    propMinWidth,
  }) => {
    const card12Style = useMemo(() => {
      return {
        width: propWidth,
        flex: propFlex,
        minWidth: propMinWidth,
      };
    }, [propWidth, propFlex, propMinWidth]);

    return (
      <div className={[styles.card1, className].join(" ")} style={card12Style}>
        <img
          className={styles.propertyImageIcon}
          alt=""
          src={imageDimensions}
        />
        <div className={styles.propertyName}>
          <div className={styles.alliumPlaceOrlando}>
            92 ALLIUM PLACE, ORLANDO FL 32827
          </div>
        </div>
        <div className={styles.price}>
          <div className={styles.div}>$ 590,693</div>
        </div>
        <div className={styles.moreDetails}>
          <div className={styles.parking}>
            <img className={styles.carIcon} alt="" src="/car.svg" />
            <div className={styles.ft}>4</div>
          </div>
          <div className={styles.parking}>
            <img className={styles.carIcon} alt="" src="/bathtub.svg" />
            <div className={styles.ft}>4</div>
          </div>
          <div className={styles.parking}>
            <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
            <div className={styles.ft}>2,096.00 ft</div>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.user}>
            <img
              className={styles.userChild}
              alt=""
              src={imageDimensionsText}
            />
            <div className={styles.jennyWilson}>Jenny Wilson</div>
          </div>
          <div className={styles.ctas}>
            <div className={styles.share}>
              <img
                className={styles.sharenetworkIcon}
                alt=""
                src="/sharenetwork.svg"
              />
            </div>
            <div className={styles.share}>
              <img
                className={styles.sharenetworkIcon}
                alt=""
                src="/heart.svg"
              />
            </div>
            <div className={styles.share}>
              <img className={styles.sharenetworkIcon} alt="" src="/plus.svg" />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PropertyGridCard.propTypes = {
  className: PropTypes.string,
  imageDimensions: PropTypes.string,
  imageDimensionsText: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default PropertyGridCard;
