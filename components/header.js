// import { memo, useState } from "react";
// import PropTypes from "prop-types";
// import styles from "./header.module.css";
// import Link from "next/link";

// const Header = memo(({ className = "" }) => {
//   const [open, setOpen] = useState(false)
//   return (
//     <header className={[styles.topHeader, className].join(" ")}>
//       <div className={styles.topContainer}>
//         <div className={styles.logo}>
//           <Link href={"/"} className={styles.home}>
//             <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
//           </Link>
//           <Link href={"/"} className={styles.name}>
//             <div className={styles.reis}>REIS</div>
//             <div className={styles.realState}>Real State</div>
//           </Link>
//         </div>
//         <div className={styles.navigationRight}>
//           {!open && <div className={styles.navigation}>
//             <Link href={"/"} className={styles.home}>HOME</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>ABOUT US</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>OUR AGENTS</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>PROPERTIES</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>GALLERY</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>BLOG</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>CONTACT US</Link>
//             <Link href={"/properties-grid-view"} className={styles.home}>SEARCH</Link>
//           </div>}
//           <button className={styles.hamburger} onClick={() => setOpen(!open)}>
//             <img
//               className={styles.hamburgerMenuIcon}
//               alt=""
//               src="/notification.svg"
//             />
//           </button>
//         </div>
//         {open &&
//           <div className={styles.navMobContainer}>
//             <div className={styles.navMobHeader}>
//               <div className={styles.logo}>
//                 <Link href={"/"} className={styles.home}>
//                   <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
//                 </Link>
//                 <Link href={"/"} className={styles.name}>
//                   <div className={styles.reis}>REIS</div>
//                   <div className={styles.realState}>Real State</div>
//                 </Link>
//               </div>
//               <button className={styles.hamburger} onClick={() => setOpen(!open)}>
//                 <img
//                   className={styles.hamburgerMenuIcon}
//                   alt=""
//                   src="/notification.svg"
//                 />
//               </button>
//             </div>
//             <div className={styles.navMob}>
//               <Link href={"/"} className={styles.home}>HOME</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>ABOUT US</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>OUR AGENTS</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>PROPERTIES</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>GALLERY</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>BLOG</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>CONTACT US</Link>
//               <Link href={"/properties-grid-view"} className={styles.home}>SEARCH</Link>
//             </div>
//           </div>
//         }
//       </div>
//     </header>
//   );
// });

// Header.propTypes = {
//   className: PropTypes.string,
// };

// export default Header;

import { memo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./header.module.css";
import Link from "next/link";

const Header = memo(({ className = "" }) => {
  const [open, setOpen] = useState(false);

  return (
    <header className={[styles.topHeader, className].join(" ")}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <Link href="/" className={styles.home}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
          </Link>
          <Link href="/" className={styles.name}>
            <div className={styles.reis}>REIS</div>
            <div className={styles.realState}>Real State</div>
          </Link>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <Link href="/" className={styles.home}>HOME</Link>
            <Link href="/about-us" className={styles.home}>ABOUT US</Link>
            <Link href="/our-agents" className={styles.home}>OUR AGENTS</Link>
            <Link href="/properties-grid-view" className={styles.home}>PROPERTIES</Link>
            <Link href="/gallery" className={styles.home}>GALLERY</Link>
            <Link href="/blog" className={styles.home}>BLOG</Link>
            <Link href="/contact-us" className={styles.home}>CONTACT US</Link>
            <Link href="/search" className={styles.home}>SEARCH</Link>
          </div>
          <button className={styles.hamburger} onClick={() => setOpen(!open)}>
            <img className={styles.hamburgerMenuIcon} alt="" src="/notification.svg" />
          </button>
        </div>
      </div>
      <div className={`${styles.navMobContainer} ${open ? styles.menuOpen : styles.menuClosed}`}>
        <div className={styles.navMobHeader}>
          <div className={styles.logo}>
            <Link href="/" className={styles.home}>
              <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
            </Link>
            <Link href="/" className={styles.name}>
              <div className={styles.reis}>REIS</div>
              <div className={styles.realState}>Real State</div>
            </Link>
          </div>
          <button className={styles.hamburger} onClick={() => setOpen(!open)}>
            <img className={styles.hamburgerMenuIcon} alt="" src="/notification.svg" />
          </button>
        </div>
        <div className={styles.navMob}>
          <Link href="/" className={styles.home} onClick={() => setOpen(!open)}>HOME</Link>
          <Link href="/about-us" className={styles.home} onClick={() => setOpen(!open)}>ABOUT US</Link>
          <Link href="/our-agents" className={styles.home} onClick={() => setOpen(!open)}>OUR AGENTS</Link>
          <Link href="/properties-grid-view" className={styles.home} onClick={() => setOpen(!open)}>PROPERTIES</Link>
          <Link href="/gallery" className={styles.home} onClick={() => setOpen(!open)}>GALLERY</Link>
          <Link href="/blog" className={styles.home} onClick={() => setOpen(!open)}>BLOG</Link>
          <Link href="/contact-us" className={styles.home} onClick={() => setOpen(!open)}>CONTACT US</Link>
          <Link href="/search" className={styles.home} onClick={() => setOpen(!open)}>SEARCH</Link>
        </div>
      </div>
    </header>
  );
});

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
