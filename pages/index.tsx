import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHead from "../components/CustomHead";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home(): ReactElement {
  const router = useRouter();

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleTileClick = (productIndex: number) => {
    router.push("/#quote-form");
  };

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
    setIsFormSubmitted(true);
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
                    Request for a consultation{" "}
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

      <section className="section highlighted py-6" id="insurance-solutions">
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
                <Link href="/#quote-form">
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
                <Link href="/#quote-form">
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
              <span className="text-5xl mb-6 inline-block p-4 bg-green-500">
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
                    <span>Learn more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section md:py-14 py-8" id="about-us">
        <div className="container grid md:grid-cols-2 md:gap-12">
          <div>
            <img
              className="max-w-full"
              src="https://i1.wp.com/assurena.stylusthemes.com/wp-content/uploads/2020/11/happy-family.jpg?resize=1024%2C1024&ssl=1"
              alt=""
            />
          </div>
          <div className="py-6">
            <h4 className="mb-4 text-primary font-bold md:text-2xl text-xl">
              About Us
            </h4>

            <h2 className="mb-6 font-extrabold md:text-4xl text-3xl">
              Our Journey
            </h2>

            <p className="mb-3 leading-6">
              Riley Insurance Consultants and Agency is a limited company that
              deals with all products in{" "}
              <span className="font-semibold text-primary">General</span>{" "}
              Insurance,{" "}
              <span className="font-semibold text-primary">Medical</span>{" "}
              Insurance and{" "}
              <span className="font-semibold text-primary">Life</span>{" "}
              Assurance.
            </p>

            <p className="mb-3 leading-6">
              We offer{" "}
              <span className="font-semibold text-primary">individual</span> and{" "}
              <span className="font-semibold text-primary">Business</span>{" "}
              Insurance{" "}
              <span className="font-semibold text-primary">Solutions</span>. Our
              clientele consist of individuals, SME's, corporates and
              multi-nationals.
            </p>

            <p className="mb-4 leading-6">
              We have partnered with reputable insurance companies, thereby
              providing our clients with competitive pricing and end to end
              service.
            </p>

            <h3 className="mb-4 font-bold text-2xl">The Team</h3>

            <p className="mb-4 leading-6">
              We offer site{" "}
              <span className="text-primary font-semibold">Survey</span> and{" "}
              <span className="text-primary font-semibold">Identification</span>{" "}
              of potential risks our clients/prospective clients may be exposed
              to, which may cause property damage or loss,law suits, loss of
              business income, injuries and death.
            </p>

            <p className="mb-6 leading-6">
              Based on the recommendations from the survey, we advise the client
              on the suitable insurance product(s) and a comparison of the
              premium rate(s) from the insurance companies.
            </p>

            <div className="hidden">
              <Link href="/#quote-form">
                <a className="btn inline-block">
                  <span>Learn more</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section md:py-24 py-10 bg-lightblue">
        <div className="container">
          <h4 className="hidden mb-4 text-primary font-bold md:text-2xl text-xl text-center">
            Protect you For better Futures
          </h4>

          <h2 className="mb-6 font-extrabold md:text-4xl text-3xl text-center max-w-xl mx-auto">
            Creating <span className="text-primary">Value</span> Addition
          </h2>

          <div className="grid md:grid-cols-2 md:gap-12 pt-8" id="quote-form">
            <div>
              <form
                onSubmit={(e) => handleFormSubmit(e)}
                method="post"
                className="shadow-lg bg-white md:px-8 md:py-10 py-6 px-4"
              >
                <h2 className="md:mb-8 mb-6 font-bold md:text-3xl text-xl">
                  Request for quote
                </h2>

                <div className="md:grid md:grid-cols-2 md:gap-4 mb-4">
                  <div className="mb-4 md:mb-0">
                    <label className="inline-block mb-2 text-sm">
                      Your Name*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full border border-gray-300 px-4 py-2 text-lg"
                    />
                  </div>

                  <div>
                    <label className="inline-block mb-2 text-sm">Phone*</label>
                    <input
                      required
                      type="tel"
                      className="w-full border border-gray-300 px-4 py-2 text-lg"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="inline-block mb-2 text-sm">Email*</label>
                  <input
                    type="email"
                    required
                    className="w-full border border-gray-300 px-4 py-2 text-lg"
                  />
                </div>

                <div className="mb-6">
                  <label className="inline-block mb-2 text-sm">
                    Additional Details (optional)
                  </label>
                  <textarea className="w-full border border-gray-300 px-4 py-2 text-lg"></textarea>
                </div>

                {isFormSubmitted && (
                  <div className="mb-6 px-3 text-center py-2 border border-green-500 text-green-700 rounded-md text-sm">
                    Thank you for the submission. We'll get in touch with soon.
                  </div>
                )}

                <div className="mb-4">
                  <button
                    disabled={isFormSubmitted}
                    className="btn block w-full"
                    type="submit"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="py-6">
              <h4 className="mb-4 text-primary font-bold md:text-xl text-lg">
                Client Services
              </h4>

              <h2 className="mb-4 font-bold md:text-4xl text-2xl">
                Title Here
              </h2>

              <p className="mb-4 leading-6">
                Molitia modi quae laboriosam nemo minima molestias vitae rerulla
                eosipn explicabo optio acusan provident nisi veniam uravbitur
                non erat ut orci maleada egestas eget ex massa hauris.
              </p>

              <div>
                <p>
                  <span className="text-primary">
                    <FontAwesomeIcon icon={["fas", "phone-alt"]} />
                  </span>{" "}
                  We appreciate your feedback? Call us:{" "}
                  <a
                    href="tel:+254797313151"
                    className="text-primary text-xl font-bold"
                  >
                    +254 792 486 591
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
