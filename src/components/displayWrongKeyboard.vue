<template>
    <div class="container">
        <div class="message">
            Wrong Keyboard! 
        </div>
    </div>
</template>

<script>
    export default {
        

    }
</script>

<style lang="scss" scoped>
.container {
    width: 100vw;
    height: 100vh;
    opacity: 0.3;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: auto;  
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 0; 
    // display: none;
    visibility: hidden;
    // border-radius: 30px;
    z-index: 1;
}
</style>