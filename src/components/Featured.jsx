const feature_list = ["bbc", "cnn", "nbc", "nba", "youtube"];
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <article>
      <SectionTitle text="as featured in" />
      <ul className="flex justify-between">
        {feature_list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
};

export default Featured;
