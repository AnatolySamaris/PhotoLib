<script>
import ComponentCard from './ComponentCard.vue';
import IconArrow from './icons/IconArrow.vue';

export default {
  data() {
    return {
        images: [
            {id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6},
            {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12},
            {id: 13}, {id: 14}, {id: 15},
        ],
        displayedImages: [], // Отображаемые изображения
        imagesPerPage: 12, // Количество изображений на странице
        currentIndex: 0 // Индекс следующей картинки для отображения
    };
  },
  computed: {
    canLoadMore() {
      return this.currentIndex < this.images.length;
    }
  },
  mounted() {
    // Загрузка всех изображений из базы данных. Здесь
    // нужно реализовать логику загрузки изображений.
    // Например, с использованием API запросов.
    this.displayedImages = this.images.slice(0, this.imagesPerPage);
    this.currentIndex = this.imagesPerPage;
  },
  methods: {
    loadMoreImages() {
      const endIndex = this.currentIndex + this.imagesPerPage;
      const newImages = this.images.slice(this.currentIndex, endIndex);
      this.displayedImages = [...this.displayedImages, ...newImages];
      this.currentIndex = endIndex;
    }
  },
  components: {
    ComponentCard,
    IconArrow,
  }
};
</script>


<template>
    <div class="image-grid">
        <div v-for="image in displayedImages" :key="image.id">
            <ComponentCard />
        </div>
    </div>
    <button v-if="canLoadMore" @click="loadMoreImages" class="dark-button show-more">
        <IconArrow />
        Показать ещё
    </button>
</template>


<style>
.image-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.25rem;
    grid-column-gap: 1.25rem;
    margin-bottom: 2.5rem;
}

.show-more {
    margin-bottom: 2.5rem;
    width: 75rem;
    height: 3.75rem;
}
</style>