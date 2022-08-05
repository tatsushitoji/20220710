import { AppProps } from 'next/app'
import {
  UIProvider,
  EmotionCacheProvider,
  EmotionCacheProviderProps,
} from '@packages/ui'

type MyAppProps = AppProps & EmotionCacheProviderProps

const MyApp = ({ Component, pageProps, emotionCache }: MyAppProps) => (
  <EmotionCacheProvider emotionCache={emotionCache}>
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  </EmotionCacheProvider>
)

export default MyApp
