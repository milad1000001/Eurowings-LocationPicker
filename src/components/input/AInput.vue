<template>
  <div class="input">
    <div>
      <Origin v-if="isOrigin" class="icon" />
      <Destination v-else class="icon" />
    </div>
    <input class="w-full px-4 outline-none " type="text" :placeholder="isOrigin ? 'Where from?' : 'Where to?'" />
  </div>
</template>

<script setup lang="ts">
import Origin from '../../assets/icons/origin.vue';
import Destination from '../../assets/icons/destination.vue';

export interface IProps{
  isOrigin:boolean;
}

withDefaults(defineProps<IProps>(), {
  isOrigin: false,
});

</script>
<style lang="postcss" scoped>
.input{
  @apply flex items-center border py-3 px-4 rounded-lg;

  &:hover, &:focus{
    .icon{
          @apply text-blue-400;
    }
  }

  &:focus-within{
    @apply border border-blue-400;

    .icon{
          @apply text-blue-400;
    }
  }
}

.icon{
    @apply text-gray-400;
}

</style>
