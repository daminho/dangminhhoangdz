import './App.css';
import AboutMe from './widget/about_me/AboutMe';
import SimpleExperience from './widget/experience/SimpleExperience';
import Footer from './widget/footer/Footer';
import Hobbies from './widget/hobbies/Hobbies';
import LandingPage from './widget/landing_page/LandingPage';
import ResponsiveAppBar from './widget/nav_bar/ResponsiveAppBar';
import Section from './widget/section';
import { SectionProps } from './widget/section';
import TerminalBackground from './widget/TerminalBackground';

const experienceProps = {
  title: "Experiences",
  child: <SimpleExperience/>
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
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0d1117',
    }}>
      <TerminalBackground />

      {/* Content layer above the canvas */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ maxWidth: '1000px', width: '100%', marginBottom: '64px', padding: '0 16px', boxSizing: 'border-box' }}>
          <ResponsiveAppBar />
          <LandingPage />
          <Section {...aboutMeProps} />
          <Section {...experienceProps} />
          <Section {...hobbies} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
