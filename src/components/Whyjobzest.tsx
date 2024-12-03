import React from 'react';

const WhyJobzest: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg m-2 p-6 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Why Choose Jobzest?</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
  At Jobzest, we go beyond traditional recruitment. We are committed to providing exceptional services that cater to both job seekers and employers. Here&apos;s why you should choose us as your recruitment partner.
</p>

        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature Card */}
          <FeatureCard
            iconClass="fas fa-briefcase"
            title="Industry Expertise"
            description="Our team has deep expertise across multiple industries like IT, healthcare, finance, and more."
          />
          <FeatureCard
            iconClass="fas fa-user-check"
            title="Tailored Approach"
            description="We offer personalized services because we believe every individual and business is unique."
          />
          <FeatureCard
            iconClass="fas fa-award"
            title="Commitment to Quality"
            description="We prioritize excellence in everything we do, from candidate screening to job placement."
          />
          <FeatureCard
            iconClass="fas fa-headset"
            title="Dedicated Support"
            description="A dedicated consultant will guide you through every step, whether you're a job seeker or an employer."
          />
        </div>
      </div>
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  iconClass: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconClass, title, description }) => {
  return (
    <div className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-center text-center w-full">
      <div className="bg-blue-600 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
        <i className={`${iconClass} text-2xl`}></i>
      </div>
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default WhyJobzest;
