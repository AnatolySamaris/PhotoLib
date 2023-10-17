<script>
import UnchosenStar from "./icons/IconUnchosenRateStar.vue";
import ChosenStar from "./icons/IconChosenRateStar.vue";

export default {
  name: "Rating",
  components: {
    UnchosenStar,
    ChosenStar,
  },
  props: {
    maxRating: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      currentRating: 0,
      savedRating: 0, // Добавляем переменную для сохраненной оценки
    };
  },
  methods: {
    highlightStars(rating) {
      if (this.savedRating === 0) {
        this.currentRating = rating;
      }
    },
    resetStars() {
      if (this.savedRating === 0) { // Установка оценки только если нет сохраненной оценки
        this.currentRating = 0;
      }
    },
    rate(rating) {
      this.currentRating = rating;
      this.savedRating = rating; // Сохраняем оценку
      // Здесь может быть вызов метода или передача события с произведенной оценкой
    },
  },
};
</script>


<template>
    <div class="rateBar">
      <div v-for="n in maxRating" :key="n" @mouseover="highlightStars(n)" @mouseleave="resetStars" @click="rate(n)">
        <chosen-star v-if="n <= currentRating" />
        <unchosen-star v-else />
      </div>
    </div>
</template>


<style>
.rateBar {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
}
</style>