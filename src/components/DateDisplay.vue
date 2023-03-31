<script lang="ts">
import formatRelative from "date-fns/formatRelative";
import { defineComponent, type PropType } from "vue";
import type Entry from "@/types/Entry";
export default defineComponent({
  props: {
    // date: { type: Object as PropType<Entry>, required: true },
    date: { type: Date, required: true },
  },
  // emits: {
  //   doSomething(payload: Entry) {
  //     // return payload.body && payload.createdAt;
  //     return true;
  //   },
  // },
  computed: {
    formatted(): string {
      return formatRelative(this.date, Date.now());
    },
  },
  mounted() {
    this.$http("https://myendpoint.com");
  },
});
</script>
<template>
  <div>{{ formatted }}</div>
</template>
