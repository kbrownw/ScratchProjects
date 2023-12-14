export const getHeight = (element) => {
  const currentHeight = element.clientHeight;
  element.style.height = "auto";
  let fullHeight = element.clientHeight;
  element.style.height = currentHeight + "px";

  return fullHeight;
};
