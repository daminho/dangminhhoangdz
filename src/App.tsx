import { Box } from '@mui/material';
import './App.css';
import AboutMe from './widget/about_me/AboutMe';
import Experience from './widget/experience/Experience';
import ExperienceItem from './widget/experience/Experience';
import SimpleExerience from './widget/experience/SimpleExperience';
import Footer from './widget/footer/Footer';
import Hobbies from './widget/hobbies/Hobbies';
import LandingPage from './widget/landing_page/LandingPage';
import ResponsiveAppBar from './widget/nav_bar/ResponsiveAppBar';
import Section from './widget/section';
import { SectionProps } from './widget/section';



const experienceProps = {
  title: "Experiences",
  child: <SimpleExerience/>
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
    <Box style = {{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems : "center",
    }}>
      <div style =  {{
          width: "100%",
          marginBottom: "64px",
          alignItems: "center",
          justifyItems : "center",
          display: "flex",
          flexDirection: "column",
        }}>
        <ResponsiveAppBar/>
        <LandingPage/>
        <Section {...aboutMeProps}/>
        <Section {...experienceProps}/>
        <Section {...hobbies}/>
      </div>
      <Footer/>
    </Box>
  );
}

export default App;
