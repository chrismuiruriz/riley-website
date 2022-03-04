import Link from "next/link";
import { useState } from "react";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import loadingIcon from "../public/apple-touch-icon.png";

const imageLoader = ({ src }) => {
  return `${src}`;
};

export default function Footer(props): ReactElement {
  const [showLoader, setShowLoader] = useState(true);

  let isMobile = function () {
    if (typeof navigator === "undefined") {
      return false;
    }
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor);
    return check;
  };

  if (isMobile()) {
    let menu = document.getElementById("menu");
    menu.classList.add("hidden");
  }

  // hide loader
  setTimeout(() => {
    setShowLoader(false);
  }, 500);

  return (
    <>
      <footer className="bg-footer section md:py-16 py-8">
        <div className="container md:grid md:grid-cols-3 gap-10">
          <div className="col md:mb-0 mb-6 md:pr-4">
            <div className="content">
              <h4 className="mb-4 text-white font-bold md:text-lg text-md">
                Riley Insurance Consultants &amp; Agency Ltd
              </h4>

              <div className="text-gray-400">
                <p className="md:flex items-center mb-3 text-sm">
                  <span className="text-white inline-block mr-3">
                    <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                  </span>{" "}
                  <span>
                    Royal Offices, 18A, Westlands, <br />
                    Nairobi, Kenya
                  </span>
                </p>
                <p className="md:flex items-center mb-3 text-sm">
                  <span className="text-white inline-block mr-3">
                    <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                  </span>{" "}
                  <span>+254 792 486 591</span>
                </p>
                <p className="md:flex items-center text-sm">
                  <span className="text-white inline-block mr-3">
                    <FontAwesomeIcon icon={["fas", "envelope"]} />
                  </span>{" "}
                  <span>info@rileyconsultants.co.ke</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col md:mb-0 mb-6 md:ml-20">
            <div className="content">
              <h4 className="mb-4 text-white font-bold md:text-lg text-md">
                Services
              </h4>
              <div className="text-gray-400">
                <p className="md:flex items-center mb-3">
                  <span className="inline-block mr-3  text-xs">
                    <FontAwesomeIcon icon={["fas", "angle-right"]} />
                  </span>{" "}
                  <span>Individual Solutions</span>
                </p>

                <p className="md:flex items-center mb-3">
                  <span className="inline-block mr-3  text-xs">
                    <FontAwesomeIcon icon={["fas", "angle-right"]} />
                  </span>{" "}
                  <span>Business Solutions</span>
                </p>
                <p className="md:flex items-center mb-3">
                  <span className="inline-block mr-3  text-xs">
                    <FontAwesomeIcon icon={["fas", "angle-right"]} />
                  </span>{" "}
                  <span>Consultancy</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col md:mb-0 mb-4">
            <div className="content">
              <h4 className="mb-4 text-white font-bold md:text-lg text-md">
                Opening Hours
              </h4>
              <div className="text-gray-400">
                <p className="flex justify-between items-center mb-2">
                  <span>Monday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    8:00 <span className="text-sm"> am</span> - 5:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Tuesday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    8:00 <span className="text-sm"> am</span> - 5:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Wednesday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    8:00 <span className="text-sm"> am</span> - 5:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Thursday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    8:00 <span className="text-sm"> am</span> - 5:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Friday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    8:00 <span className="text-sm"> am</span> - 5:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Saturday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>
                    9:00 <span className="text-sm"> am</span> - 3:00{" "}
                    <span className="text-sm">pm</span>
                  </span>
                </p>
                <p className="flex justify-between items-center mb-2">
                  <span>Sunday</span>{" "}
                  <span className="flex-1 mx-4 bg-gray-600 h-px">&nbsp;</span>{" "}
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 text-w text-sm text-gray-400">
          Regulated By Insurance Regulatory Authority
        </div>
      </footer>

      {showLoader && (
        <div className="loader fixed top-0 left-0 w-full h-screen bg-white z-50 flex items-center justify-center">
          <Image
            unoptimized={true}
            loader={imageLoader}
            width={64}
            height={64}
            src={loadingIcon}
            alt="Loading..."
          />
        </div>
      )}
    </>
  );
}
