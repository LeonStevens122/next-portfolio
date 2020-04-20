// pages/profile.js

import Layout from "./components/Layout";



// about component exports the component 
const About = () => {
  return (
      <Layout>

      <div>
        <div className="row">
          <p className="about-parr abt-column"> Full Stack Web Developer, HTML - CSS - JS - REACT - Epxress - Node - Python </p>
                  <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/C4E03AQHmVBtbJd2V3A/profile-displayphoto-shrink_200_200/0?e=1591228800&v=beta&t=8xEgbdzpZZIvonMr3k29_vXp8eynsu1FcupvomQaupo"
            className="profile-image"
            alt="A photo of Leon"
            title="Leon Photo"
          />          
                  </div>
        </div>
        <div className="row descriptionPar">
          <p>
            Full Stack web developer with extensive experience in supply chain
            and manufacturing, and taking the years of experience in meetign
            deadlines, finidng solutions, solving problems and just plain
            getting things done. And taking the same drive and passion into an
            exciting new Tech career{" "}
          </p>
              </div>
              <br />
              <div>
                  <h2 className="about-parr abt-column">
                      Full Stack Web Developer Bootcamp - HyperionDev 2020 
          </h2>
                  <h3 className="about-parr abt-column" > Field of study: Full Stack web Development with the M.E.R.N. stack </h3>
                  <div className="row descriptionPar">
                      <p className="EduPar">
                          
                          Specialization - Web Page, Digital/Multimedia and Information Resources Design
                      </p>
                  </div>
              </div>
              <br/>
              <div>
                  <h2 className="about-parr abt-column">Programme in Purchasing and Supply Management - UNISA 2015</h2>
                  <h3 className="about-parr abt-column" >Field of study: Purchasing, Procurement/Acquisitions and Contracts Management </h3>
                  <div className="row descriptionPar">
                      <p className="EduPar">

                          Specialization - Procurement and Stock Control
                          </p>
                  </div>
              </div>            
          </div>
    </Layout>
  );
};

export default About;
