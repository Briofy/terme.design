export const GeneralTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "General",
      value: "general",
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
      general: "Live Connection",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      general: "Data Priority",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      general: {
        tooltipText:
          "a simple tooltip from support with a drawer (help center)",
        text: "Support",
        hasDrawer: true,
      },
      pro: ["Ticket", "Email (24 Hours)"],
      advance: ["Ticket", "Email", "Phone (8 Hours)"],
      corporate: ["Ticket", "Email", "Phone (>One Hour)"],
    },
    {
      general: {
        tooltipText:
          "a simple tooltip from markets without a drawer (help center)",
        text: "Markets",
        hasDrawer: true,
      },
      pro: ["Forex ", "Stocks", "Crypto"],
      advance: ["Forex ", "Stocks", "Crypto", "Commodities", "Indices"],
      corporate: [
        "Forex ",
        "Stocks",
        "Crypto",
        "Commodities",
        "Indices",
        "Futures",
        "Bond",
        "Options",
      ],
    },
  ];

  return { headers, items };
};
