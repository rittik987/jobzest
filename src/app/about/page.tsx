"use client";

import Image from "next/image";
import ceo from '../../../public/ceo.png';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 px-6 md:px-16 lg:px-24 rounded-lg shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Top Section - Image and Initial Content */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Section */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            style={{ transition: "all 0.8s ease", transform: "translateX(0)", opacity: "1" }}
          >
            <Image
              src={ceo} // Replace with the actual path to the CEO's image
              alt="Rahul M"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 shadow-lg"
            />
          </div>

          {/* Initial Content Section */}
          <div
            className="w-full md:w-1/2"
            style={{ transition: "all 0.8s ease", transform: "translateX(0)", opacity: "1" }}
          >
            <h2 className="text-4xl font-extrabold text-gray-800 mb-4">RAHUL M</h2>
            <h3 className="text-2xl font-semibold text-blue-600 mb-6">CEO & Founder</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Visionary Leader:</strong> Passionate about empowering individuals to achieve their career goals through personalized guidance and innovative strategies.
            </p>
          </div>
        </div>

        {/* Remaining Content */}
        <div
          className="space-y-8"
          style={{ transition: "opacity 0.8s ease", opacity: "1" }}
        >
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Expert Career Coach:</strong> Extensive expertise in job market trends, resume building, and interview preparation to ensure success.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Innovative Problem-Solver:</strong> Dedicated to bridging the gap between job seekers and employers with cutting-edge solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Industry Networker:</strong> Strong relationships with leading organizations to provide exceptional opportunities for job seekers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Motivational Speaker:</strong> Inspiring talks focused on unlocking potential and embracing lifelong learning in the workplace.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Jobzest Consultancy, our mission is to empower job seekers by providing them with the tools, knowledge, and opportunities they need to thrive in their careers. We are committed to creating a world where talent meets opportunity seamlessly.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Us?</h4>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Personalized career coaching tailored to your aspirations.</li>
              <li>Extensive job market insights and strategies for success.</li>
              <li>Strong connections with top-tier companies across industries.</li>
              <li>Comprehensive workshops and training programs to enhance skills.</li>
              <li>A dedicated team focused on your career growth.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
