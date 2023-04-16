import React, { useState, useEffect, useRef } from "react";
import { Container, Grid, Loader, Segment, Dimmer } from "semantic-ui-react";
// import scss
import styles from "../../../styles/sass/components/LoadingArea.module.scss";
const LoadingArea = () => {
  return (
    <>
      <div className={styles.loadingArea}>
        <Loader active inline size={"huge"} />
      </div>
    </>
  );
};
export default LoadingArea;
