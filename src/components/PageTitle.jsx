import PropTypes from "prop-types";

const PageTitle = ({ line1, line2 }) => {
  return (
    <div className="flex flex-col mb-4">
      <p className="w-full text-4xl sm:text-6xl lg:text-8xl font-bold uppercase">
        {line1}
      </p>
      <p className="w-full text-4xl sm:text-6xl lg:text-8xl font-bold uppercase text-black/10 dark:text-white/10">
        {line2}
      </p>
    </div>
  );
};

PageTitle.propTypes = {
  line1: PropTypes.string.isRequired,
  line2: PropTypes.string.isRequired,
};

export default PageTitle;
