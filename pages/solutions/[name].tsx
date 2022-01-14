import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomHead from "../../components/CustomHead";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import products from "../services/Products.json";

const filterProducts = (type) => {
  return products.filter(
    (product) => product.type === type || product.type === "all"
  );
};

export default function Service(): ReactElement {
  const router = useRouter();

  const { name } = router.query;

  const [activeSolution, setActiveSolution] = useState("Business");

  //useEffect
  useEffect(() => {
    if (name == "individual") {
      setActiveSolution("Individual");
    } else {
      setActiveSolution("Business");
    }

    //setProductList(products.filter((product) => product.type == activeSolution));
    //setProductList(products);
  });

  const p = filterProducts(name);

  const BlockEl = () => {
    let block = [];

    p.map((item, idx) => {
      block.push(
        <div
          key={idx}
          className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-8 md:mb-0"
        >
          <div className="flex items-center p-6 pb-0">
            <div className="text-6xl">
              <FontAwesomeIcon icon={["fas", "shield-alt"]} />
            </div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-blue-900">{item.solutions}</div>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
          <div className="px-6 pt-2 pb-2">
            {item.subSolutions.length > 0 && (
              <Link
                href={`/solutions/sub/${encodeURIComponent(item.solutions)}`}
              >
                <a className="inline-block py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">
                  <span className="mr-2 inline-block">View Products</span>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </a>
              </Link>
            )}

            {item.subSolutions.length < 1 && (
              <Link href="/#quote-form">
                <a className="inline-block py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">
                  <span className="mr-2 inline-block">Get a quote</span>
                  <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                </a>
              </Link>
            )}
          </div>
        </div>
      );
    });

    return <>{block}</>;
  };

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
              <FontAwesomeIcon icon={["fas", "angle-right"]} /> {activeSolution}
            </p>
          </div>
        </div>
      </section>

      <section className="section md:py-14 py-8 bg-gray-100" id="about-us">
        <div className="container grid md:grid-cols-3 md:gap-12">
          {/* Test Start */}

          <BlockEl />

          {/* {productList.map((item, idx) => {
            return (
              <div
                key={idx}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-8 md:mb-0"
              >
                <div className="flex items-center p-6 pb-0">
                  <div className="text-6xl">
                    <FontAwesomeIcon icon={["fas", "plus-square"]} />
                  </div>
                </div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.solutions}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>
                <div className="px-6 pt-2 pb-2">
                  {item.subSolutions.length > 0 && (
                    <Link
                      href={`/solutions/sub/${encodeURIComponent(
                        item.solutions
                      )}`}
                    >
                      <a className="inline-block py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">
                        <span className="mr-2 inline-block">View Products</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </a>
                    </Link>
                  )}

                  {item.subSolutions.length < 1 && (
                    <Link href="/#quote-form">
                      <a className="inline-block py-1 text-sm font-semibold text-blue-400 mr-2 mb-2">
                        <span className="mr-2 inline-block">Get a quote</span>
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </a>
                    </Link>
                  )}
                </div>
              </div>
            );
          })} */}

          {/* Test End */}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
