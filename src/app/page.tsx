import Footer from "./components/Footer/Footer";
import TopNav from "./components/TopNav/TopNav";
import AboutBox from "./home/AboutBox/AboutBox";
import BlogBox from "./home/BlogBox/BlogBox";
import ChoiceBox from "./home/ChoiceBox/ChoiceBox";
import ClientBox from "./home/ClientBox/ClientBox";
import GlobalBox from "./home/GlobalBox/GlobalBox";
import HeadBox from "./home/HeadBox/HeadBox";
import SkillBox from "./home/SkillBox/SkillBox";
import TestimonialBox from "./home/TestimonialBox/TestimonialBox";
import VisionBox from "./home/VisionBox/VisionBox";

const Home = () => {
  return (
    <main>
      <section>
        <TopNav />
        <HeadBox />
      </section>

      <SkillBox />
      <AboutBox />
      <ClientBox />
      <ChoiceBox />
      <GlobalBox />
      <VisionBox />

      <TestimonialBox />

      <BlogBox />



      <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.039531574266!2d-0.2127994259245494!3d5.561159433599683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf90a0ad388495%3A0x3637a94eff4ed377!2sDavid%20Walter%20Ghana%20Limited!5e0!3m2!1sen!2sgh!4v1708681404756!5m2!1sen!2sgh"
          width="100%" height="350"
          loading="lazy" referrerPolicy="no-referrer-when-downgrade">
        </iframe>


        <Footer />
      </section>
    </main>
  );
}

export default Home;