declare module 'next-pwa' {
  import { NextConfig } from 'next'

  type RuntimeCachingEntry = {
    urlPattern: string | RegExp
    handler: 'NetworkFirst' | 'CacheFirst' | 'StaleWhileRevalidate'
    options?: {
      cacheName?: string
      expiration?: {
        maxEntries?: number
        maxAgeSeconds?: number
      }
      cacheableResponse?: {
        statuses?: number[]
      }
    }
  }

  type PWAConfig = {
    dest?: string
    register?: boolean
    skipWaiting?: boolean
    disable?: boolean
    buildExcludes?: Array<string | RegExp>
    additionalManifestEntries?: Array<Record<string, string>>
    fallbacks?: Record<string, string>
    runtimeCaching?: RuntimeCachingEntry[]
    [key: string]: unknown
  }

  function withPWA(pwaConfig?: PWAConfig): (nextConfig: NextConfig) => NextConfig
  export default withPWA
}


