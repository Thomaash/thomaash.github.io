<script lang="ts">
  import type { PageData } from "./$types";
  import { getLocale, getLangUrl } from "$lib/i18n";
  import { getTranslate } from "@tolgee/svelte";

  let { data }: { data: PageData } = $props();

  const { t } = getTranslate();

  let pageUrl = $derived(getLangUrl(data.lang));
  let locale = $derived(getLocale(data.lang));
</script>

<svelte:head>
  <title>{$t("meta_title")}</title>

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
    inLanguage: data.lang,
    "@context": "https://schema.org",
  })}</script>`}
</svelte:head>

<h1 class="text-[4rem] my-[14rem] mx-auto max-w-[30em] text-center">
  {@html $t("greeting")}
</h1>

<p class="text-base my-8 mx-auto max-w-[30em]">
  {$t("bio")}
</p>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(16em,1fr))] gap-6 max-w-[60em] my-8 mx-auto"
>
  <div
    class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
  >
    <h2 class="text-xl font-semibold mt-0 mb-2">{$t("email_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">{$t("email_desc")}</p>
    <a class="mt-auto" rel="noopener" href="mailto:tomas@vycital.eu"
      >{$t("email_label")}</a
    >
  </div>
  <div
    class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
  >
    <h2 class="text-xl font-semibold mt-0 mb-2">{$t("mastodon_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {$t("mastodon_desc")}
    </p>
    <a class="mt-auto" rel="noopener me" href="https://toot.community/@tomina"
      >{$t("mastodon_label")}</a
    >
  </div>
  <div
    class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
  >
    <h2 class="text-xl font-semibold mt-0 mb-2">{$t("bluesky_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {$t("bluesky_desc")}
    </p>
    <a
      class="mt-auto"
      rel="noopener me"
      href="https://bsky.app/profile/vycital.eu">{$t("bluesky_label")}</a
    >
  </div>
  <div
    class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
  >
    <h2 class="text-xl font-semibold mt-0 mb-2">{$t("github_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {$t("github_desc")}
    </p>
    <a class="mt-auto" rel="noopener me" href="https://github.com/Thomaash"
      >{$t("github_label")}</a
    >
  </div>
  <div
    class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
  >
    <h2 class="text-xl font-semibold mt-0 mb-2">{$t("linkedin_heading")}</h2>
    <p class="text-base m-0 mb-4 max-w-none flex-1">
      {$t("linkedin_desc")}
    </p>
    <a
      class="mt-auto"
      rel="noopener me"
      href="https://www.linkedin.com/in/tomas-vycital">{$t("linkedin_label")}</a
    >
  </div>
</div>
