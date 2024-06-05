type sizeProps = {
  width: number;
  length: number;
  height: number;
};
const Size = (() => {
  const sizeValue = (value: sizeProps) => {
    return value?.width + " x " + value?.length + " x " + value?.height + " mm";
  };
  return { sizeValue };
})();

export default Size;
