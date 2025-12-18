"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 holo-bg opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Main footer content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass-card p-6 border border-cyan-500/20">
                <h3 className="holo-text-primary text-2xl font-bold mb-4 text-glow">
                  GPrint
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Leading manufacturer of premium holographic solutions with
                  over 10 years of experience. We specialize in creating
                  innovative holographic stickers and materials that make your
                  products stand out.
                </p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-magenta-400 to-purple-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="glass-card p-6 border border-magenta-500/20">
                <h4 className="holo-text-secondary text-xl font-bold mb-4 text-glow">
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {["Products", "About Us", "Services", "Contact"].map(
                    (item, index) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                      >
                        <a
                          href="#"
                          className="text-gray-300 hover:text-cyan-300 transition-colors duration-300 flex items-center group"
                        >
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 group-hover:scale-150 transition-transform duration-300" />
                          {item}
                        </a>
                      </motion.li>
                    )
                  )}
                </ul>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="glass-card p-6 border border-yellow-500/20">
                <h4 className="holo-text-primary text-xl font-bold mb-4 text-glow">
                  Contact Info
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    <span>info@gprint.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3" />
                    <span>123 Holographic St, Tech City</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="glass-card p-6 border border-cyan-500/20">
              <p className="text-gray-300">
                © {currentYear} GPrint. All rights reserved. |
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-400 ml-2 transition-colors duration-300"
                >
                  Privacy Policy
                </a>{" "}
                |
                <a
                  href="#"
                  className="text-cyan-300 hover:text-cyan-400 ml-2 transition-colors duration-300"
                >
                  Terms of Service
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </footer>
  );
};
