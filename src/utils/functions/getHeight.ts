type GetHeight = (element: HTMLElement) => number;

export const getHeight: GetHeight = (element) => {
  const currentHeight = element.clientHeight;
  element.style.height = "auto";
  let fullHeight = element.clientHeight;
  element.style.height = currentHeight + "px";

  return fullHeight;
};
