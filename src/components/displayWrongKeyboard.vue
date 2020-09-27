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
    width: 500px;
    height: 10rem;
    background-color: rgb(104, 104, 104);
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: auto;  
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 30%; 
    display: none;
    border-radius: 30px;
    left: 30%;
    z-index: 1;
}
</style>