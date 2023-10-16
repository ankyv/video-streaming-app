import { ShimmerVideoCard } from "./index";
import "../styles/ShimmerSection.css";

const ShimmerSection = () => {
  return (
    <div className="shimmer-section">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <ShimmerVideoCard key={index} />
        ))}
    </div>
  );
};

export default ShimmerSection;
