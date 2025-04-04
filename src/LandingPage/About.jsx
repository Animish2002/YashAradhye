import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";

export default function AboutUs() {
  return (
    <section className="text-center md:h-[80vh] h-full md:mt-18 mt-10">
      <span className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 hero ">
        About Us
      </span>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 p-8 mx-auto max-w-6xl py-14">
        {/* Left Side Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your actual image path
            alt="About Us"
            width={900}
            className="rounded-full shadow-lg"
            style={{ borderRadius: "90%" }}
          />
        </motion.div>

        {/* Right Side Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[40rem]"
        >
          <Card className="p-6 shadow-xl bg-white dark:bg-gray-900">
            <CardContent>
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                Welcome to My Channel!
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                I'm <span className="font-semibold">Yash Aradhye</span>, and my
                mission is to help students in Maharashtra—from rural to urban
                areas—achieve their academic goals. As an electrical engineering
                student at DY Patil College Pune, I understand the challenges
                students face.
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                This channel is your trusted source for verified information on
                education, engineering, and technology. Whether you're a high
                school student, a college student, or just eager to learn,
                you're in the right place!
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Join me as we explore the world of education together. Don't
                forget to subscribe and turn on notifications so you never miss
                an update!
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
