import { getToken } from "~/composables/JwtService";


export const useTradingStore = () => {
  interface Resoponse {
    message: string;
    metas: string[];
    results: any;
    succeed: boolean;
  }

  //states

  //getters

  //actions
  const createTradingAccount = async (payload: TradingAcoounts) => {
    const res = await useApi("/v1/my/trading/accounts", {
      method: "POST",
      body: JSON.stringify(payload),
      // send bearer token
        headers: {
            Authorization: `Bearer ${getToken()?.access_token as string}`,
        },
    });
    return res;
  };

  return { createTradingAccount };
};
