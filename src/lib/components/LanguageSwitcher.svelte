<script lang="ts">
  let { lang }: { lang: string } = $props();
</script>

<nav class="fixed top-4 right-4" aria-label="Language">
  <a
    class="no-underline text-2xl ml-2"
    href="/cs/"
    lang="cs"
    aria-label="Čeština"
    aria-current={lang === "cs" ? "page" : undefined}>🇨🇿</a
  >
  <a
    class="no-underline text-2xl ml-2"
    href="/"
    lang="en"
    aria-label="English"
    aria-current={lang === "en" ? "page" : undefined}>🇬🇧</a
  >
  <a
    class="no-underline text-2xl ml-2"
    href="/de/"
    lang="de"
    aria-label="Deutsch"
    aria-current={lang === "de" ? "page" : undefined}>🇩🇪</a
  >
</nav>
