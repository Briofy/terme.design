import { werify } from "@werify/id-ts";

export const useAuth = async () => {
  const baseURL = useRuntimeConfig().public.baseUrl;

  const auth = werify();
  auth.config.baseURL = baseURL;
  return { auth };
};
