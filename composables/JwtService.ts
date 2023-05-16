const ID_TOKEN_KEY = "user" as string; //TODO:change name later

/**
 * @description get token form localStorage
 */
export const getToken = (): IUser | null => {
  const user = window.localStorage.getItem(ID_TOKEN_KEY);
  if (user) {
    return JSON.parse(user);
  }
  return null;
};

/**
 * @description save token into localStorage
 * @param token: string
 */
export const saveToken = (token: string): void => {
  window.localStorage.setItem(ID_TOKEN_KEY, token);
};

/**
 * @description remove token form localStorage
 */
export const destroyToken = (): void => {
  window.localStorage.removeItem(ID_TOKEN_KEY);
};

export default { getToken, saveToken, destroyToken };
