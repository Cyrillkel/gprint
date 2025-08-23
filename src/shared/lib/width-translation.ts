import { getTranslations } from "next-intl/server";

type ActionWithTranslations<T extends unknown[], R> = (
  t: Awaited<ReturnType<typeof getTranslations>>,
  ...args: T
) => Promise<R>;

export function withTranslations<T extends unknown[], R>(
  action: ActionWithTranslations<T, R>
) {
  return async (...args: T): Promise<R> => {
    const t = await getTranslations();
    return action(t, ...args);
  };
}
