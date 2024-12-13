import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { workflowData } from "../data";

const Workflow = () => {
  const [animate, setAnimate] = useState(true);
  const workflowRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);

          setTimeout(() => {
            setAnimate(false);
          }, 1000);
        }
      },
      { threshold: 0.4 }
    );

    if (workflowRef.current) {
      observer.observe(workflowRef.current);
    }

    return () => {
      if (workflowRef.current) {
        observer.unobserve(workflowRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={workflowRef}
      className="w-full pb-60 pl-20 pr-20 pt-80 py-16 px-8 bg-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Section */}
        <div
          className={`md:w-1/3 mb-8 md:mb-0 pt-20 ${
            animate ? "animate-slideInFromRight" : "" // Add animation when trigger happens
          }`}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Workflow</h2>
          <p className="text-gray-600 text-lg">
            Our workflow is designed to ensure efficiency, collaboration, and
            quality in every project we undertake. From planning to deployment,
            we focus on delivering the best solutions for our clients.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-2/3 grid grid-cols-2 grid-rows-2 gap-x-0 gap-y-4 justify-items-end">
          {/* Map through the workflow data and render each Card with animation */}
          {workflowData.map((card, index) => (
            <Card
              key={index}
              Icon={card.icon}
              title={card.title}
              description={card.description}
              iconColor={card.iconColor}
              // Apply animation class based on the card index and animate state
              animationClass={
                animate
                  ? index % 2 === 0
                    ? "animate-moveUp"
                    : "animate-moveDown"
                  : "" // Ensure animation is applied only when `animate` is true
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
