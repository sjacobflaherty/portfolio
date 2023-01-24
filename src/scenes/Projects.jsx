import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-14 text-deep-blue overflow-hidden`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative bg-blue">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img
        src={`../assets/${projectTitle}.jpeg`}
        alt={projectTitle}
        className=""
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-44 pb-44">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">PROJECTS</p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I'm trained in many coding languages, frameworks, libraries, and
          methods such as: Pthyon, C#, HTML/CSS/JS, React, .NET Core, Docker,
          Bootstrap, Tailwind, Pycharm, VS, CRUD, REST api and so much more.
          Projects have links.
          <br />
          <br />
          The projects below have clickable links.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-deep-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            FRONT END <br />
            & BACK END <br />
          </div>
          <Project
            title="Admin Dashboard"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dashboard-sjacobflaherty.vercel.app/"
                className="text-center"
              >
                <p>
                  <b>Features:</b>
                  <br /> REACT jsx, light/dark mode, dynamic charts, FAQ page,
                  Calendar integration, Material UI, Nivo Charts, Formik, Yup,
                  FullCalendar, Data Grid.
                </p>
              </a>
            }
          />
          <Project
            title="2-week sprint"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/sjacobflaherty/CSharp-Live-Project#CSharp-Live-Project"
                className="text-center"
              >
                <p>
                  Working on vertigo theatre's website.
                  <b>Features:</b> C#, ASP.NET MVC. SCRUM, CRUD, Image to Byte
                  array, Bootstrap
                </p>
              </a>
            }
          />

          {/* ROW 2 */}
          <Project
            title="Project 3"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sjacobflaherty.github.io/"
                className="text-center"
              >
                <p>
                  Previous <b>Portfolio Website</b> hosted on github.
                  <br />
                  <br />
                  <b>Features:</b> HTML/JS/CSS, slideshow, "formspree" contact
                  form.
                </p>
              </a>
            }
          />
          <Project title="Project 4" />
          <Project title="Project 5" />

          {/* ROW 3 */}
          <Project
            title="Previous Portfolio"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://sjacobflaherty.github.io/"
                className="text-center"
              >
                <p>
                  Previous <b>Portfolio Website</b> <br />
                  hosted on github.
                  <br />
                  <br />
                  <b>Features:</b> HTML/JS/CSS, slideshow, "formspree" contact
                  form.
                </p>
              </a>
            }
          />
          <Project
            title="Space Website"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://spaceweb-sjacobflaherty.vercel.app/"
                className="text-center"
              >
                <p>
                  Very simple static website.
                  <br />
                  <br />
                  <b>Features:</b> HTML/JS/CSS, Bootstrap
                </p>
              </a>
            }
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold sm:min-h-[314px] "
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
