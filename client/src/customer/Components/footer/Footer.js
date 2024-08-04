import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black shadow-md box-border w-full text-left font-bold p-14">
      <div className="flex flex-wrap justify-between">
        {/* Footer Left */}
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi_YhaXWp1A9kZxpeXYpCL0oj0764uVAWjdA&s"
            alt="Apala Bazar Logo"
            className="mb-5"
          />
          <p className="text-white mt-3 mb-3">
            <a
              href="/"
              className="hover:underline transition ease-in-out duration-300"
            >
              Home
            </a>{" "}
            |
            <a
              href="/shop"
              className="hover:underline transition ease-in-out duration-300"
            >
              Shop
            </a>{" "}
            |
            <a
              href="/blog"
              className="hover:underline transition ease-in-out duration-300"
            >
              Blog
            </a>{" "}
            |
            <a
              href="/pricing"
              className="hover:underline transition ease-in-out duration-300"
            >
              Pricing
            </a>{" "}
            |
            <a
              href="/about"
              className="hover:underline transition ease-in-out duration-300"
            >
              About
            </a>{" "}
            |
            <a
              href="/faq"
              className="hover:underline transition ease-in-out duration-300"
            >
              Faq
            </a>{" "}
            |
            <a
              href="/contact"
              className="hover:underline transition ease-in-out duration-300"
            >
              Contact
            </a>
          </p>
          <p className="text-gray-300 text-sm font-normal">Apala Bazar © 2024</p>
        </div>

        {/* Footer Center */}
        <div className="w-full md:w-2/5 md:mb-0">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-red-500  text-3xl w-10 h-10 rounded-full text-center leading-10 mr-3 flex-shrink-0" />
            <div>
              <span className="block text-white text-2xl font-normal mb-1">Apala Bajar</span>
              <p className="text-white">
                Panchayat Samiti Road, <br />
                Shrigonda-413701, Ahmednagar, <br />
                Maharashtra
              </p>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <FaPhone className="text-green-500  text-3xl w-10 h-8 rounded-full text-center leading-10 mr-3 flex-shrink-0" />
            <p className="text-white">+91 9423750349</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-blue-500  text-3xl w-10 h-10 text-center leading-10 mr-3 flex-shrink-0" />
            <p className="text-white">
              <a
                href="mailto:apalabazar@gmail.com"
                className="text-teal-400 hover:underline transition ease-in-out duration-300"
              >
                apalabazar@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer Right */}
        <div className="w-full md:w-1/5">
          <p className="text-gray-400 text-sm font-normal mb-4">
            <span className="block text-white text-base font-bold mb-3">
              About Apala Bajar
            </span>
            Shop from the comfort of your home and enjoy a seamless shopping
            experience with us. From daily essentials to unique finds, Apala
            Bajar offers everything you need, all in one place, with a
            commitment to customer satisfaction.
          </p>
          <div className="flex mt-6 space-x-3">
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <FaFacebook className="text-blue-500" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <FaTwitter className="text-blue-400" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <FaLinkedin className="text-blue-800" />
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-gray-800 text-white text-xl flex items-center justify-center rounded hover:underline transition ease-in-out duration-300"
            >
              <FaInstagram className="text-pink-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
