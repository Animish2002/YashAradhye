import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card, CardContent } from "../components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  ChevronRight,
  Clock,
} from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    Enquiry: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-zinc-50 dark:bg-zinc-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Contact Us
          </h2>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl hero">
            Get in Touch
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-500 dark:text-zinc-400">
            Have questions about our resources or need personalized guidance?
            We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          {/* Map and Contact Info */}
          <div className="space-y-6">
            {/* Map */}
            <div className="rounded-lg overflow-hidden h-[300px] bg-white shadow-lg">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.494757215129!2d73.76888166959277!3d18.57498417015168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e70a2bfab1%3A0xa80bc92fd30a3d8!2zQW5pdGEgQXl1cnZlZGEgJiBQYW5jaGthcm1hLCDgpIbgpK_gpYHgpLDgpY3gpLXgpYfgpKYg4KSG4KSj4KS_IOCkquCkguCkmuCkleCksOCljeCkriDgpJrgpL_gpJXgpL_gpKTgpY3gpLjgpL4!5e0!3m2!1sen!2sin!4v1740051805370!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-serif text-xl text-stone-800 mb-6">
                  Do visit us at our office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-stone-800">Location</p>
                      <p className="text-stone-600">
                        Shop no 1, Balewadi, Pune, Maharashtra 411045
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-stone-800">
                        Working Hours
                      </p>
                      <p className="text-stone-600">
                        Monday - Saturday: 10:00 AM - 8:30 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-stone-800">Contact</p>
                      <p className="text-stone-600">+91 xxxxxxxx</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-xl p-8"
          >
            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mb-6">
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <Button
                  onClick={() => setFormSubmitted(false)}
                  variant="outline"
                >
                  Send another message
                </Button>
              </motion.div>
            ) : (
              <motion.form
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </motion.div>
                <motion.div className="space-y-2">
                  <label
                    htmlFor="Enquiry"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="Enquiry"
                    value={formData.Enquiry}
                    onChange={handleChange}
                    className="mt-0 block w-full rounded-md border border-stone-300 bg-white px-3 py-2 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    required
                  >
                    <option value="">Select option</option>
                    <option value="jee-guidance">JEE Guidance</option>
                    <option value="neet-guidance">NEET Guidance</option>
                    <option value="mhtcet-guidance">MH-CET Guidance</option>
                    <option value="followup">Board Exam Preparation</option>
                    <option value="general">General Counseling</option>
                  </select>
                </motion.div>

                <motion.div variants={item}>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows={4}
                    required
                    className="w-full resize-none"
                  />
                </motion.div>

                <motion.div variants={item}>
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </motion.div>
              </motion.form>
            )}
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Contact;
