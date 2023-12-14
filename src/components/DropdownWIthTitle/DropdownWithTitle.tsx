import { useSpring, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";
import { PlusButton } from "../PlusButton/PlusButton";
import { getHeight } from "../../utils/functions/getHeight";

export function DropdownWithTitle({
  style,
  title,
  titleStyle,
  titleClass,
  listStyle,
  listClass,
  object,
  watcher,
}) {
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }));
  const element = useRef(null);
  const height = useRef(0);
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    height.current = getHeight(element.current);
    toggle
      ? api.start({
          from: {
            height: height.current,
          },
          to: {
            height: 0,
          },
        })
      : api.start({
          from: {
            height: 0,
          },
          to: {
            height: height.current,
          },
        });
    setToggle(!toggle);
  };

  useEffect(() => {
    height.current = getHeight(element.current);
    element.current.style.height = "0px";
  }, []);

  useEffect(() => {
    if (toggle && element != null) {
      if (element.current.clientHeight != 0) {
        const previousHeight = height.current;
        height.current = getHeight(element.current);
        api.start({
          from: {
            height: previousHeight,
          },
          to: {
            height: height.current,
          },
        });
      }
    }
  }, [watcher]);

  return (
    <section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `max-content max-content`,
          alignItems: "center",
          justifyContent: "center",
          gap: "1em",
          ...style,
        }}
      >
        <h3
          className={titleClass}
          style={{
            color: "white",
            textAlign: "center",
            justifySelf: "end",
            ...titleStyle,
          }}
        >
          {title}
        </h3>

        <PlusButton clickEvent={handleClick} />
      </div>
      <animated.div style={{ overflow: "hidden", ...springs }} ref={element}>
        <ul className={listClass} style={listStyle}>
          {object}
        </ul>
      </animated.div>
    </section>
  );
}
