"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop, slideInFromLeft } from "@/utils/motion";
import {
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  MegaphoneIcon,
  CursorArrowRippleIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

const services = [
  {
    icon: <RocketLaunchIcon className="h-8 w-8 text-purple-500" />,
    title: "Immersive Gaming",
    image: "game1.png",
    description:
      "We design and develop immersive gaming experiences with responsive design, smooth UI, and integrated monetization strategies.",
    delay: 0.2,
  },
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-cyan-500" />,
    title: "Smartphone Integration",
    image: "phone.png",
    description:
      "Optimize applications for mobile platforms with fast load times, accessibility features, and cross-device support.",
    delay: 0.4,
  },
  {
    icon: <MegaphoneIcon className="h-8 w-8 text-pink-500" />,
    title: "Digital Marketing",
    image: "digital-marketing.png",
    description:
      "Execute powerful marketing strategies with automation tools, analytics, and customer segmentation.",
    delay: 0.6,
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-yellow-400" />,
    title: "Analytics & Insights",
    image: "analytics.png",
    description:
      "Track and visualize customer data in real time to guide better decision-making with actionable metrics.",
    delay: 0.8,
  },
  {
    icon: <CpuChipIcon className="h-8 w-8 text-green-400" />,
    title: "AI Solutions",
    image: "ai.png",
    description:
      "Integrate AI for personalization, automation, and data prediction to give your business a future-ready edge.",
    delay: 1.0,
  },
  {
    icon: <CursorArrowRippleIcon className="h-8 w-8 text-blue-400" />,
    title: "User Engagement",
    image: "user.png",
    description:
      "Boost engagement with gamification, interactive elements, and real-time feedback mechanisms.",
    delay: 1.2,
  },
];

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="w-full bg-[#0f0f1c] text-white px-6 lg:px-20 py-24"
    >
      <motion.h2
        variants={slideInFromTop}
        className="text-4xl font-bold text-center mb-12"
      >
        Our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Services
        </span>
      </motion.h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(service.delay)}
            className="bg-[#1e1e2f] rounded-2xl border border-[#7042f855] overflow-hidden shadow-lg transition-transform transform hover:scale-[1.02]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-40 h-40 object-contain mx-auto mt-6"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
