import React from "react";

const AboutUsComponents = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">About Us</h2>

      {/* Website Description */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Website Description</h3>
        <p className="text-gray-700 leading-relaxed">
          Our website is designed to provide users with a seamless and interactive experience. 
          We focus on delivering high-quality services and information in a user-friendly interface, 
          ensuring accessibility, responsiveness, and engagement for all visitors.
        </p>
      </section>

      {/* Purpose */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Purpose</h3>
        <p className="text-gray-700 leading-relaxed">
          The primary purpose of our website is to connect users with reliable resources and tools, 
          streamline processes, and enhance productivity. We aim to offer solutions that meet the needs 
          of our community efficiently and effectively.
        </p>
      </section>

      {/* Mission & Vision */}
      <section>
        <h3 className="text-2xl font-semibold mb-3">Mission & Vision</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          <strong>Mission:</strong> To empower users by providing innovative, accessible, and 
          high-quality digital solutions that simplify their tasks and enhance their online experience.
        </p>
        <p className="text-gray-700 leading-relaxed">
          <strong>Vision:</strong> To become a leading platform recognized for reliability, 
          creativity, and positive impact in the digital space, continuously evolving to meet 
          the future needs of our users.
        </p>
      </section>
    </div>
  );
};

export default AboutUsComponents;
