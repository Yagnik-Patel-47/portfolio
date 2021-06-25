import { Children, FC } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail: FC = ({ children }) => {
  const items = Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 20 },
    delay: 200,
  });

  return (
    <>
      {trail.map(({ ...style }, index) => (
        <a.div key={index} style={style}>
          {items[index]}
        </a.div>
      ))}
    </>
  );
};

export default Trail;
