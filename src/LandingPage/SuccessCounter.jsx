import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { Button } from "../components/ui/button";

const SuccessCounter = () => {
  // Define success metrics data
  const successMetrics = [
    {
      title: "Students Placed",
      count: 15000,
      icon: "👨‍🎓",
      suffix: "+",
      color: "bg-blue-100",
      progressColor: "bg-blue-600",
    },
    {
      title: "Partner Colleges",
      count: 250,
      icon: "🏛️",
      suffix: "+",
      color: "bg-emerald-100",
      progressColor: "bg-emerald-600",
    },
    {
      title: "Corporate Partners",
      count: 1200,
      icon: "🏢",
      suffix: "+",
      color: "bg-amber-100",
      progressColor: "bg-amber-600",
    },
    {
      title: "Success Rate",
      count: 98,
      icon: "🎯",
      suffix: "%",
      color: "bg-purple-100",
      progressColor: "bg-purple-600",
    },
  ];

  // State for animated counters
  const [counters, setCounters] = useState(successMetrics.map(() => 0));
  const [progress, setProgress] = useState(successMetrics.map(() => 0));
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Start animation after component mounts
    setInView(true);

    // Animate counters
    const duration = 2000; // 2 seconds for the animation
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress === 1) {
        clearInterval(interval);
        setCounters(successMetrics.map((metric) => metric.count));
        setProgress(successMetrics.map(() => 100));
        return;
      }

      // Calculate current counter values based on animation progress
      setCounters(
        successMetrics.map((metric) => {
          // Use easeOutQuad for smoother animation
          const easeProgress = 1 - (1 - progress) * (1 - progress);
          return Math.floor(metric.count * easeProgress);
        })
      );

      setProgress(successMetrics.map(() => Math.floor(progress * 100)));
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-[80rem] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 hero">
            Our Success By Numbers
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Track record of excellence in connecting students with top
            educational institutions and employment opportunities across
            Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className={`counter-card transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className={`${metric.color} border-none shadow-md overflow-hidden`}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-base font-medium text-slate-600">
                        {metric.title}
                      </p>
                      <h3 className="text-4xl font-bold text-slate-900 mt-1">
                        {counters[index].toLocaleString()}
                        {metric.suffix}
                      </h3>
                    </div>
                    <span
                      className="text-3xl"
                      role="img"
                      aria-label={metric.title}
                    >
                      {metric.icon}
                    </span>
                  </div>
                  <Progress
                    value={progress[index]}
                    className="h-2 mt-4"
                    indicatorClassName={metric.progressColor}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center h-[200px] space-y-4 text-center">
          <p className="text-xl font-medium">
            Ready to Transform Your Academic Journey?
          </p>
          <p className="text-lg">
            Join hundreds of successful students who've achieved their academic
            goals with our guidance.
          </p>
          <Button className="px-10 py-3 bg-blue-500 hover:bg-blue-800">Schedule Your Free Consultation</Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessCounter;
