<script lang="ts">
  import { getTranslate } from "@tolgee/svelte";

  let {
    pageUrl,
    locale,
    lang,
  }: {
    pageUrl: string;
    locale: string;
    lang: string;
  } = $props();

  const { t } = getTranslate();
</script>

<svelte:head>
  <title>{$t("meta_title")}</title>

  <link
    rel="icon"
    href="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
    type="image/x-icon"
  />
  <link rel="canonical" href={pageUrl} />

  <link rel="alternate" hreflang="en" href="https://www.vycital.eu/" />
  <link rel="alternate" hreflang="cs" href="https://www.vycital.eu/cs/" />
  <link rel="alternate" hreflang="de" href="https://www.vycital.eu/de/" />
  <link rel="alternate" hreflang="x-default" href="https://www.vycital.eu/" />

  <meta property="og:description" content={$t("meta_description")} />
  <meta
    property="og:image"
    content="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
  />
  <meta property="og:locale" content={locale} />
  <meta property="og:site_name" content="vycital.eu" />
  <meta property="og:title" content={$t("meta_title")} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={pageUrl} />

  <meta property="twitter:card" content="summary" />
  <meta property="twitter:description" content={$t("meta_description")} />
  <meta
    property="twitter:image"
    content="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
  />
  <meta property="twitter:title" content={$t("meta_title")} />
  <meta property="twitter:url" content={pageUrl} />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@type": "WebSite",
    headline: $t("meta_title"),
    url: pageUrl,
    name: "vycital.eu",
    inLanguage: lang,
    "@context": "https://schema.org",
  })}</script>`}
</svelte:head>
