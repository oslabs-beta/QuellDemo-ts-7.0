import quellBanner from '../assets/images/quell_logos/QUELL-nested.svg'
import quellBirdIcon from '../assets/images/quell_logos/QUELL-quail only.svg';
import EggOutlinedIcon from '@mui/icons-material/EggOutlined';
import quellCacheSVG from '../assets/images/graphics/QUELL-illu-airmail_3.svg'


export function About() {
  return (
    <div id="about" className="aboutContainer">
      <div id="scroll-about" ></div>
      <div className="quell-banner-container">
        <img src={quellBanner} alt="quell-banner" id="quell-banner" />
      </div>
      <div className="about-content-container">
        <div style={{display: 'flex', flexDirection: 'column'}} id="about-top">
        <span id="aboutHeading">Quello World!</span>
        <span>Quell is an easy-to-use, lightweight JavaScript library providing a client- and server-side caching solution for GraphQL.</span>
        </div>
        <div id="about-bottom">
          <div className="featureList" id="feature1">
            <EggOutlinedIcon className="eggIcon" fontSize="large" color="primary"/>
            <div id="featureItem">
              <span id="featureItemHeading">Fast + Accurate Caching for GraphQL Developers</span><br></br>
              <span id="featureItemContent">Quell optimizes speed using both client and server side caching and accuracy with partial/exact query caching.</span>
            </div>
          </div>
          <div className="featureList" id="feature2">
            <EggOutlinedIcon className="eggIcon" fontSize="large" color="primary"/>
            <div id="featureItem">
              <span id="featureItemHeading">Built-In Utilities for Security</span><br></br>
              <span id="featureItemContent">No need to import or to code your own graphQL security solutions. Quell has optional built-in middleware packages that protect your endpoint from malicious attacks.</span>
            </div>
          </div>
          <div className="featureList" id="feature3">
            <EggOutlinedIcon className="eggIcon" fontSize="large" color="primary"/>
            <div id="featureItem">
              <span id="featureItemHeading">Simple and Easy Installation + Detailed Documentation</span><br></br>
              <span id="featureItemContent">Quell prizes itself on being lightweight and simple. Use Quell alongside with our in-depth documentation to simplify things so you can get started on working ASAP!</span>
            </div>
          </div>
          <div className="featureList" id="feature4">
            <EggOutlinedIcon className="eggIcon" fontSize="large" color="primary"/>
            <div id="featureItem">
              <span id="featureItemHeading">Query Monitoring + Cache View Devtool</span><br></br>
              <span id="featureItemContent">Our dev tool contains all the metrics and utilities that a graphQL developer would need from query monitoring metrics to server cache data. Download our dev tool from the official chrome store now! </span>
            </div>
          </div>
          <div className="featureList" id="feature5">
            <EggOutlinedIcon className="eggIcon" fontSize="large" color="primary"/>
            <div id="featureItem">
              <span id="featureItemHeading">Open Source</span><br></br>
              <span id="featureItemContent">Quell is more than happy to accept any contributions and tips from the open source community!</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{position: 'relative'}}>
        <img src={quellCacheSVG} alt="quell-cache-img" id="quell-cache-svg" />
      </div>
    </div>
  )
}