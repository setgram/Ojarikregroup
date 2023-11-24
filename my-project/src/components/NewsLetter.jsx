import React from "react";

export default function NewsLetter() {
  return (
    <section className="mb-10 px-12 pt-5 font-semibold text-white items-center mx-auto mt-10 flex justify-between flex-wrap bg-no-repeat bg-yellow-600 bg-20 bg-[y-30]">
      <div>
        <h3>Sign-up For Our Newsletters</h3>
        <p>
          Get E-mail updates about our latest shop and
          <span className="text-blue-800">special offers</span>
        </p>
      </div>
      <div class="form">
        <input
          type="text"
          placeholder="Your email address"
          className="h-8 py-o px-2 w-full border-solid border-transparent outline-none rounded"
        />
        <button className="bg-slate-600 py-3 px-3 mt-3 mb-5 rounded border-transparent border-solid cursor-pointer">
          Sign Up
        </button>
      </div>
    </section>
  );
}
