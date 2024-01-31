---
title: 主要功能与配置演示
index: false
icon: laptop-code
category:
  - 使用指南
---

::: sandpack#vue Vue 示例

@file /src/App.vue

```vue
<script setup>
import { ref } from "vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>
```

:::

```mermaid

graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;

```
