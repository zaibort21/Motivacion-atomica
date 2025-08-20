'use client'

import Script from 'next/script'

export function AdSense() {
  // Replace with your actual Google AdSense client ID
  const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX'

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}

interface AdBannerProps {
  slot: string
  width?: number
  height?: number
  responsive?: boolean
}

export function AdBanner({ slot, width = 728, height = 90, responsive = true }: AdBannerProps) {
  const ADSENSE_CLIENT_ID = 'ca-pub-XXXXXXXXXXXXXXXX'

  return (
    <div className="flex justify-center my-8 px-4">
      <div className="max-w-4xl w-full">
        <div className="text-center text-xs text-gray-500 mb-2">Advertisement</div>
        <ins
          className="adsbygoogle"
          style={{
            display: responsive ? 'block' : 'inline-block',
            width: responsive ? '100%' : `${width}px`,
            height: `${height}px`,
          }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={responsive ? 'auto' : undefined}
          data-full-width-responsive={responsive ? 'true' : undefined}
        />
        <Script id={`adsense-${slot}`} strategy="afterInteractive">
          {`
            if (typeof window !== 'undefined') {
              try {
                (adsbygoogle = window.adsbygoogle || []).push({});
              } catch (err) {
                console.log('AdSense error:', err);
              }
            }
          `}
        </Script>
      </div>
    </div>
  )
}