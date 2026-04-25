<script>
  import { onNavigate } from "$app/navigation";
  import "../app.css";

  let { children } = $props();

  onNavigate((nav) => {
    if (nav.to?.route.id?.startsWith("/(redirect)/")) return;
    if (typeof document.startViewTransition !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await nav.complete;
      });
    });
  });
</script>

<div class="px-4">
  {@render children()}
</div>

<style>
  @keyframes view-transition-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes view-transition-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  :global(::view-transition-old(root)) {
    animation: 180ms ease-out both view-transition-fade-out;
  }

  :global(::view-transition-new(root)) {
    animation: 220ms ease-in both view-transition-fade-in;
  }
</style>
