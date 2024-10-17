<script setup lang="ts">
import { Button } from "@/components/ui/button";

function example() {
  console.log("С ними можно взаимодействовать как с обычными компонентами!");
}
</script>

<template>
  <div class="flex flex-col gap-8 p-8">
    <h1 class="text-3xl font-bold underline">Тест Tailwind</h1>
    <div class="flex flex-col gap-4 max-w-[400px]">
      <Button @click="example">Это кнопка из Shadcn-vue</Button>
      <Button variant="destructive">Красная кнопка</Button>
      <Button variant="outline">Обведённая</Button>
    </div>

    <p>Подробнее в документации:</p>
    <a href="https://www.shadcn-vue.com/docs/components/button.html"
      >https://www.shadcn-vue.com/docs/components/button.html</a
    >
  </div>
</template>
