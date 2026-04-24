<script lang="ts">
  import type { PageData } from "./$types";
  import { getLocale, getLangUrl } from "$lib/i18n";
  import PageHead from "./PageHead.svelte";
  import Hero from "./Hero.svelte";
  import ContactCards from "./ContactCards.svelte";

  let { data }: { data: PageData } = $props();

  let pageUrl = $derived(getLangUrl(data.lang));
  let locale = $derived(getLocale(data.lang));
</script>

<PageHead {pageUrl} {locale} lang={data.lang} />
<Hero />
<ContactCards />
