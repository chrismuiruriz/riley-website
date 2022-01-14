import Link from "next/link";
import { ReactElement, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import logo from "../public/riley-Insurance-logo.jpg";

const imageLoader = ({ src }) => {
  return `${src}`;
};

export default function Header(props): ReactElement {
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

  let toggleMenu = () => {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
    }
  };

  useEffect(() => {
    let menu = document.getElementById("menu");
    if (isMobile()) {
      menu.classList.add("hidden");
    } else {
      menu.classList.remove("hidden");
    }
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <div>
              <a href="/">
                <span className="text-xs inline-block mr-1">
                  <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />{" "}
                </span>
                Royal Offices, 18A, Westlands, Nairobi, Kenya
              </a>

              <a href="/">
                <span className="text-xs inline-block mr-1">
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} />{" "}
                </span>
                info@rileyconsultants.co.ke
              </a>

              <a href="tel:+254797313151">
                <span className="text-xs inline-block mr-1">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                </span>
                +254 792 486 591
              </a>
            </div>
            <div>
              <a href="/">FAQs</a>
              {/* Social */}
              <div>
                <a href="#">
                  <FontAwesomeIcon icon={["fab", "facebook-square"]} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={["fab", "twitter-square"]} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="container">
            <div className="header-bottom-left">
              <Link href="/">
                <a>
                  <Image
                    loader={imageLoader}
                    src={logo}
                    alt="Riley Insurance Consultants &amp; Agency Ltd"
                  />
                </a>
              </Link>
            </div>
            <div className="header-bottom-right">
              {/* Menu list items */}
              <ul id="menu" className="hidden">
                <li>
                  <Link href="/">
                    <a>
                      <span>Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span>About Us</span>
                      <span className="inline-block ml-2">
                        <FontAwesomeIcon icon={["fas", "caret-down"]} />
                      </span>
                    </a>
                  </Link>

                  <ul className="dropdown">
                    <li>
                      <Link href="/#journey">
                        <a className="transition-all">
                          <span>Our Journey</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#team">
                        <a className="transition-all">
                          <span>The Team</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#insurance-solutions">
                        <a className="transition-all">
                          <span>Careers</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/#clients-partners">
                        <a className="transition-all">
                          <span>Clients &amp; Partners</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  {/* Dropdown ends */}
                </li>
                <li>
                  <Link href="#">
                    <a>
                      <span>Insurance</span>
                      <span className="inline-block ml-2">
                        <FontAwesomeIcon icon={["fas", "caret-down"]} />
                      </span>
                    </a>
                  </Link>
                  {/* List of links */}

                  <ul className="dropdown">
                    <li>
                      <Link href="/solutions/individual">
                        <a className="transition-all">
                          <span>Individual Solutions</span>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/business">
                        <a className="transition-all">
                          <span>Business Solutions</span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                  {/* Dropdown ends */}
                </li>
                <li>
                  <Link href="/#consultancy">
                    <a className="transition-all">
                      <span>Consultancy</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/#quote-form">
                    <a className="transition-all">
                      <span>Client Portal</span>
                    </a>
                  </Link>
                </li>
              </ul>

              {/* Custom harmbuger menu button */}
              <button
                type="button"
                onClick={(e) => {
                  toggleMenu();
                }}
                className="header-bottom-right-hamburger relative"
              >
                <div></div>
                <div></div>
                <div></div>
              </button>

              {/* CTA Button */}
              <div>
                <Link href="/#quote-form">
                  <a className="btn cta-button">
                    <span>Contact Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
