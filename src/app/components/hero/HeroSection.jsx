"use client";
import React from "react";
import styles from "./styles.module.css";
import { Button, Form, InputGroup } from "react-bootstrap";
const HeroSection = () => {
  const {
    mainHeroSection,
    innerHeroSection,
    mainHeading,
    mainHeading2,
    subHeading,
    emailFeild,
    emailForm,
    emailButton,
    noFocusBorder,
    formContainer,
  } = styles;
  return (
    <div className={mainHeroSection}>
      <div className={innerHeroSection}>
        <div className={formContainer}>
          <h1 className={mainHeading}>
            Results<span className={mainHeading2}>Driven</span>
          </h1>
          <h2 className={subHeading}>Digital Marketing Agency</h2>
          <Form className={emailForm}>
            <InputGroup>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                aria-label="Username"
                aria-describedby="basic-addon1"
                className={`${emailFeild} ${noFocusBorder}`}
              />
            </InputGroup>
            <Button type="submit" className={emailButton}>
              Get Your Free Proposal
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
