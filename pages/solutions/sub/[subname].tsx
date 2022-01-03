import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHead from "../../../components/CustomHead";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function SubService(): ReactElement {
  const router = useRouter();

  const { subname } = router.query;

  const [activeSolution, setActiveSolution] = useState("Business");

  //useEffect
  useEffect(() => {
    if (subname == "individual") {
      setActiveSolution("Individual");
    } else {
      setActiveSolution("Business");
    }
  });

  return (
    <>
      <CustomHead />

      {/* Header */}
      <Header />

      <section className="section hero relative md:h-80">
        <div className="hero-bg">&nbsp;</div>
        <div className="hero-overlay absolute top-0 left-0 h-full w-full z-10 bg-black bg-opacity-70">
          &nbsp;
        </div>
        <div className="container py-10 md:py-0 relative z-20 md:flex md:h-full items-center justify-between">
          <div className="hero-content md:w-7/12 mb-6 md:mb-0">
            <h1 className="text-white text-3xl md:text-6xl font-bold bg-line-h mb-6">
              {activeSolution} Solutions
            </h1>

            <p className="text-white text-xl md:text-base mb-6 md:mb-6 md:leading-9">
              Home <FontAwesomeIcon icon={["fas", "angle-right"]} /> Solutions{" "}
              <FontAwesomeIcon icon={["fas", "angle-right"]} /> Individual
            </p>
          </div>
        </div>
      </section>

      <section className="section md:py-14 py-8 bg-gray-100" id="about-us">
        <div className="container grid md:grid-cols-3 md:gap-12">
          {/* Loops will start here  */}
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img
              className="w-full"
              src="https://i1.wp.com/assurena.stylusthemes.com/wp-content/uploads/2020/11/family-insurance.jpg?ssl=1"
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-2 pb-2">
              <Link href={"/#form"}>
                <a className="inline-block py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">
                  <span className="mr-2 inline-block">Get a quote</span>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
