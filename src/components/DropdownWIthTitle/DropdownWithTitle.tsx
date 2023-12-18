import { useSpring, animated } from "@react-spring/web";
import { ReactNode, useEffect, useRef, useState } from "react";
import { PlusButton } from "../PlusButton/PlusButton";
import { getHeight } from "../../utils/functions/getHeight";

interface Props {
  style?: object;
  title: string;
  titleStyle?: object;
  titleClass?: string;
  listStyle?: object;
  listClass?: string;
  object?: ReactNode;
  watcher?: unknown;
}

export function DropdownWithTitle({
  style,
  title,
  titleStyle,
  titleClass,
  listStyle,
  listClass,
  object,
  watcher,
}: Props) {
  const [springs, api] = useSpring(() => ({
    from: { height: 0 },
  }));
  const element = useRef<HTMLDivElement>(null!);
  const height = useRef<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
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
