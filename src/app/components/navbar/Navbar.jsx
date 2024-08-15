"use client";
import { contactNumber, navItems } from "@/app/utils/static";
import styles from "./styles.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import {
  faBars,
  faCircleRight,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const {
    mainContainer,
    innerContainer,
    logoContainer,
    navItemContainer,
    navItem,
    contactInformation,
    phoneIcon,
    phoneText,
    mobileMenu,
    hamburgerMenu,
    mobileContactInfo,
    hamburgerMenuIcon,
    tabletContainer,
    tabletContactInformation,
    mobileListContainer,
    circleRightIcon,
    mobileListItems,
    mainLogo,
  } = styles;
  return (
    <div className={mainContainer}>
      <div className={innerContainer}>
        <Link href="/">
          <div className={logoContainer}>
            <Image
              src="/images/logo-E3media.png"
              height={200}
              width={300}
              alt="logo"
              className={mainLogo}
            />
          </div>
        </Link>
        <div className={navItemContainer}>
          {navItems.map((item) => (
            <Link href={item?.path} key={item.id}>
              <div className={navItem}>{item?.name}</div>
            </Link>
          ))}
        </div>
        <div className={contactInformation}>
          <div className={phoneText}>
            <FontAwesomeIcon icon={faPhone} shake className={phoneIcon} />
            <a href={`tel:${contactNumber}`}>{contactNumber}</a>
          </div>
        </div>
        <div className={tabletContainer}>
          <div className={tabletContactInformation}>
            <div className={phoneText}>
              <FontAwesomeIcon icon={faPhone} shake className={phoneIcon} />
              <a href={`tel:${contactNumber}`}>{contactNumber}</a>
            </div>
          </div>
          <div className={hamburgerMenu}>
            <button onClick={() => handleShow()}>
              <FontAwesomeIcon icon={faBars} className={hamburgerMenuIcon} />
            </button>
          </div>
        </div>
        <div className={mobileContactInfo}>
          <div className={mobileMenu}>
            <div className={phoneText}>
              <a href={`tel:${contactNumber}`}>
                <FontAwesomeIcon icon={faPhone} shake className={phoneIcon} />
              </a>
            </div>
          </div>
          <div className={hamburgerMenu}>
            <button onClick={() => handleShow()}>
              <FontAwesomeIcon icon={faBars} className={hamburgerMenuIcon} />
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Link
              href={"/"}
              className={logoContainer}
              onClick={() => handleClose()}
            >
              <Image
                src="/images/logo-E3media.png"
                height={200}
                width={300}
                alt="logo"
                className={mainLogo}
              />
            </Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {navItems.map((item) => (
            <Link href={item?.path} key={item?.id}>
              <div className={mobileListContainer}>
                <FontAwesomeIcon
                  icon={faCircleRight}
                  className={circleRightIcon}
                />
                <div onClick={() => handleClose()} className={mobileListItems}>
                  {item?.name}
                </div>
              </div>
            </Link>
          ))}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Navbar;
