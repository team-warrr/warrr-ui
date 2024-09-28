import { Context, useContext } from "react";

const useSafeContext = <T>(context: Context<T | null>, displayName: string): T => {
  const value = useContext(context);

  if (!value) {
    throw new Error(`${displayName}는 주어진 Provider 내부에서만 사용되어야 합니다.`);
  }

  return value;
};

export default useSafeContext;
