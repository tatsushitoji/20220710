import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from './createEmotionCache'

export type EmotionCacheProviderProps = {
  emotionCache?: EmotionCache | undefined
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export const EmotionCacheProvider: React.FC<EmotionCacheProviderProps> = ({
  emotionCache = clientSideEmotionCache,
  children,
}) => <CacheProvider value={emotionCache}>{children}</CacheProvider>
