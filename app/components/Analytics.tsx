'use client'

import Script from 'next/script'

export function Analytics() {
  // Replace with your actual Google Analytics ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  )
}

// Analytics tracking functions
export const trackEvent = (eventName: string, parameters: any = {}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters)
  }
}

export const trackPurchase = (value: number, currency: string, items: any[]) => {
  trackEvent('purchase', {
    transaction_id: Date.now().toString(),
    value,
    currency,
    items,
  })
}

export const trackAddToCart = (item: any) => {
  trackEvent('add_to_cart', {
    currency: 'USD',
    value: item.price,
    items: [{
      item_id: item.id,
      item_name: item.title,
      item_category: item.category,
      quantity: 1,
      price: item.price,
    }],
  })
}