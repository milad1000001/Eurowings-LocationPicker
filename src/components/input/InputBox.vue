<template>
  <div class="input">
    <div>
      <slot name="prepend" />
    </div>
    <form>
      <label
        aria-label="search-icon"
        title="icon"
        :for="placeHolder" />
      <input
        aria-label="search"
        name="search"
        :value="modelValue"
        :id="id"
        class="w-full px-4 outline-none"
        type="text"
        :aria-placeholder="placeHolder"
        :title="id"
        :placeholder="placeHolder"
        @input="$emit('update:model-value', $event.target.value)" />
    </form>
  </div>
</template>

<script setup lang="ts">

export interface IProps{
  isOrigin?:boolean;
  modelValue:string;
  placeHolder:string;
  id:string;
}

defineEmits<{(e: 'update:model-value'): void}>();

withDefaults(defineProps<IProps>(), {
  isOrigin: false,
});

</script>
<style lang="postcss" scoped>
.input{
  @apply flex items-center border py-3 px-4 rounded-lg;

  :deep(.icon){
    @apply text-gray-400;
}

  &:hover, &:focus{
    :deep(.icon){
          @apply text-blue-400;
    }
  }

  &:focus-within{
    @apply border border-blue-400;

    :deep(.icon){
          @apply text-blue-400;
    }
  }
}

</style>
