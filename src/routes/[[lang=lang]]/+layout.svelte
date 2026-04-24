<script lang="ts">
  import { Tolgee, TolgeeProvider } from "@tolgee/svelte";
  import { FormatIcu } from "@tolgee/format-icu";
  import LanguageSwitcher from "$lib/components/LanguageSwitcher.svelte";
  import en from "$lib/i18n/en.json";
  import cs from "$lib/i18n/cs.json";
  import de from "$lib/i18n/de.json";

  let { children, data } = $props();

  const tolgee = Tolgee().use(FormatIcu()).init({
    // svelte-ignore state_referenced_locally -- Reactivity is handled via $effect below.
    language: data.lang,
    // Static data is used as the single source of truth for translations.
    // This would make more sense with Tolgee Cloud but it's not yet implemented.
    staticData: { en, cs, de },
  });

  $effect(() => {
    tolgee.changeLanguage(data.lang).catch((error) => {
      // This should be impossible with static data.
      console.error(error, "Failed to change language");
    });
  });
</script>

<LanguageSwitcher lang={data.lang} />
<TolgeeProvider {tolgee}>
  {@render children()}
</TolgeeProvider>
