// import '../stylesheets/App.css';
import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './NavBar/Navbar';
import Demo from './Demo/Demo';
import { Hero } from './Hero/Hero';
import Footer from './Footer/Footer';
import { Team } from './Team/Team'
import { Features } from './Features/Features';


const LazyLoadTeam = React.lazy(() => import('./TeamCards/TeamCards'));

function App() {
  const [renderFx, toggleRenderFx] = useState<string>('');
  const [teamComp, toggleRenderTeam] = useState<boolean>(false);

  //runs once on render, then procs the useState for rendered to change to renderedLogo
  //these two strings are ID's in our CSS.
  useEffect(() => {
    toggleRenderFx('rendered');
  }, []);

  useEffect(() => {}, [teamComp]);

  return (
    <div className="m-0 p-0 bg-background flex flex-col h-screen w-full xl:pl-16 xl:pr-16">
      <Router>
      <Navbar teamComp={teamComp} toggleRenderTeam={toggleRenderTeam} />
      {/* conditionally renders between the team page and the main page. */}
      <Suspense fallback={<div>Loading..</div>}>
        {teamComp ? <LazyLoadTeam /> : null}
      </Suspense>
      <Hero />
      {/* <Route path="/" Component={Hero} /> */}
      <Features />
      <Team/>
      {/* <Route path='/team' element={Team}/> */}
      {/* <div className="main" id={renderFx}>
        {!teamComp && <hr style={{width: '60%'}}/>}
        {!teamComp && <Demo />}
      </div> */}
      <Demo/>
      <Footer />
      </Router>
    </div>
  );
}

export default App;