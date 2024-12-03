import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 ">
      <div className="container mx-auto">
        {/* Main Card Container with Full Width and Margin */}
        <div className="bg-white shadow-xl rounded-lg  md:p-12 w-full m-2">
          {/* Welcome Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-600 mb-4">
              Welcome to Jobzest
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re a business looking for the right candidates or
              an individual searching for your next big career move, Jobzest is
              your trusted partner.
            </p>
          </div>

          {/* Vision and Mission Section */}
          <div className="flex flex-col md:flex-row md:gap-8 items-start">
            {/* Vision Card */}
            <div className="flex-1 mb-8 md:mb-0">
              <div className="bg-blue-50 shadow-md rounded-lg p-6 text-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be a leading job consultancy, empowering individuals and
                  organizations to achieve professional success.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="flex-1">
              <div className="bg-blue-50 shadow-md rounded-lg p-6 text-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To help individuals find rewarding careers through
                  personalized job search services. To assist businesses in
                  sourcing, recruiting, and retaining the best talent in the
                  market. To offer career coaching, training, and recruitment
                  solutions tailored to each client’s unique needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
