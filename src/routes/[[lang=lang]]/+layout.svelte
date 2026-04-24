<script lang="ts">
  import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
  let { children, data } = $props();
</script>

<LanguageSwitcher lang={data.lang} />
{@render children()}
