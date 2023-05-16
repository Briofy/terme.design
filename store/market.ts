export const useMarketStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states
  const categories = useState<ICategory[]>("categories", () => []);
  const markets = useState<IMarkets[]>("markets", () => []);
  const platforms = useState<IPlatforms[]>("platforms", () => []);
  const brokers = useState<IBroker[]>("brokers", () => []);

  //getters

  //actions
  const fetchCategories = async () => {
    const { data }: { data: any } = await useApi("/v1/categories");
    categories.value = data?.results as ICategory[];
  };
  const fetchMarkets = async () => {
    const { data }: { data: any } = await useApi("/v1/market/markets");
    markets.value = data?.results as IMarkets[];
  };
  const fetchPlatforms = async () => {
    const { data }: { data: any } = await useApi("/v1/market/platforms");
    platforms.value = data?.results as IPlatforms[];
  };
  const fetchBrokers = async () => {
    const { data }: { data: any } = await useApi("/v1/market/brokers");
    brokers.value = data?.results as IBroker[];
    console.log("brokers", brokers.value);
  };

  return {
    categories,
    fetchCategories,
    markets,
    fetchMarkets,
    platforms,
    fetchPlatforms,
    brokers,
    fetchBrokers,
  };
};
