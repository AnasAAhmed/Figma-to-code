import { memo } from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";
import Link from "next/link";

const Header = memo(({ className = "" }) => {
  return (
    <header className={[styles.topHeader, className].join(" ")}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <Link href={"/"} className={styles.home}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
          </Link>
          <Link href={"/"} className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </Link>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <Link href={"/"} className={styles.home}>HOME</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>ABOUT US</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>OUR AGENTS</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>PROPERTIES</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>GALLERY</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>BLOG</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>CONTACT US</Link>
            <Link href={"/properties-grid-view"} className={styles.home}>SEARCH</Link>
          </div>
          <button className={styles.hamburger}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
