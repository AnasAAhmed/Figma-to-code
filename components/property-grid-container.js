
import PropertyGridCard from "./property-grid-card";
import PropTypes from "prop-types";
import styles from "./property-grid-container.module.css";

const PropertyGridContainer = ({allProperties}) => {
  return (
    <div className={[styles.cardwrapper].join(" ")}>
      <div className={styles.cards}>

        {/* {allProperties.map((property)=>(
          <PropertyGridCard
          key={property.id}
         name={property.name}
         imageUrl={property.image}
         price={property.price}
        />
        ))} */}
        <PropertyGridCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
        />
        <PropertyGridCard
          imageDimensions="/property-image5@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image6@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image7@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image4@2x.png"
          imageDimensionsText="/ellipse-1@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image8@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image9@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
        <PropertyGridCard
          imageDimensions="/property-image10@2x.png"
          imageDimensionsText="/ellipse-11@2x.png"
          propWidth="350px"
          propFlex="unset"
          propMinWidth="unset"
        />
      </div>
    </div>
  );
};

PropertyGridContainer.propTypes = {
  className: PropTypes.string,
};

export default PropertyGridContainer;
