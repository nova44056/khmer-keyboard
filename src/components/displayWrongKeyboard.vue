<template>
    <div class="container">
        <div class="message">
            សូមប្តូរក្តារចុចទៅជាភាសាខ្មែរ 
        </div>


        <div class="close">
            <ion-icon @click="close()" name="close-circle-outline"></ion-icon>
        </div>
        
    </div>
</template>

<script>
    export default {
        methods: {
            close(){
                this.$store.dispatch("setKhmer")
            }
        }

    }
</script>

<style lang="scss" scoped>
.container {
    width: 40%; 
    height: 40%;
    background-color: rgb(56, 56, 56);
    display: flex;
    justify-content: center;
    align-items: center;    
    margin: auto;  
    margin-top: auto;
    color: white;
    font-size: 2rem;
    position: absolute;
    top: 20%; 
    left: 27%; 
    // display: none;
    visibility: hidden;
    // border-radius: 30px;
    z-index: 1;
}
.close {
    position: absolute;
    right:  0;
    top: 0;
    width: 30px;
    height: 30px;
    color: white;
}
.close:hover{
    // background-color: rgb(174, 169, 169);
    color: blue;
    cursor: pointer;
}
</style>