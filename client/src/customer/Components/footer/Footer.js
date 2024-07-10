import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black shadow-md box-border w-full text-left font-bold p-14">
      <div className="flex flex-wrap justify-between">
        {/* Footer Left */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_YhaXWp1A9kZxpeXYpCL0oj0764uVAWjdA&s" alt="Apala Bazar Logo"></img>
          <p className="text-white mt-5 mb-3">
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              Home
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              Shop
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              Blog
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              Pricing
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              About
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              Faq
            </a>{" "}
            |
            <a
              href="#"
              className="hover:underline transition ease-in-out duration-300"
            >
              {" "}
              Contact
            </a>
          </p>
          <p className="text-gray-300 text-sm font-normal">
            Apala Bazar  © 2024
          </p>
        </div>

        {/* Footer Center */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <div className="mb-4">
            <i className="fa fa-map-marker text-white bg-gray-800 text-xl w-10 h-10 rounded-full text-center leading-10 mr-3"></i>
            <p className="text-white">
              <span className="block font-normal text-sm">Apala Bazar</span>
              Panchayat Samiti Road, <br />
              Shrigonda-413701, Ahmednagar,
              <br />
              Maharashtra
            </p>
          </div>
          <div className="mb-4">
            <i className="fa fa-phone text-white bg-gray-800 text-xl w-10 h-10 rounded-full text-center leading-10 mr-3"></i>
            <p className="text-white">+91 9975631919 </p>
          </div>
          <div className="mb-4">
            <i className="fa fa-envelope text-white bg-gray-800 text-xl w-10 h-10 rounded-full text-center leading-10 mr-3"></i>
            <p className="text-white">
              <a
                href="mailto:aapalabazar@gmail.com"
                className="text-teal-400 hover:underline transition ease-in-out duration-300"
              >
                aapalabazar@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Right */}
        <div className="w-full md:w-1/5">
          <p className="text-gray-400 text-sm font-normal mb-4">
            <span className="block text-white text-base font-bold mb-3">
              About Apala Bazar
            </span>
            Shop from the comfort of your home and enjoy a seamless shopping
            experience with us. From daily essentials to unique finds, Apala
            Bazar offers everything you need, all in one place, with a
            commitment to customer satisfaction.
          </p>
          <div className="flex mt-6 space-x-3">
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
