import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Mermaid from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Tabs from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import { defineAsyncComponent } from "vue";
import { LoadingIcon } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.16_vuepress@2.0.0-rc.2/node_modules/vuepress-shared/lib/client/index.js";
import { injectSandpackConfig } from "C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Tabs", Tabs);
    injectSandpackConfig(app);
    app.component(
  "SandPack",
  defineAsyncComponent({
    loader: () => import("C:/Users/cruld/Desktop/my-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.16_markdown-it@14.0.0_mermaid@10.7.0_sandpack-vue3@3.1.9_vuepress@2.0.0-rc.2/node_modules/vuepress-plugin-md-enhance/lib/client/components/SandPack.js"),
    loadingComponent: LoadingIcon,
  })
);
  },
  setup: () => {
useHint();
  }
});
