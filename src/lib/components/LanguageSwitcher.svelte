<script lang="ts">
  let { lang }: { lang: string } = $props();
</script>

<nav aria-label="Language">
  <a href="/cs/" lang="cs" aria-label="Čeština" aria-current={lang === 'cs' ? 'page' : undefined}>🇨🇿</a>
  <a href="/" lang="en" aria-label="English" aria-current={lang === 'en' ? 'page' : undefined}>🇬🇧</a>
  <a href="/de/" lang="de" aria-label="Deutsch" aria-current={lang === 'de' ? 'page' : undefined}>🇩🇪</a>
</nav>

<style>
  nav {
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
  a {
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }
</style>
