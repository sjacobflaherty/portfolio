const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 object-contain h-8 w-8"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 object-contain h-8 w-8"
        href="https://github.com/sjacobflaherty"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github-mark-white.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 object-contain h-8 w-8"
        href="https://www.facebook.com/jacob.flaherty.50/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
