<script lang="ts">
  import type { PageData } from "./$types";
  import { t, getLocale, getLangUrl } from "$lib/i18n";

  let { data }: { data: PageData } = $props();

  let lang = $derived(data.lang);
  let pageUrl = $derived(getLangUrl(lang));
  let locale = $derived(getLocale(lang));
</script>

<svelte:head>
  <title>{t(lang, "meta_title")}</title>

  <link
    rel="icon"
    href="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
    type="image/x-icon"
  />
  <link rel="canonical" href={pageUrl} />

  <link rel="alternate" hreflang="en" href="http://www.vycital.eu/" />
  <link rel="alternate" hreflang="cs" href="http://www.vycital.eu/cs/" />
  <link rel="alternate" hreflang="de" href="http://www.vycital.eu/de/" />
  <link rel="alternate" hreflang="x-default" href="http://www.vycital.eu/" />

  <meta property="og:description" content={t(lang, "meta_description")} />
  <meta
    property="og:image"
    content="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
  />
  <meta property="og:locale" content={locale} />
  <meta property="og:site_name" content="vycital.eu" />
  <meta property="og:title" content={t(lang, "meta_title")} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={pageUrl} />

  <meta property="twitter:card" content="summary" />
  <meta property="twitter:description" content={t(lang, "meta_description")} />
  <meta
    property="twitter:image"
    content="https://www.gravatar.com/avatar/576687db7917f8e9a28073d225b7a64f?s=600"
  />
  <meta property="twitter:title" content={t(lang, "meta_title")} />
  <meta property="twitter:url" content={pageUrl} />

  {@html `<script type="application/ld+json">${JSON.stringify({
    "@type": "WebSite",
    headline: t(lang, "meta_title"),
    url: pageUrl,
    name: "vycital.eu",
    inLanguage: lang,
    "@context": "https://schema.org",
  })}</script>`}
</svelte:head>

<h1 class="text-[4rem] my-[14rem] mx-auto max-w-[30em] text-center">
  {t(lang, "greeting")}
  <ruby class="whitespace-nowrap"
    >Tomáš<rp>(</rp><rt class="text-base">ˈtomaːʃ</rt><rp>)</rp></ruby
  >
  <ruby class="whitespace-nowrap"
    >Vyčítal<rp>(</rp><rt class="text-base">ˈvɪtʃiːtal</rt><rp>)</rp></ruby
  >
</h1>

<p class="text-base my-8 mx-auto max-w-[30em]">
  {t(lang, "bio")}
</p>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(16em,1fr))] gap-6 max-w-[60em] my-8 mx-auto"
>
  <div class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col">
    <h2 class="text-[1.1rem] mt-0 mb-2">{t(lang, "email_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">{t(lang, "email_desc")}</p>
    <a class="mt-auto" rel="noopener" href="mailto:tomas@vycital.eu"
      >{t(lang, "email_label")}</a
    >
  </div>
  <div class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col">
    <h2 class="text-[1.1rem] mt-0 mb-2">{t(lang, "mastodon_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {t(lang, "mastodon_desc")}
    </p>
    <a class="mt-auto" rel="noopener me" href="https://toot.community/@tomina"
      >{t(lang, "mastodon_label")}</a
    >
  </div>
  <div class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col">
    <h2 class="text-[1.1rem] mt-0 mb-2">{t(lang, "bluesky_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {t(lang, "bluesky_desc")}
    </p>
    <a
      class="mt-auto"
      rel="noopener me"
      href="https://bsky.app/profile/vycital.eu">{t(lang, "bluesky_label")}</a
    >
  </div>
  <div class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col">
    <h2 class="text-[1.1rem] mt-0 mb-2">{t(lang, "github_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {t(lang, "github_desc")}
    </p>
    <a class="mt-auto" rel="noopener me" href="https://github.com/Thomaash"
      >{t(lang, "github_label")}</a
    >
  </div>
  <div class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col">
    <h2 class="text-[1.1rem] mt-0 mb-2">{t(lang, "linkedin_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {t(lang, "linkedin_desc")}
    </p>
    <a
      class="mt-auto"
      rel="noopener me"
      href="https://www.linkedin.com/in/tomas-vycital"
      >{t(lang, "linkedin_label")}</a
    >
  </div>
</div>
