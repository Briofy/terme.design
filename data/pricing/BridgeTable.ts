export const BridgeTableData = () => {
  const headers: ITableHeader[] = [
    {
      text: "Bridge",
      value: "bridge",
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
      bridge: "Realtime Connection",
      pro: { icon: "mdi-check", color: "green-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bridge: "Trading Framework",
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-check", color: "green-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bridge: {
        tooltipText:
          "a simple tooltip from Custom Cluster with a drawer (help center)",
        text: "Custom Cluster",
        hasDrawer: true,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bridge: {
        tooltipText:
          "a simple tooltip from ML Processing without a drawer (help center)",
        text: "ML Processing",
        hasDrawer: false,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
    {
      bridge: {
        tooltipText:
          "a simple tooltip from Business Logics (FaaS) without a drawer (help center)",
        text: "Business Logics (FaaS)",
        hasDrawer: false,
      },
      pro: { icon: "mdi-close", color: "red-500" },
      advance: { icon: "mdi-close", color: "red-500" },
      corporate: { icon: "mdi-check", color: "green-500" },
    },
  ];

  return { headers, items };
};
