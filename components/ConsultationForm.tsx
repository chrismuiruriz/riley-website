import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function ConsultationForm() {
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
    <div>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        method="post"
        className="shadow-lg bg-white md:px-8 md:py-10 py-6 px-4"
      >
        <h2 className="md:mb-8 mb-6 font-bold md:text-3xl text-xl">
          Request for quote/consultation
        </h2>

        <div className="md:grid md:grid-cols-2 md:gap-4 mb-4">
          <div className="mb-4 md:mb-0">
            <label className="inline-block mb-2 text-sm">Your Name*</label>
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
  );
}
