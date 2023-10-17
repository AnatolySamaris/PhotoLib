<script>
import IconGallery from './icons/IconGallery.vue';
export default {
    components: {
        IconGallery
    },
}
</script>


<template>
    <div class="header">
        <a href="#">
            <button class="logo-button">
                <IconGallery />
                PhotoLib
            </button>
        </a>
        <ul class="reg-auth">
            <li><a href="#" class="reg-link">Регистрация</a></li>
            <li><a href="#" class="reg-link">Вход</a></li>
        </ul>
    </div>
    <hr>
</template>


<style>
.header {
    background: var(--Black, #0B061B);
    width: 75rem;
    height: 4.6875rem;
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    gap: 52.37rem;
}

.header > a {
    height: 2.5rem;
}

.header > .reg-auth > li > .reg-link:hover {
  text-decoration: underline;
}

.logo-button {
  padding: 0;
  border: none;
  background: transparent;
  margin-top: 0.12rem;
  display: flex;
  justify-content: center;
  gap: 1.12rem;
  align-items: center;
  color: var(--White, #ECECEC);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.logo-button:hover {
  cursor: pointer;
}

.header > .reg-auth {
    list-style: none;
    font-size: 1rem;
    display: flex;
    margin-top: 0.75rem;
    justify-content: space-between;
    gap: 1.88rem;
}
</style>