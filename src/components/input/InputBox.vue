<template>
  <div class="input">
    <div>
      <slot name="prepend" />
    </div>
    <form>
      <label
        aria-label="search-icon"
        title="icon"
        :for="id" />
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
        @input="debounceRequest" />
    </form>
  </div>
</template>

<script setup lang="ts">
import debounce from 'lodash.debounce';

export interface IProps{
  isOrigin?:boolean;
  modelValue:string;
  placeHolder:string;
  id:string;
  debounce:number;
}

const emit = defineEmits<{(e: 'update:model-value', val:string): void}>();

const props = defineProps<IProps>();

const onInput = (event: Event) => {
  emit('update:model-value', (event.target as HTMLInputElement).value);
};

const debounceRequest = props.debounce ? debounce(onInput, props.debounce) : onInput;

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
