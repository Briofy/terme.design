export const CloudInfraTable = () => {
  const headers: ITableHeader[] = [
    {
      text: "Cloud Infrastructure",
      value: "cloudInfra",
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
      cloudInfra: "Meta Trader 4",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      cloudInfra: "Meta Trader 5",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      cloudInfra: "StrategyQuant X",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      cloudInfra: "MetaTrader 4/5 SQX",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      cloudInfra: "Custom Cloud Images",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
  ];

  return { headers, items };
};
