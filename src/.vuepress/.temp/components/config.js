import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/@vueuse+core@10.7.2_vue@3.4.15/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";
import BackToTop from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
