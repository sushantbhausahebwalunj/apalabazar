import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 shadow-lg mt-auto">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-40">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          
          <img src="" alt="Logo" className="mb-4 w-32 h-auto" />
          <div className="flex space-x-4 mb-4 text-2xl">
            <a href="#" className="footer-link">
              <img src="https://i.pinimg.com/originals/42/75/49/427549f6f22470ff93ca714479d180c2.png" alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="#" className="footer-link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO0DwRBL0MB2rRIDS7z6uOxmRBbug7uXOqA&s" alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="#" className="footer-link">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlf2GkEtPk1w49L9mw1r1ERJRea7lAPMm6Q&s" alt="Instagram" className="w-8 h-8" />
            </a>
          </div>
          {/* <div className="flex space-x-4 text-2xl">
            <span><img src="/icons/visa.svg" alt="Visa" className="w-8 h-8" /></span>
            <span><img src="/icons/mastercard.svg" alt="Mastercard" className="w-8 h-8" /></span>
            <span><img src="/icons/amex.svg" alt="American Express" className="w-8 h-8" /></span>
            <span><img src="/icons/rupay.svg" alt="Rupay" className="w-8 h-8" /></span>
            <span><img src="/icons/cod.svg" alt="COD" className="w-8 h-8" /></span>
          </div> */}
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Information</h2>
          <div className="flex flex-col space-y-2 text-lg">
            <a href="#" className="footer-link">FAQs</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Pricing, Delivery, Return and Refund Policy</a>
            <a href="#" className="footer-link">Terms and Conditions</a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">Support</h2>
          <div className="flex flex-col space-y-2 text-lg">
            <a href="#" className="footer-link">Contact Us</a>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Disclaimer</a>
          </div>
        </div>
      </div>
      <div className="text-center mt-12 text-lg">
        <p className='tracking-wide '>Copyright © 2024 Arohi Software. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
