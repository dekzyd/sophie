/* eslint-disable react/prop-types */
const SectionTitle = ({ text }) => {
  return (
    <div className="pb-5">
      <h2 className="text-3xl font-medium capitalize text-center mt-2">
        {text}
      </h2>
    </div>
  );
};

export default SectionTitle;
