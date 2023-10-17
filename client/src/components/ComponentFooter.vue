<template>
    <hr>
    <div class="footer">
        <div class="contacts-copyright">
            <div class="contacts">anatolysamaris@gmail.com</div>
       
        <div class="git"><a href="https://github.com/AnatolySamaris" target="blank">
                &#169; AnatolySamaris, 2023
            </a></div>
        </div>
    </div>
</template>


<style>


.contacts-copyright {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem; 
    gap: 52rem;
    margin: 0;
    padding: 0;
}

.contacts {
    display: flex;
    align-items: center;
    color: var(--Purple, #9747FF);
}

.footer {
    background: var(--Black, #0B061B);
    width: 75rem;
    height: 4.6875rem;
    flex-shrink: 0;
    display: flex;
    align-items: center;
}

</style>