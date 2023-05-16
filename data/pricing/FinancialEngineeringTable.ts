export const FinancialEngineeringTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Financial Engineering",
      value: "financial",
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
      financial: "Risk Management",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      financial: {
        tooltipText:
          "a simple Money Management from support with a drawer (help center)",
        text: "Money Management",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      financial: {
        tooltipText:
          "a simple tooltip from Trading Plan without a drawer (help center)",
        text: "Trading Plan",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      financial: {
        tooltipText:
          "a simple tooltip from Trading Plan without a drawer (help center)",
        text: "Cash Flow",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      financial: "Portfolio Management",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      general: "Analytics & Reports",
      pro: "Basic",
      advance: "Full Report",
      corporate: "Full Report + AI Recommendations",
    },
  ];

  return { headers, items };
};
