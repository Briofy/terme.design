interface ITableHeader {
  text: string;
  value: string;
  align?: string;
  sortable?: boolean;
}

interface ITableItem {
  text: string;
  icon?: string;
  innerTexts: string[];
}
