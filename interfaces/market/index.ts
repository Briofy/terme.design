interface Product {
  title: string;
  slogan: string;
  logo?: null | string;
  cover?: null | string;
  type: number;
  introduction: string;
  description: string;
  categories: string[];
  tags: string[];
  platforms: string[];
  markets: string[];
}
interface Types {
  name: string;
  value: number;
}
interface ICategory {
  uuid: string;
  icon: string;
  id: string;
  slug: string;
  title: string;
  type: string;
}
interface IMarkets {
  id: string;
  name: string;
  slug: string;
  icon: null | string;
  cover: null | string;
  status: number;
}

interface IBroker {
  uuid: string;
  name: string;
  logo: null | string;
  website: null | string;
  description: null | string;
  is_dealing_desk: boolean;
  is_stp: boolean;
  is_ecn: boolean;
  is_market_maker: boolean;
  is_ndd: boolean;
  is_dma: boolean;
  is_prime_of_prime: boolean;
  has_swap_free: boolean;
  has_demo_account: boolean;
  has_mobile_trading: boolean;
  has_web_trading: boolean;
  status: number;
}

interface IPlatforms {
  id: string;
  title: string;
  slug: null | string;
  icon: null | string;
  cover: null | string;
  description: null | string;
  content: null | string;
  url: null | string;
  privacy_policy: null | string;
  terms_of_use: null | string;
  address: null | string;
  permissions: null | string;
  oss: null | string;
  status: number;
}
