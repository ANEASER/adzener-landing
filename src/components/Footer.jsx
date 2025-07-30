import React from 'react';
import { FaXTwitter, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#f8f6fc] text-gray-800 px-6 md:px-20 py-12">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Explore */}
        <div>
          <h3 className="font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Request a Demo</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">API & Integrations</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-2">
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-600 mb-4">
            Have questions or ideas? We're here for you.
          </p>
          <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Email:</strong> hello@adzener.ai</p>
            <p><strong>Phone no:</strong> +94 777 575 675</p>
            <p><strong>Location:</strong> Remote-first, globally available</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 border-t pt-6 text-sm text-gray-500">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" className="p-2 rounded-full border"><FaXTwitter /></a>
          <a href="#" className="p-2 rounded-full border"><FaLinkedinIn /></a>
          <a href="#" className="p-2 rounded-full border"><FaFacebookF /></a>
          <a href="#" className="p-2 rounded-full border"><FaInstagram /></a>
        </div>
        <p>© 2025 Adzener. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
