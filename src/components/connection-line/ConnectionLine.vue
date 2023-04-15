<template>
  <div class="connection">
    <hr class="connection__line">
    <div class="connection__dot" />
    <div class="connection__dot" />
    <div class="connection__dot" />
    <div class="connection__dot" />
    <hr class="connection__line">
  </div>
</template>
<style lang="postcss" scoped>
.connection{
  @apply flex justify-center items-center gap-2;

  &__line{
    @apply w-8 bg-black h-1 rounded-lg md:w-8 lg:w-10;
  }

  &__dot{
      @apply w-1 h-1 rounded-full bg-black;
  }
}
</style>
