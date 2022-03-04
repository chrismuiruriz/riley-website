import { useRouter } from "next/router";
import Link from "next/link";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Logos from "../components/Logos";
import Partners from "../components/Partners";
import ConsultationForm from "../components/ConsultationForm";

import Image from "next/image";
import img1 from "../public/img-1.jpg";

const imageLoader = ({ src }) => {
  return `${src}`;
};

export default function Home(): ReactElement {
  const router = useRouter();

  const handleTileClick = (productIndex: number) => {
    router.push("/#quote-form");
  };

  return (
    <>
      <CustomHead />

      {/* Header */}
      <Header />

      <section className="section hero relative md:min-h-screen">
        <div className="hero-bg">&nbsp;</div>
        <div className="hero-overlay absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-70">
          &nbsp;
        </div>
        <div className="container py-10 md:py-0 relative z-20 md:flex md:min-h-screen items-center justify-between">
          <div className="hero-content md:w-7/12 mb-6 md:mb-0">
            <h1 className="text-white text-4xl md:text-6xl font-bold bg-line-h mb-6">
              Get Insured in Minutes. Get back to What Matters.
            </h1>

            <p className="text-white text-xl md:text-2xl mb-6 md:mb-6 md:leading-9 leading-tight">
              We make buying insurance easier by showing you the best options
              available and helping you find the perfect policy at a great
              price.
            </p>

            <div className="inline-block mb-6 md:mb-6">
              <Link href="/#quote-form">
                <a className="btn inline-flex item-center">
                  <span>
                    Request for a quote{" "}
                    <span className="text-sm ml-2 inline-block">
                      <FontAwesomeIcon icon={["fas", "arrow-circle-right"]} />
                    </span>
                  </span>
                </a>
              </Link>
            </div>
          </div>
          <div className="hero-products bg-white rounded p-6 md:w-4/12">
            <h4 className="text-xl md:text-2xl font-bold bg-line-h md:mb-8 mb-6 text-center">
              Get your free Quote
            </h4>

            <div className="product-tiles grid md:grid-cols-3 grid-cols-2 md:gap-4 gap-3 mb-7">
              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(0);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "car-crash"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Motor
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(1);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "fire-extinguisher"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Fire &amp; Burgary
                    </span>
                  </div>
                </div>
              </div>

              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(2);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "briefcase"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Professional Indemnity
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(3);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "plus-square"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Health
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(4);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "money-check-alt"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Performance Bonds
                    </span>
                  </div>
                </div>
              </div>
              <div className="product-tile bg-lightblue p-4 md:h-24 h-18 flex items-center justify-center flex-col rounded-sm shadow hover:shadow-lg transition-shadow">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    handleTileClick(5);
                  }}
                >
                  <div className="text-center">
                    <span className="product-tile-icon text-2xl text-primary">
                      <FontAwesomeIcon icon={["fas", "hard-hat"]} />
                    </span>
                    <span className="inline-block mt-1 text-sm w-full text-center">
                      Contractors All Risks
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-center">
                <span className="text-primary">
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                </span>{" "}
                Talk to us. Call now:{" "}
                <a href="tel:+254797313151" className="text-primary">
                  +254 792 486 591
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section highlighted py-16" id="insurance-solutions">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="bg absolute z-0 w-full h-full bg-opacity-50 bg-blue-600"></div>
            <div className="overlay absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-70"></div>
            <div className="md:py-10 md:px-10 py-10 px-4 relative z-20 text-white">
              <span className="text-5xl mb-6 inline-block p-4 bg-blue-500">
                <FontAwesomeIcon icon={["fas", "user-shield"]} />
              </span>

              <h4 className="text-xl md:text-2xl font-bold bg-line-h mb-6">
                Individual Insurance
              </h4>

              <p className="mb-6">
                We have partnered with reputable insurance companies to provide
                individual insurance solutions such as: Motor insurance,
                professional indemnity, travel insurance, home insurance, life
                assurance, health, Education Policy, Personal accident and more.
              </p>

              <div>
                <Link href="/solutions/individual">
                  <a className="btn inline-block">
                    <span>Learn more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg absolute z-0 w-full h-full bg-opacity-50 bg-gray-600"></div>
            <div className="overlay absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-70"></div>
            <div className="md:py-10 md:px-10 py-10 px-4 relative z-20 text-white">
              <span className="text-5xl mb-6 inline-block p-4 bg-gray-500">
                <FontAwesomeIcon icon={["fas", "building"]} />
              </span>

              <h4 className="text-xl md:text-2xl font-bold bg-line-h mb-6">
                Business Insurance
              </h4>

              <p className="mb-6">
                We provide our clients with competitive pricing solutions and
                end to end service. Our business insurance solutions include:
                Motor insurance, WIBA, Employers liability, Corporate health
                care, Fire &amp; Burglary etc.
              </p>

              <div>
                <Link href="/solutions/business">
                  <a className="btn inline-block">
                    <span>Learn more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg absolute z-0 w-full h-full bg-opacity-50 bg-green-600"></div>
            <div className="overlay absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-70"></div>
            <div className="md:py-10 md:px-10 py-10 px-4 relative z-20 text-white">
              <span
                className="text-5xl mb-6 inline-block p-4 bg-green-500"
                id="consultancy"
              >
                <FontAwesomeIcon icon={["fas", "shield-alt"]} />
              </span>

              <h4 className="text-xl md:text-2xl font-bold bg-line-h mb-6">
                Consultancy
              </h4>

              <p className="mb-6">
                We offer site survey and identification of potential risks our
                clients/prospective clients may be exposed to, which may cause
                property damage or loss,law suits, loss of business income,
                injuries and death. We advise clients on the suitable insurance
                products(s) and a comparison of the premium rate(s) from
                insurance companies.
              </p>

              <div>
                <Link href="/#quote-form">
                  <a className="btn inline-block">
                    <span>Get a quote</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-8 py-16" id="journey">
        <div className="container">
          <div className="md:flex bg-white shadow-xl bg-grayish">
            <div className="hidden md:block journey-bg">
              <Image
                unoptimized={true}
                loader={imageLoader}
                src={img1}
                className="inline-block mx-auto w-auto opacity-0"
              />
            </div>

            <div className="md:pl-12 md:p-8">
              <div>
                <h2 className="font-extrabold md:text-5xl text-3xl text-primary mb-8 cool-title t-left">
                  Our Journey
                </h2>

                <div className="">
                  <p className="mb-2 leading-6">
                    Riley Insurance Consultants and Agency is a limited company
                    that deals with all products in{" "}
                    <span className="font-semibold text-primary">General</span>{" "}
                    Insurance,{" "}
                    <span className="font-semibold text-primary">Medical</span>{" "}
                    Insurance and{" "}
                    <span className="font-semibold text-primary">Life</span>{" "}
                    Assurance.
                  </p>

                  <p className="mb-2 leading-6">
                    We offer{" "}
                    <span className="font-semibold text-primary">
                      individual
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold text-primary">Business</span>{" "}
                    Insurance{" "}
                    <span className="font-semibold text-primary">
                      Solutions
                    </span>
                    . Our clientele consist of individuals, SME's, corporates
                    and multi-nationals.
                  </p>

                  <p className="mb-4 leading-6">
                    We have partnered with reputable insurance companies,
                    thereby providing our clients with competitive pricing and
                    end to end service.
                  </p>
                </div>

                <div className="md:grid md:grid-cols-3 gap-6">
                  <div className="p-4 text-center md:mb-0 mb-4 bg-blue-400">
                    <div className="w-12 h-12 rounded-full my-4 inline-flex items-center justify-center">
                      <span className="text-4xl text-white">
                        <FontAwesomeIcon icon={["fas", "route"]} />
                      </span>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Vision
                    </h4>

                    <p className="text-gray-100">
                      To be Africa's preferred insurance consultant leveraging
                      on clients specific needs and innovation.
                    </p>
                  </div>

                  <div className="p-4 text-center md:mb-0 mb-4 bg-blue-400">
                    <div className="w-12 h-12 rounded-full my-4 inline-flex items-center justify-center">
                      <span className="text-4xl text-white">
                        <FontAwesomeIcon icon={["fas", "bullseye"]} />
                      </span>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Mission
                    </h4>

                    <p className="text-gray-100">
                      Create value addition for our clients through exceptional,
                      end to end service and competitive pricing.
                    </p>
                  </div>

                  <div className="p-4 text-center md:mb-0 mb-4 bg-blue-400">
                    <div className="w-12 h-12 rounded-full my-4 inline-flex items-center justify-center">
                      <span className="text-4xl text-white">
                        <FontAwesomeIcon icon={["fas", "list"]} />
                      </span>
                    </div>
                    <h4 className="font-bold text-xl mb-2 text-white">
                      Core Values
                    </h4>

                    <p className="text-gray-100">
                      Responsive
                      <br />
                      Intuitive
                      <br />
                      Sincere
                      <br />
                      Efficient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section md:pt-14 pt-8 md:pb-14 pb-8 bg-white"
        id="team"
      >
        <div className="container pb-4 mb-4">
          <div className="text-center">
            <h2 className="text-center font-extrabold md:text-5xl text-3xl text-primary cool-title">
              Meet our Team
            </h2>
          </div>
        </div>

        <div className="md:pb-14 pb-8 pt-4">
          <div className="container">
            <div className="md:grid md:grid-cols-5 gap-6">
              <div className="p-4 text-center md:mb-0 mb-4 shadow-lg bg-gray-100 bg-opacity-20">
                <div className="bg-gray-400 w-24 h-24 rounded-full my-4 inline-flex items-center justify-center">
                  <span className="text-4xl text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
                <p className="text-base mt-4 text-black">Gabriel G. Kangethe</p>
                <p className="text-sm mb-1 text-black">
                  ACIM | MBA | AIIK | BCOM
                </p>
                <h3 className="font-bold text-xs mb-2 text-black">
                  Managing Director
                </h3>
              </div>

              <div className="p-4 text-center md:mb-0 mb-4 shadow-lg bg-gray-100 bg-opacity-20">
                <div className="bg-gray-400 w-24 h-24 rounded-full my-4 inline-flex items-center justify-center">
                  <span className="text-4xl text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
                <p className="text-base mt-4 text-black">Jane R. Onimbo</p>
                <p className="text-sm mb-1 text-black">MBA | AIIK | BBA</p>
                <h3 className="font-bold text-xs mb-2 text-black">
                  Claims &amp; Underwriting Manager
                </h3>
              </div>

              <div className="p-4 text-center md:mb-0 mb-4 shadow-lg bg-gray-100 bg-opacity-20">
                <div className="bg-gray-400 w-24 h-24 rounded-full my-4 inline-flex items-center justify-center">
                  <span className="text-4xl text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
                <p className="text-base mt-4 text-black">David K. Mwangi</p>
                <p className="text-sm mb-1 text-black">BBM | COP</p>
                <h3 className="font-bold text-xs mb-2 text-black">
                  Asst. Business Development Manager
                </h3>
              </div>

              <div className="p-4 text-center md:mb-0 mb-4 shadow-lg bg-gray-100 bg-opacity-20">
                <div className="bg-gray-400 w-24 h-24 rounded-full my-4 inline-flex items-center justify-center">
                  <span className="text-4xl text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
                <p className="text-base mt-4 text-black">Juliet A. Owitti</p>
                <p className="text-sm mb-1 text-black">
                  M. Psych* | IHRM | BCOM
                </p>
                <h3 className="font-bold text-xs mb-2 text-black">
                  Human Resource Manager
                </h3>
              </div>

              <div className="p-4 text-center md:mb-0 mb-4 shadow-lg bg-gray-100 bg-opacity-20">
                <div className="bg-gray-400 w-24 h-24 rounded-full my-4 inline-flex items-center justify-center">
                  <span className="text-4xl text-white">
                    <FontAwesomeIcon icon={["fas", "user"]} />
                  </span>
                </div>
                <p className="text-base mt-4 text-black">Aisha L. Munyao</p>
                <p className="text-sm mb-1 text-black">AIIK* | BBM</p>
                <h3 className="font-bold text-xs mb-2 text-black">
                  Business Coordinator
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section md:py-24 py-10 bg-lightblue">
        <div className="container">
          <div className="text-center">
            <h2 className="mb-6 text-center font-extrabold md:text-5xl text-3xl text-primary cool-title">
              Contact Us
            </h2>
          </div>

          <div className="text-center">
            <p>
              We appreciate your feedback, this helps us better our service to
              you.
            </p>

            <div className="py-4 mb-6">
              <a
                href="tel:+254797313151"
                className="mx-2 text-primary inline-block hover:text-gray-300"
              >
                <span className="text-xs inline-block mr-1">
                  <FontAwesomeIcon icon={["fas", "phone-alt"]} />{" "}
                </span>
                +254 792 486 591
              </a>
              <a
                href="mailto:feedback@rileyconsultants.co.ke"
                className="mx-2 text-primary inline-block hover:text-gray-300"
              >
                <span className="text-xs inline-block mr-1">
                  <FontAwesomeIcon icon={["fas", "envelope"]} />{" "}
                </span>
                feedback@rileyconsultants.co.ke
              </a>
            </div>
          </div>

          <div id="quote-form">
            <div className="max-w-2xl mx-auto">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section md:p-14 py-8" id="stats">
        <div className="container">
          <div className="flex items-center justify-around">
            <div className="inline-flex items-center">
              <div className="mr-4">
                <span className="text-sm md:text-6xl text-white">
                  <FontAwesomeIcon icon={["fas", "user-shield"]} />
                </span>
              </div>
              <div>
                <div className="text-base md:text-5xl font-bold text-white md:mb-1">
                  500+
                </div>
                <div className="text-gray-200 md:text-lg text-sm">Happy Clients</div>
              </div>
            </div>

            <div className="inline-flex items-center">
              <div className="mr-4">
                <span className="text-sm md:text-6xl text-white">
                  <FontAwesomeIcon icon={["fas", "file-alt"]} />
                </span>
              </div>
              <div>
                <div className="text-base md:text-5xl font-bold text-white md:mb-1">
                  600+
                </div>
                <div className="text-gray-200 md:text-lg text-sm">Policies</div>
              </div>
            </div>

            <div className="inline-flex items-center">
              <div className="mr-4">
                <span className="text-sm md:text-6xl text-white">
                  <FontAwesomeIcon icon={["fas", "handshake"]} />
                </span>
              </div>
              <div>
                <div className="text-base md:text-5xl font-bold text-white md:mb-1">
                  10+
                </div>
                <div className="text-gray-200 md:text-lg text-sm">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="clients">
        <div className="bg-white px-8">
          <div className="container text-center">
            <h4 className="py-6 text-center text-primary font-bold text-2xl cool-title">
              Our Clients
            </h4>
          </div>
          <Logos />
        </div>
      </section>

      <section className="section partners-bg" id="partners">
        <div className="px-8">
          <div className="container text-center">
            <h4 className="py-6 text-center text-primary font-bold text-2xl cool-title">
              Our Partners
            </h4>
          </div>
          <Partners />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
