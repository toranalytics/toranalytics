import Script from "next/script"
import { CONFIG } from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GTM-5XX526WH`}
          <!-- ${CONFIG.googleAnalytics.config.measurementId} -->
        />
        <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-5XX526WH', {
              page_path: window.location.pathname,
            });`}
        </Script>
      </>
    )}
  </>
)

export default Scripts
