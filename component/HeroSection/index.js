import { useState, useEffect } from "react";
import styles from "../../styles/sass/components/HeroSection.module.scss";
import { Container, Grid, Button, Modal } from "semantic-ui-react";
import Link from "next/link";
import classNames from "classnames";
const HeroSection = (props) => {
  const [howitworksModalOpen, setHowitworksModalOpen] = useState(false);
  const howItWorksClick = () => {
    setHowitworksModalOpen(true);
  };
  const onWinnermodalOpen = () => {
    setHowitworksModalOpen(true);
  };
  const onWinnermodalClose = () => {
    setHowitworksModalOpen(false);
  };
  return (
    <section
      className={classNames(
        styles.hero_section,
        props.bg ? styles.hasImage : "",
        props.noFade ? styles.noFade : "",
      )}
    >
      
      {props.customContent ? (
        props.customContent
      ) : (
        <>
          {props.is_home ? (
            <>
              <div className={styles.homeVideo}>
                <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  src="/images/22-03-28-hero-desktop-gmail-large.mp4"
                  type="video.mp4"
                  auto
                />
              </div>
            </>
          ) : (
            <Container
              className={
                props.is_home
                  ? styles.home
                  : `${styles.inner} flexbox align-center flex-center jc-center`
              }
            >
              <div
                className={classNames(styles.hgroup + " " + styles.bannerBox)}
              >
                <h1 className="uppercase">
                  {props.heading}{" "}
                  <span className="text-border-bc-white">
                    {props.headingborder}
                  </span>
                </h1>
                {props.sub_heading && (
                  <h2 className={"h4 regular"}>{props.sub_heading}</h2>
                )}
                {props.button}
              </div>
            </Container>
          )}
        </>
      )}
    </section>
  );
};

export default HeroSection;
