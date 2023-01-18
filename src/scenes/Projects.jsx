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
          Trained in many coding languages, frameworks, libraries, and methods:
          Pthyon, C#, HTML/CSS/JS, React, .NET Core, Docker, Bootstrap,
          Tailwind, Pycharm, VS, CRUD, REST api and so much more.
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
            Deep
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
            title="Project 2"
            subtitle={
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.w3schools.com"
                className="text-center"
              >
                <p>
                  <b>Features:</b> REACT jsx, light/dark mode, dynamic charts,
                  FAQ page, Calendar integration, Material UI, Nivo Charts,
                  Formik, Yup, FullCalendar, Data Grid.
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
                className="text-left"
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
                className="text-left"
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
          <Project title="Project 6" />

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
