export const ProductsTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Products",
      value: "products",
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
      products: "Supply Demand",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      products: "Algo Portfolio",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      products: {
        tooltipText:
          "a simple tooltip from Trend Friend with a drawer (help center)",
        text: "Trend Friend",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      products: {
        tooltipText:
          "a simple tooltip from Dashboard X without a drawer (help center)",
        text: "Dashboard X",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      products: {
        tooltipText:
          "a simple tooltip from Dashboard X without a drawer (help center)",
        text: "Tchimoku",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "rex-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
  ];

  return { headers, items };
};
