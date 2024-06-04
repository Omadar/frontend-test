const Calculator = (() => {
  const formatNumberDecimalWithCommas = (number: number) => {
    const options = {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
    const formatter = new Intl.NumberFormat("en-US", options);
    return formatter.format(number);
  };
  const formatNumberWithCommas = (number: number) => {
    const formatter = new Intl.NumberFormat("en-US");
    return formatter.format(number);
  };
  const totalPrice = (items: any) => {
    const totalPrice = items.reduce(
      (acc: any, curr: any) => acc + curr.price,
      0
    );
    return totalPrice;
  };
  return { formatNumberDecimalWithCommas, formatNumberWithCommas, totalPrice };
})();

export default Calculator;
