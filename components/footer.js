import PropTypes from "prop-types";
import styles from "./footer.module.css";
import Link from "next/link";

const Footer = () => {


  return (
    <div
      className={[styles.footerSection].join(" ")}
      
    >
      <footer className={styles.footer}>
        <div className={styles.contactUs}>
          <div className={styles.logo}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
            <div className={styles.reisParent}>
              <div className={styles.reis}>REIS</div>
              <div className={styles.realState}>Real State</div>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <div className={styles.contactUs1}>Contact Us</div>
            <div className={styles.home}>Call : +123 400 123</div>
            <div className={styles.praesentNullaMassa}>
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className={styles.emailExamplemailcom}>
              Email: example@mail.com
            </div>
          </div>
          <div className={styles.socialMedia}>
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo}
                alt=""
                src="/social-media-logo.svg"
              />
            </div>
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo1.svg"
              />
            </div>
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo2.svg"
              />
            </div>
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo3.svg"
              />
            </div>
            <div className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.teamAndPolicies}>Features</div>
          <div className={styles.featuresSubCategories}>
            <Link href={"/"} className={styles.home}>Home</Link>
            <div className={styles.home}>Become a Host</div>
            <div className={styles.home}>Pricing</div>
            <div className={styles.home}>Blog</div>
            <div className={styles.home}>Contact</div>
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.teamAndPolicies}>Company</div>
          <div className={styles.featuresSubCategories}>
            <div className={styles.home}>About Us</div>
            <div className={styles.home}>Press</div>
            <div className={styles.home}>Contact</div>
            <div className={styles.home}>Careers</div>
            <div className={styles.home}>Blog</div>
          </div>
        </div>
        <div className={styles.termsAndPolicies}>
          <div className={styles.teamAndPolicies}>Team and policies</div>
          <div className={styles.termsAndPoliciesSubcategori}>
            <div className={styles.home}>Terms of servies</div>
            <div className={styles.home}>Privacy Policy</div>
            <div className={styles.home}>Security</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propOverflow: PropTypes.any,
};

export default Footer;
