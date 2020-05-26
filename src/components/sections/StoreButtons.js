import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import appstore from "../../appstore.png";
import play from "../../play.png";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Download Mixroom Now',
    paragraph: 'We are excited to have you! Join the early access and get started.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">

                <a
                  className="App-link"
                  href="https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1511431212"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={appstore} className="Button" alt="appstore" />
                </a>


            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
            <a
              className="App-link"
              href="https://play.google.com/store/apps/details?id=mixroom.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={play} className="Button" alt="play" />
            </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
