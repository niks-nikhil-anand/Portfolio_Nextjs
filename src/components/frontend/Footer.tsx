"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-background text-foreground py-10 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h2 className="text-xl font-bold">Nikhil Anand</h2>
          <p className="text-muted-foreground text-sm mt-2">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6 mt-4 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Button variant="ghost" size="icon">
            <FaFacebook className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaTwitter className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaInstagram className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <FaGithub className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
