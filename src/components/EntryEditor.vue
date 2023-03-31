<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import { ref, computed, onMounted } from "vue";
import type Emoji from "@/types/Emoji";
import type Entry from "@/types/Entry";

// datas
const text = ref("");
const emoji = ref<Emoji | null>(null);
const charCount = computed(() => text.value.length);
const maxChars = 280;

// template refs
const textarea = ref<HTMLTextAreaElement | null>(null);

onMounted(() => textarea.value?.focus());

// events
const emit = defineEmits<{
  (e: "@create", entry: Entry): void;
}>();

// methods
const handleTextInput = (e: KeyboardEvent) => {
  const textarea = e.target as HTMLTextAreaElement;
  console.log(textarea.value);
  if (textarea.value.length <= maxChars) {
    text.value = textarea.value;
  } else {
    text.value = textarea.value = textarea.value.substring(0, maxChars);
  }
};

const handleSubmit = () => {
  emit("@create", {
    body: text.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 1,
    id: Math.random(),
  });

  text.value = "";
  emoji.value = null;
};
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmit">
    <textarea
      :value="text"
      ref="textarea"
      placeholder="New Journal Entry for danielkelly_io"
      @keyup="handleTextInput"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ charCount }} / {{ maxChars }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
