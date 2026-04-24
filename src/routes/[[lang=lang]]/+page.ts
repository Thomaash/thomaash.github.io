import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  return {
    lang: params.lang ?? "en",
  };
};

export function entries() {
  return [{ lang: "cs" }, { lang: "de" }];
}
