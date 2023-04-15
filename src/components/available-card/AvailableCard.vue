<template>
  <article
    class="p-5 pt-7 border rounded-lg"
    :aria-label="`${item.origin} to ${item.destination}`"
    :class="isBest ? 'border-yellow-400 bg-yellow-100' : ''"
  >
    <div class="flex justify-center items-center gap-3 relative">
      <DepartureIcon />
      <div class="font-bold">{{item.origin}}</div>
      <ConnectionLine />
      <div class="font-bold">{{item.destination}}</div>
      <div class="absolute -top-3">{{item.duration}}</div>
      <ArrivalIcon />
    </div>
    <div class="my-4 flex gap-3 justify-between sm:justify-start sm:gap-5 items-center md:justify-between">
      <div>
        <span class="text-gray-500">Departure</span>
        <div class="font-bold">{{ item.departureDate }}</div>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <span class="text-gray-500">Return</span>
          <div class="font-bold">{{ item.returnDate }}</div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between gap-3 lg:flex-row text-xs md:text-sm">
      <div class="flex items-center gap-3">
        <div :class="item.seatAvailability === '1' ? 'text-red-700' : 'text-green-700'">
          {{item.seatAvailability}} Seats available
        </div>
        <div class="w-2 h-2 bg-gray-300 rounded-full md:hidden lg:block" />
        <div>
          Round Trip
        </div>
      </div>
      <div class="font-bold self-end text-blue-400 text-md md:self-center md:text-sm lg:text-lg">
        {{item.price.amount }}
        <span>{{ getCurrency }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import DepartureIcon from '../../assets/icons/departure.vue';
import ArrivalIcon from '../../assets/icons/arrival.vue';
import ConnectionLine from '../connection-line/ConnectionLine.vue';

export interface IProps{
  isBest:boolean;
  item:Record<string, any>;
}

const props = withDefaults(defineProps<IProps>(), { isBest: false });

const getCurrency = new Map()
  .set('EUR', '€')
  .set('USD', '$')
  .get(props.item.price.currency);
</script>
