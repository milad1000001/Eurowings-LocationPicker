<script setup lang="ts">
import { useGetOffers } from './composables/useOffers';
import OriginIcon from './assets/icons/origin.vue';
import DestinationIcon from './assets/icons/destination.vue';

const originFilterTerms = ref('');
const destinationFilterTerms = ref('');

const offersAPI = useGetOffers();

const getFilteredResult = computed(() => offersAPI.data.value?.data
  ?.filter((el:{origin:string, destination:string}) => el.origin.toLowerCase().includes(originFilterTerms.value.toLowerCase()) && el.destination.toLowerCase().includes(destinationFilterTerms.value.toLowerCase()))
  .sort((a:Record<string, any>, b:Record<string, any>) => a.price.amount - b.price.amount));

</script>

<template>
  <div class="p-8">
    <form id="">
      <InputBox
        v-model="originFilterTerms"
        :debounce="500"
        place-holder="Where From ?"
        id="origin">
        <template #prepend>
          <OriginIcon class="icon" />
        </template>
      </InputBox>
      <InputBox
        class="my-4"
        :debounce="500"
        v-model="destinationFilterTerms"
        place-holder="Where To ?"
        id="destination">
        <template #prepend>
          <DestinationIcon class="icon" />
        </template>
      </InputBox>
    </form>
    <section>
      <Container v-if="offersAPI.isLoading.value">
        <ASkeleton v-for="(_, index) in 10" :key="index" />
      </Container>
      <Container v-else>
        <AvailableCard
          v-for="(flight, index) in getFilteredResult"
          :key="index"
          :item="flight"
          :best-offer="index === 0" />
      </Container>
    </section>
  </div>
</template>
