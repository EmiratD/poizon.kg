interface Istage {
  text: string;
  Svg: () => JSX.Element;
}

const Stages = ({ text, Svg }: Istage) => {
  return (
    <div className="stages">
      <div className="stages-ellipse">
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" y="1" width="28" height="28" rx="14" fill="white" />
          <rect
            x="1"
            y="1"
            width="28"
            height="28"
            rx="14"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="stages-svg">
        <Svg />
      </div>
      <div className="stages-text">{text}</div>
    </div>
  );
};
export default Stages;
