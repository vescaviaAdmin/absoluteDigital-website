import React from "react";
import Title from "./Title";
import { clientWorkData } from "../assets/assets";
import { motion } from "framer-motion";

const OurWork = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="our-work"
      className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest work"
        desc="A selection of brands and companies we have supported through digital design, strategy, and execution."
      />

      <div className="grid gap-5 w-full max-w-6xl md:grid-cols-2">
        {clientWorkData.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            key={index}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-100 transition-all duration-500 hover:scale-[1.01] dark:border-gray-700 dark:bg-gray-900 dark:shadow-white/10"
          >
            <div className="flex flex-col gap-5 rounded-[10px] bg-white p-6 transition-all dark:bg-gray-900 sm:flex-row sm:items-center">
              <img
                src={work.image}
                className="h-32 w-full rounded-xl object-cover sm:h-28 sm:w-44"
                alt={work.title}
              />
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-semibold">{work.title}</h3>
                <p className="text-sm opacity-60">{work.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default OurWork;
