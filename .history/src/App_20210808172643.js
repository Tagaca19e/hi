import { lazy, Suspense } from "react";
import "./index.css";
import AnimatedCursor from "react-animated-cursor";
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Project = lazy(() => import("./components/Project"));
const Skill = lazy(() => import("./components/Skill"));
const Contact = lazy(() => import("./components/Contact"));
const Particles = lazy(() => import("./components/particles"));
const Timeline = lazy(() => import("./components/Timeline"));
const About = lazy(() => import("./components/Aboutme"));
function App() {
  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="Main  my-10 mx-3 bg-black">
        <Header />
        <Particles />
        <AnimatedCursor
          innerSize={15}
          outerSize={20}
          color="57,227,156"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
        />

        <Hero />

        <Skill />
        <About />
        <Project />

        <Contact />
      </div>
    </Suspense>
  );
}
export default App;
