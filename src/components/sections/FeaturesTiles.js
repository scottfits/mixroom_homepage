import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "Built for Artists and Fans",
    paragraph:
      "Whether you are an emerging artist looking for early listeners and feedback or a die-hard fan looking for remixes of your favorite song, Mixroom has you covered.",
  };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/music.svg")}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 mt-16">
                    Step 1: Send us your tracks!
                  </h4>
                  <p className="m-0 text-sm">
                    Send us your .wav or .mp3 to{" "}
                    <a href="mailto:music@mixroom.app">music@mixroom.app</a>, or{" "}
                    <a href="mailto:private@mixroom.app">private@mixroom.app</a>{" "}
                    if you're stage shy! Don't worry about writing anything, we
                    won't take it personally.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/witch.svg")}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 mt-16">Step 2: Magic Happens</h4>
                  <p className="m-0 text-sm">
                    We'll process your track and store it for you in the app,
                    ready to listen whenever! If you uploaded a private track,
                    add a collaborator to give them access.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require("./../../assets/images/video.svg")}
                      alt=""
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8 mt-16">Step 3: Get Feedback</h4>
                  <p className="m-0 text-sm">
                    Mixroom users are hungry for new sounds! Uploading to
                    Mixroom gives your track a great opportunity to be heard and
                    commented on. Don't worry, we're a nice community!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
