<script setup>
import ComponentHeader from '../components/ComponentHeader.vue';
import ComponentFooter from '../components/ComponentFooter.vue';
import ComponentImageGrid from '../components/ComponentImageGrid.vue';

import ComponentAddButton from '../components/ComponentAddButton.vue';
</script>

<template>
  <header>
    <ComponentHeader />
  </header>

  <main>
    <div class="date-add-button">
      <div class="date">Июль, 2022</div>
      <ComponentAddButton />
    </div>
    <ComponentImageGrid />
  </main>

  <footer>
    <ComponentFooter />
  </footer>
</template>


<style>
.date-add-button {
  display: flex;
  justify-content: space-between;
  margin-top: 1.87rem;
  margin-bottom: 2.5rem;
}

.date-add-button .date {
  color: var(--White, #ECECEC);
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.75rem; /* 125% */
}
</style>
