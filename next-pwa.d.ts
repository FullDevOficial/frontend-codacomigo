declare module 'next-pwa' {
  import { NextConfig } from 'next'

  type PWAConfig = {
    dest?: string
    register?: boolean
    skipWaiting?: boolean
    disable?: boolean
    buildExcludes?: Array<string | RegExp>
    additionalManifestEntries?: Array<Record<string, string>>
    fallbacks?: Record<string, string>
    runtimeCaching?: Array<Record<string, any>>
    [key: string]: unknown
  }

  function withPWA(pwaConfig?: PWAConfig): (nextConfig: NextConfig) => NextConfig
  export default withPWA
}

