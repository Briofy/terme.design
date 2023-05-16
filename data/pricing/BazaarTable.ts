export const BazaarTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Bazaar",
      value: "bazaar",
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
      bazaar: "Badge",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "Profile",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "Copy Protector",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "White Label",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "IB Integration",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "Live Chart",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "Live Stream",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bazaar: "Social Integrations",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
  ];

  return { headers, items };
};
