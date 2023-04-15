<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getOffers } from './service/offers/index';
import type { ResponseApi } from './types/response-type';
import AvailableCard from './components/available-card/AvailableCard.vue';
import AContainer from './components/container/AContainer.vue';

const response = ref<ResponseApi[]>();

onMounted(() => {
  getOffers().then((res) => {
    const sortetResult = res.data.sort((a:Record<string, any>, b:Record<string, any>) => a.price.amount - b.price.amount);
    response.value = sortetResult;
  });
});
</script>

<template>
  <div class="p-8">
    <div>
      <AInput is-origin />
      <AInput class="my-4" />
    </div>
    <section>
      <AContainer v-if="!response">
        <ASkeleton v-for="(_, index) in 10" :key="index" />
      </AContainer>
      <AContainer v-else>
        <AvailableCard
          v-for="(flight, index) in response"
          :key="index"
          :item="flight"
          :is-loading="!!response"
          :is-best="index === 0" />
      </AContainer>
    </section>
  </div>
</template>
