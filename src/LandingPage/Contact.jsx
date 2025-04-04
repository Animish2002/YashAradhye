import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  ChevronRight,
} from "lucide-react";

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat to Support",
    description: "We're here to help with any questions",
    action: "Start a chat",
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "contact@yasharadhye.com",
    action: "Send an email",
    color: "bg-indigo-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 98765 43210",
    action: "Call now",
    color: "bg-teal-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "DY Patil College, Pune",
    action: "Get directions",
    color: "bg-orange-500",
  },
];

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
            Get in Touch
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-zinc-500 dark:text-zinc-400">
            Have questions about our resources or need personalized guidance?
            We're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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

          {/* Contact info */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-6 flex flex-col h-full"
              >
                <div
                  className={`p-3 rounded-full ${method.color} w-12 h-12 flex items-center justify-center mb-4`}
                >
                  <method.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-1">
                  {method.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm flex-grow">
                  {method.description}
                </p>
                <button className="mt-4 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center">
                  {method.action}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
