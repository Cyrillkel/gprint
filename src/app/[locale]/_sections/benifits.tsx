"use client";

import { Shield, Zap, Clock, Palette, Star, Award } from "lucide-react";
import { motion } from "framer-motion";

export const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality",
      description:
        "Our holographic materials are crafted with cutting-edge technology, ensuring exceptional durability and stunning visual effects that last.",
      color: "cyan",
      delay: 0.1,
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Production",
      description:
        "Quick turnaround times with our advanced manufacturing processes. Get your custom holographic solutions in record time.",
      color: "magenta",
      delay: 0.2,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Custom Design",
      description:
        "Tailored holographic solutions designed specifically for your brand. Stand out with unique, eye-catching designs.",
      color: "yellow",
      delay: 0.3,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "Dedicated team of holographic specialists ready to help you create the perfect solution for your needs.",
      color: "green",
      delay: 0.4,
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Leader",
      description:
        "Over 10 years of experience in holographic manufacturing, trusted by companies worldwide for quality and innovation.",
      color: "blue",
      delay: 0.5,
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Service",
      description:
        "Round-the-clock customer support to ensure your holographic needs are met whenever you need them.",
      color: "purple",
      delay: 0.6,
    },
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      cyan: "from-cyan-400 to-blue-500 border-cyan-500/20",
      magenta: "from-magenta-400 to-purple-500 border-magenta-500/20",
      yellow: "from-yellow-400 to-orange-500 border-yellow-500/20",
      green: "from-green-400 to-emerald-500 border-green-500/20",
      blue: "from-blue-400 to-indigo-500 border-blue-500/20",
      purple: "from-purple-400 to-pink-500 border-purple-500/20",
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.cyan;
  };

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 holo-bg opacity-20" />

      {/* Floating orbs */}
      <motion.div
        className="holo-orb absolute top-20 left-20 w-20 h-20 opacity-30"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="holo-orb absolute bottom-20 right-20 w-16 h-16 opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="holo-text-primary text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow">
            Why Choose GPrint?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover the advantages that make us the leading choice for
            holographic solutions worldwide
          </p>

          {/* Decorative line */}
          <motion.div
            className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto w-32"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: benefit.delay,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <div className="glass-card p-8 h-full border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${getColorClasses(
                    benefit.color
                  )} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-magenta-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Shimmer effect on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="glass-card p-8 border border-cyan-500/20 max-w-2xl mx-auto">
            <h3 className="holo-text-secondary text-2xl md:text-3xl font-bold mb-4 text-glow">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Join thousands of satisfied customers who trust GPrint for their
              holographic needs.
            </p>
            <button className="holo-button text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
      </div>
    </section>
  );
};
