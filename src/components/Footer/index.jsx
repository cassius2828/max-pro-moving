import { faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { elasticMoveRight, fadeInFromSide } from "../../gsap/baseAnimations";

const Footer = () => {
  ///////////////////////////
  // GSAP Animations
  ///////////////////////////
  const container = useRef();
  useGSAP(
    () => {
      elasticMoveRight("h3", container.current);
      fadeInFromSide("#llc", container.current, "left");
      fadeInFromSide("#footer-location", container.current, "left");
      fadeInFromSide("#footer-contact", container.current, "left");
      fadeInFromSide("#footer-service-locs", container.current, "left");
    },
    { scope: container }
  );

  return (
    <footer ref={container} className="bg-blue-100 text-blue-900 py-10">
      <div className="flex flex-col justify-evenly lg:mt-28 p-10">
        <div>
          <h3 className="text-center text-4xl lg:text-6xl">
            Max Protection Moving
            <FontAwesomeIcon className="ml-8" icon={faTruckFast} />
          </h3>
          <p id="llc" className="text-4xl mt-10 lg:mb-0 mb-8">
            ENL INvestment LLC
          </p>
        </div>

        <div id="footer-service-locs">
          <h4 className="text-4xl text-blue-600 mt-12">Service Locations</h4>
          <p className="text-3xl mb-4 lg:mb-0 mt-2 capitalize">Phoenix</p>
          <p className="text-3xl mb-4 lg:mb-0 mt-2 capitalize">east valley</p>
          <p className="text-3xl mb-4 lg:mb-0 mt-2 capitalize">west valley</p>
        </div>
        <div id="footer-location">
          <h4 className="text-4xl text-blue-600 mt-12">Office Location</h4>
          <p className="text-3xl mb-4 lg:mb-0 mt-2 capitalize">temp arizona</p>
        </div>
        <div id="footer-contact">
          <h4 className="text-4xl text-blue-600 mt-12">Contact</h4>
          <p className="text-3xl mt-2">
            <a href="tel:+16199051009">(619) 905-1009</a>
          </p>
          <p className="text-3xl mt-2">
            <a href="mailto:MaxProtection@ENLWorkforce.com">
              MaxProtection@ENLWorkforce.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
