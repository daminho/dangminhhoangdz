import './App.css';
import AboutMe from './widget/about_me/AboutMe';
import Experience from './widget/experience/Experience';
import ExperienceItem from './widget/experience/Experience';
import Footer from './widget/footer/Footer';
import Hobbies from './widget/hobbies/Hobbies';
import LandingPage from './widget/landing_page/LandingPage';
import ResponsiveAppBar from './widget/nav_bar/ResponsiveAppBar';
import Section from './widget/section';
import { SectionProps } from './widget/section';



const experienceProps = {
  title: "Experiences",
  child: <Experience/>
} as SectionProps

const aboutMeProps = {
  title: "About Me",
  child: <AboutMe/>
}

const hobbies = {
  title: "Hobbies",
  child: <Hobbies/>
}

function App() {
  return (
    <div style = {{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
      justifyItems : "center"
    }}>
      <div style =  {{
          maxWidth: "1000px",
          marginBottom: "64px",
        }}>
        <ResponsiveAppBar/>
        <LandingPage/>
        <Section {...aboutMeProps}/>
        <Section {...experienceProps}/>
        <Section {...hobbies}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
