import { Box } from '@mui/material';
import './App.css';
import AboutMe from './widget/about_me/AboutMe';
import Experience from './widget/experience/Experience';
import Footer from './widget/footer/Footer';
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
      </div>
      <Footer/>
    </Box>
  );
}

export default App;
