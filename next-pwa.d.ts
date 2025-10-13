declare module 'next-pwa' {
  import { NextConfig } from 'next'

type PWAConfig = {
  dest?: string
  register?: boolean
  skipWaiting?: boolean
  disable?: boolean
  buildExcludes?: Array<string | RegExp>   
  [key: string]: unknown
}


  function withPWA(pwaConfig?: PWAConfig): (nextConfig: NextConfig) => NextConfig
  export default withPWA
}
