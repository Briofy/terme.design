export const OpenApisTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Open APIs",
      value: "openApis",
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
      openApis: "Daily Credits",
      pro: "100,000",
      advance: "500,000",
      corporate: "1,000,000",
    },
    {
      openApis: "Request Per Second",
      pro: "5",
      advance: "10",
      corporate: "20",
    },
    {
      openApis: "Events",
      pro: "1000",
      advance: "3000",
      corporate: "10,000",
    },
    {
      openApis: {
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
    {
      openApis: "Market Data",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
  ];

  return { headers, items };
};
