export const AlgoTradeTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Algo Trading",
      value: "algoTrading",
    },
    {
      text: "Professional Edition",
      value: "pro",
    },
    {
      text: "Advance Edition",
      value: "advance",
    },
    {
      text: "Corporate Edition",
      value: "corporate",
    },
  ];

  const items = [
    {
      algoTrading: "Optimize Parameters",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Back Testing",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Robustness Testing",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Monte Carlo Tests",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Walk Forward Optimize",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Over fit Protection",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      algoTrading: "Fitness Guarantee",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: "> 0.8",
      corporate: "> 0.9",
    },
    {
      algoTrading: "Correlation",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: "Up to 20 Algorithms/Basket",
      corporate: "Up to 100 Algorithms/Basket",
    },
  ];

  return { headers, items };
};
