import HeroSection from '../components/Hero';
import AboutSection from '../components/About';
import WhyJobzest from '@/components/Whyjobzest';
import JobSeekers from '@/components/Jobseeker';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection/>
      <WhyJobzest/>
      <JobSeekers/>

    </div>
  );
};

export default HomePage;
