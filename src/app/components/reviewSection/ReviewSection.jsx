import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { companyReview } from "@/app/utils/static";
const ReviewSection = () => {
  const { outerSection, innerSection, companySection, reviewCountSection } =
    styles;
  return (
    <div className={outerSection}>
      <div className={innerSection}>
        {companyReview.map((item) => (
          <div className={companySection} key={item?.id}>
            <Image
              src={item?.image}
              alt="My SVG Image"
              width={180}
              height={300}
            />
            <Image
              src={item?.stars}
              alt="review-star"
              width={100}
              height={200}
            />
            <div className={reviewCountSection}>{item?.reviewCount} Review</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
