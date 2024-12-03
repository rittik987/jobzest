import React from 'react';
import Image, {StaticImageData} from 'next/image';
import jobSeekerImage1 from '../../public/jobimage1.webp';
import jobSeekerImage2 from '../../public/jobimage2.jpg';

const JobSeekers: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg m-10 p-6 w-full mt-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Job Seekers: Your Path to a Brighter Future</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            At Jobzest, we specialize in providing personalized career guidance, job placement, and professional growth services. Here how we can help you achieve your career goals.
          </p>
        </div>

        {/* Job Seekers Services */}
        <div className="space-y-12">
          {/* Section 1: Career Counseling */}
          <ServiceSection
            title="Personalized Career Counseling"
            description="We understand your strengths and aspirations and help you map out a successful career path."
            points={[
              'Resume and LinkedIn Profile Enhancement',
              'Job Matching & Placement',
            ]}
            imageSrc={jobSeekerImage1}
            altText="Career Guidance"
          />

          {/* Section 2: Interview Prep and Training */}
          <ServiceSection
            title="Interview Preparation & Skill Development"
            description="Our team offers mock interview sessions and courses to help you enhance your skills and stay competitive."
            points={[
              'Mock Interview Sessions',
              'Skill Development & Training',
              'Continuous Support throughout your job search',
            ]}
            imageSrc={jobSeekerImage2}
            altText="Skill Development"
            reverse={true}
          />
        </div>
      </div>
    </div>
  );
};

// Service Section Component
interface ServiceSectionProps {
  title: string;
  description: string;
  points: string[];
  imageSrc: StaticImageData;
  altText: string;
  reverse?: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, points, imageSrc, altText, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8`}>
      <div className="lg:w-1/2">
        <h3 className="text-3xl font-bold text-blue-600 mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <ul className="list-disc list-inside text-gray-700">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2">
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={imageSrc}
            alt={altText}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default JobSeekers;
