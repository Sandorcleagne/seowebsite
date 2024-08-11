import React from "react";
import styles from "./styles.module.css";
const ClientResultSection = () => {
  const {
    outerSection,
    headingSection,
    mainHeading,
    mainHeading1,
    mainHeading2,
  } = styles;
  return (
    <div className={outerSection}>
      <div className={headingSection}>
        <div className={mainHeading}>
          <h2 className={mainHeading1}>
            our clients <span className={mainHeading2}>get results</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClientResultSection;
