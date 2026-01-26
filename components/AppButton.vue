<script setup lang="ts">
const props = defineProps<{
  label?: string;
}>();

const emit = defineEmits<{
  click: [];
}>();

const buttonDisplayText = computed(() => {
  return props.label || "Standard Text";
});
</script>

<template>
  <button
    type="button"
    class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
    @click="emit('click')"
  >
    <slot>{{ buttonDisplayText }}</slot>
  </button>
</template>
