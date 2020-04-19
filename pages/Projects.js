// pages/profile.js
// import Layout & Link
import Link from "next/link";
import Layout from "./components/Layout";
// Import styling SCSS File



// Create Projects object, NEXT routes as a page
const Projects = (props) => {
  return (
      <Layout>
          <div>
          <h1>PROJECTS</h1>
              <br />
          </div>
          <br>
          </br>
          {/*/Grid of Projects with images and links */}
      <div className="grid-container">
        <div className="grid-item">
          <a
            href="https://codepen.io/LeonStevens122/pen/jYvLgz"
            alt="Uys Krige tribute page"
          >
            <img
              className="portfolio-image"
              src="https://upload.wikimedia.org/wikipedia/af/f/f4/Uys_Krige_2.jpg"
              alt="Uys Krige tribute page"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://codepen.io/LeonStevens122/full/ZxxMbo"
            alt="Random quote generator Page"
          >
            <img
              className="portfolio-image"
              src="https://lh3.googleusercontent.com/proxy/zBB4kSnoW5YZuGnxesJY2ZTX_K6RJwWq_5nNSH7KqJLIdRTR_z5z3z-lR-3lVxWw1kTmj-ABLHS6wOIuvAUdmuma9iigXulbOjG2haGlvA=w530-h311-p-k-rw"
              alt="Random Quote Generator page"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://github.com/LeonStevens122/HyperionDev-Full-Stack-WebDev-Bootcamp.git"
            alt="Online store"
          >
            <img
              className="portfolio-image"
              src="https://raw.githubusercontent.com/LeonStevens122/Personal-Website/master/data/webstore.jpg"
              alt="Web Store"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://github.com/LeonStevens122/React-Weather-App.git"
            alt="React Weather App"
          >
            <img
              className="portfolio-image"
              src="https://raw.githubusercontent.com/LeonStevens122/React-Weather-App/master/public/screenshot.jpg"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://git.heroku.com/secret-island-56752.git"
            alt="Tetris Game using React & TypeScript"
          >
            <img
              className="portfolio-image"
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Emacs_Tetris_vector_based_detail.svg"
              alt="Tetris image"
            />
          </a>
        </div>

        <div className="grid-item">
          <a
            href="https://codepen.io/LeonStevens122/pen/oqRNGq"
            alt="Wikipedia Viewer"
          >
            <img
              className="portfolio-image"
              src="https://screenshot.codepen.io/1691929.oqRNGq.73d037dd-dab9-41f1-b97f-de1ead6971b9.png"
              alt="Wikipedia Viewer"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
