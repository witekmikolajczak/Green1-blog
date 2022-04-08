import React from "react";
import { createPortal } from "react-dom";

import styles from "./WeatherModal.module.scss";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const ModalOverlay = ({ hourDetail }) => {
  return (
    <div className={styles.container}>
      {hourDetail.map((hour) => (
        <div className={styles.wrapper} key={Math.random()}>
          <div className={styles.icon}>
            <img src={hour.icon} />
          </div>
          <div className={styles.detail}>
            <p>{hour.time}</p>
            <p>{hour.icon_text}</p>
            <h1>{hour.temp}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};
export const WeatherModal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {createPortal(
        <ModalOverlay onClick={props.onClick} hourDetail={props.hourDetail} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};
