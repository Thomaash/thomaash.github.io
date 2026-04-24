<script lang="ts">
  let {
    heading,
    description,
    href,
    label,
    rel = "noopener",
  }: {
    heading: string;
    description: string;
    href: string;
    label: string;
    rel?: string;
  } = $props();
</script>

<div
  class="bg-white/8 shadow-[0_2px_8px_rgba(0,0,0,0.2)] p-6 flex flex-col rounded-lg"
>
  <h2 class="text-xl font-semibold mt-0 mb-2">{heading}</h2>
  <p class="text-base m-0 mb-4 max-w-none flex-1">{description}</p>
  <a class="mt-auto" {rel} {href}>{label}</a>
</div>
