import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./contact-container.module.css";

const ContactContainer = memo(({ className = "" }) => {
  return (
    <div className={[styles.latestPropertiesOfRentCard, className].join(" ")}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <div className={styles.contactUs}>Contact us</div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <b className={styles.enquiryForm}>Enquiry Form</b>
            <div className={styles.areYouLooking}>
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                placeholder="First name"
                type="text"
              />
              <input
                className={styles.input1}
                placeholder="Last name"
                type="text"
              />
            </div>
            <input
              className={styles.destinationNameInput}
              placeholder="Email id"
              type="text"
            />
            <textarea
              className={styles.input2}
              placeholder="Comments or questions"
              rows={10}
              required={true}
            />
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Submit</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ContactContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactContainer;
