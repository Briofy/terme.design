export const AITableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Artificial Intelligence",
      value: "aiTable",
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
      aiTable: "AI Assistant",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "AI Coaching",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "Robustness Testing",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "Monte Carlo Tests",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "Walk Forward Optimize",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "Over fit Protection",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      aiTable: "Fitness Guarantee",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: "> 0.8",
      corporate: "> 0.9",
    },
    {
      aiTable: "Correlation",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: "Up to 20 Algorithms/Basket",
      corporate: "Up to 100 Algorithms/Basket",
    },
  ];

  return { headers, items };
};
