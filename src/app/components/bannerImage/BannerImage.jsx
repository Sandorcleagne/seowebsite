import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
const BannerImage = () => {
  const { outerSection, innerSection, bannerImage } = styles;
  return (
    <div className={outerSection}>
      <div className={innerSection}>
        <Image
          src="/images/Badge-Strip-1.png"
          alt="badge-strip"
          height={200}
          width={400}
          className={bannerImage}
        />
      </div>
    </div>
  );
};

export default BannerImage;
