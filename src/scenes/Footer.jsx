import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-54 bg-blue pt-4 pb-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Jacob Flaherty
          </p>
          <p className="font-playfair text-md text-white text-right">
            ©2023 Flaherty. All Rights Reserved. <br />
            Created using React, Tailwind, Formsubmit, and Git.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
