import createCache from "@emotion/cache";

type InsertionPoint = HTMLElement | null;

type CreateCacheOptions = Parameters<typeof createCache>[0];

const isBrowser = typeof document !== "undefined";

const baseOptions: CreateCacheOptions = { key: "mui-style" };

export const createEmotionCache = (insertionPoint?: InsertionPoint) => {
  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    ) as HTMLElement; // FIXME: Type 'null' is not assignable to type 'HTMLElement'

    return createCache({
      ...baseOptions,
      insertionPoint: emotionInsertionPoint,
    });
  }

  return createCache(baseOptions);
};
