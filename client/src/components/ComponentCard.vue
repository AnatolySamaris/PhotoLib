<script>

</script>

<template>
    <div class="card">
        <div class="caption">
            <div class="title">July. Summer butterflies.</div>
            <div class="date">Добавлено 15 августа</div>
        </div>
    </div>
</template>

<style>
.card {
    width: 17.8125rem;
    height: 17.8125rem;
    flex-shrink: 0;
    border-radius: 1.25rem;
    background: url("../assets/images/testImage.png"), lightgray -2.333px -74px / 101.287% 151.93% no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}

.card .caption .title {
    overflow: hidden;
    color: #FFF;
    text-overflow: ellipsis;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.625rem; /* 162.5% */
    width: 15.3125rem;
    height: 1.625rem;
    flex-shrink: 0;
}

.card .caption .date {
    color: rgba(255, 255, 255, 0.70);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    opacity: 0.7;
    width: 11.5rem;
}

.card .caption {
    position: absolute;
    left: 1.25rem;
    bottom: 1.25rem;
}
</style>