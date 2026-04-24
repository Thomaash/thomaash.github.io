<script lang="ts">
  import { getTranslate } from "@tolgee/svelte";

  const { t } = getTranslate();
</script>

<h1 class="text-[4rem] mt-[14rem] mb-8 text-center">
  {@html $t("greeting")}
</h1>

<p class="text-base mt-8 mb-[14rem] text-center">
  {$t("bio")}
</p>
