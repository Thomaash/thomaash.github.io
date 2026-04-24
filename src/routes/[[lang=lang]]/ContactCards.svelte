<script lang="ts">
  import { getTranslate } from "@tolgee/svelte";
  import Card from "$lib/components/Card.svelte";

  const { t } = getTranslate();

  const cards = [
    {
      headingKey: "email_heading",
      descKey: "email_desc",
      labelKey: "email_label",
      href: "mailto:tomas@vycital.eu",
    },
    {
      headingKey: "github_heading",
      descKey: "github_desc",
      labelKey: "github_label",
      href: "https://github.com/Thomaash",
      rel: "noopener me",
    },
    {
      headingKey: "linkedin_heading",
      descKey: "linkedin_desc",
      labelKey: "linkedin_label",
      href: "https://www.linkedin.com/in/tomas-vycital",
      rel: "noopener me",
    },
    {
      headingKey: "mastodon_heading",
      descKey: "mastodon_desc",
      labelKey: "mastodon_label",
      href: "https://toot.community/@tomina",
      rel: "noopener me",
    },
    {
      headingKey: "bluesky_heading",
      descKey: "bluesky_desc",
      labelKey: "bluesky_label",
      href: "https://bsky.app/profile/vycital.eu",
      rel: "noopener me",
    },
  ];
</script>

<div
  class="grid grid-cols-[repeat(auto-fit,minmax(16em,1fr))] gap-6 max-w-[60em] my-8 mx-auto"
>
  {#each cards as card}
    <Card
      heading={$t(card.headingKey)}
      description={$t(card.descKey)}
      href={card.href}
      label={$t(card.labelKey)}
      rel={card.rel}
    />
  {/each}
</div>
