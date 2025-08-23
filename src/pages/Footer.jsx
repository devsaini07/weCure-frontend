import React from "react";

const Footer = () => {
    {/* Footer Section */}
    return (
      <section>
        <footer className="bg-gray-900 text-white py-8 px-4">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center ml-18">
            <div className="">
              <h2 className="text-2xl font-bold mb-4">weCure</h2>
              <p className="text-gray-400">
                Every kind of care you need is here.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
            © 2025 weCure. All rights reserved.
          </div>
        </footer>
      </section>
    );
}
export default Footer;