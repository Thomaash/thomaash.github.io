<script lang="ts">
  import { getTranslate } from "@tolgee/svelte";

  const { t } = getTranslate();
</script>

<h1
  class="text-[clamp(2.25rem,8vw,4rem)] lg:text-[clamp(4rem,5vw,5rem)] text-balance text-center mt-[14rem] mb-8"
>
  <span class="block text-lg mb-8 md:inline lg:text-[length:inherit] lg:mb-0">
    {$t("greeting_eyebrow")}
  </span>
  {" "}
  <span>
    {#if $t("name_given_pronunciation")}
      <ruby>
        {$t("name_given")}
        <rp>(</rp>
        <rt>{$t("name_given_pronunciation")}</rt>
        <rp>)</rp>
      </ruby>
    {:else}
      {$t("name_given")}
    {/if}
    {" "}
    {#if $t("name_family_pronunciation")}
      <ruby>
        {$t("name_family")}
        <rp>(</rp>
        <rt>{$t("name_family_pronunciation")}</rt>
        <rp>)</rp>
      </ruby>
    {:else}
      {$t("name_family")}
    {/if}
  </span>
</h1>

<p class="text-base mt-8 mb-[14rem] text-center">
  {$t("bio")}
</p>
