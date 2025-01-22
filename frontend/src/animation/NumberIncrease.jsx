import { useSpring, animated } from "react-spring";

const NumberIncrease = ({mynumber, extra}) => {
  const props = useSpring({
    from: { number: 0 },
    to: { number: Number(mynumber) },
    config: { duration: 9000 },
  });

  return (
    <animated.div>
      {props.number.to((val) => `${val.toFixed(0)}${extra}`)}
    </animated.div>
  );
};

export default NumberIncrease;