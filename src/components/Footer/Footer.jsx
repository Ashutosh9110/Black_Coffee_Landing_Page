import React from "react";
import CreditCards from "../../assets/website/credit-cards.webp";
import { motion } from "framer-motion";
import { FaFacebook, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Company details section */}
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="space-y-6">
          <h1 className="text-3xl font-bold uppercase">Your Black Coffee</h1>
          <p className="text-sm max-w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam veniam tempora blanditiis similique et aspernatur iste officiis, reiciendis molestiae earum consectetur.
          </p>
          <div>
            <p className="flex items-center gap-2 mt-2">
              <FaPhone />
              +1 (123) 456-7890
            </p>
            <p className="flex items-center gap-2 mt-2">
              {" "}
              <FaMapLocation /> Delhi, India
            </p>
          </div>
          </motion.div>
          {/* Footer links section */}
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
          }}
          className= "space-y-6">
            <h1 className="text-3xl font-bold">
              Quick Links
            </h1>
            <div className="grid grid-cols-2 gap-3">
              {/* First Column section */}
              <div>
                <ul className="space-y-3">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              {/* Second Column section */}
              <div>
                <ul className="space-y-3">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </motion.div>
          {/* Social links section */}
          <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0}}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
          }}
          className="space-y-6">
            <h1 className="text-3xl font-bold">
              Follow us
            </h1>
            <div className="flex items-center gap-3">
              <FaFacebook className="text-3xl hover: scale-105 duration-300 cursor-pointer" />
              <FaInstagram className="text-3xl hover: scale-105 duration-300 cursor-pointer" />
              <FaTelegram className="text-3xl hover: scale-105 duration-300 cursor-pointer"/>
              <FaGoogle className="text-3xl hover: scale-105 duration-300 cursor-pointer"/>
              </div>
              <div>
                <h1 className="text-xl font-semibold mb-2">Payment Methods</h1>
                <img src={CreditCards} alt=""
                className="w-[80%]"
                />
              </div>
            
          </motion.div>
        </div>
          {/* Copyright section */}
          <p 
          className="text-white text-center mt-8 pt-5 border-t-2">
            Copyright &copy. 2025 Company Name. All rights reserved.
          </p>
      </div>
    </div>
    );
};

export default Footer;
