<script setup>
import ComponentHeader from '../components/ComponentHeader.vue';
import ComponentFooter from '../components/ComponentFooter.vue';
import ComponentBackButton from '../components/ComponentBackButton.vue';
import ComponentRateBar from '../components/ComponentRateBar.vue';

import IconPoint from '../components/icons/IconPoint.vue';
</script>

<template>
  <header>
    <ComponentHeader />
  </header>

  <main>
    <div class="look-photo">
      <div class="photo"></div>
      <div class="rest">
        <div class="title-button-back">
          <p class="title">July. Summer butterflies.</p>
          <div class="button"><ComponentBackButton /></div>
        </div>
        <div class="date-author">
          <p>Добавлено 11 августа</p>
          <IconPoint />
          <p>Константин Константинопольский</p>
        </div>
        <div class="rating-rate">
          <div class="rating">
            <p class="rating-title">Рейтинг</p>
            <p class="average-score">4.8</p>
            <p class="number-of-scores">138 оценок</p>
          </div>
          <div class="rate">
            <p class="rate-title">Оцените фотографию</p>
            <ComponentRateBar />
            <button class="light-button">Оценить</button>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer>
    <ComponentFooter />
  </footer>
</template>


<style>
.ComponentBackButton {
  text-decoration: none;
}

.look-photo {
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  margin-top: 1.87rem;
  margin-bottom: 33.44rem;
}

.look-photo > .photo {
  width: 37.5rem;
  height: 37.5rem;
  flex-shrink: 0;
  border-radius: 1.25rem;
  background: url('./assets/images/testImage.png'), lightgray -4.912px -155.789px / 101.287% 151.93% no-repeat;
  background-size: cover;
  background-position: center;
}

.title-button-back {
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
}

.title-button-back > .title {
  width: 25rem;
  color: var(--White, #ECECEC);
  font-size: 3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.75rem; /* 125% */
}

.title-button-back > .button {
  height: 3.75rem;
}

.title-button-back > .button:hover {
  text-decoration: none;
  cursor: pointer;
}

.look-photo > .rest > .date-author {
  margin-top: 1.25rem;
  align-items: center;
  display: flex;
  gap: 0.75rem;
}

.look-photo > .rest > .rating-rate {
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
}

.look-photo > .rest > .rating-rate > .rating {
  display: inline-flex;
  padding: 1.875rem 3.125rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.0625rem;
  border-radius: 1rem;
  background: #180F35;
  width: 12.5rem;
  height: 15.1875rem;
}

.look-photo > .rest > .rating-rate > .rating > .rating-title {
  color: var(--White, #ECECEC);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

.look-photo > .rest > .rating-rate > .rating > .average-score {
  color: #9747FF;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.look-photo > .rest > .rating-rate > .rating > .number-of-scores {
  color: var(--Gray-2, #989898);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

.look-photo > .rest > .rating-rate > .rate {
  display: flex;
  width: 20rem;
  height: 15.1875rem;
  padding: 1.875rem;
  flex-direction: column;
  align-items: center;
  gap: 1.88rem;
  flex-shrink: 0;
  border-radius: 1rem;
  background: #180F35;
}

.look-photo > .rest > .rating-rate > .rate > .rate-title {
  color: var(--White, #ECECEC);
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */
}

.look-photo > .rest > .rating-rate > .rate > .rate-button {
  border-radius: 0.625rem;
  opacity: 0.3;
  background: var(--Purple, #9747FF);
  width: 6.8125rem;
  height: 3.75rem;
  
}
</style>
