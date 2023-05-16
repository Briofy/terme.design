interface PricingCard {
  type: string;
  price: number;
  currency: string;
  period: string;
  subtitle: string;
  features: string[];
  badge?: string;
  tooltip?: string;
  link: string;
}
