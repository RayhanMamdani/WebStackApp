<style scoped>
    .columns{
        margin-left: 10px;
        margin-right: 10px;

    }
    .quantity{
        width: 60px;
    }
    h2{
        font-size: 20px;
    }
    h3{
        font-size: 15px;
    }

    .centered{
        align-items: center;
    }
    @media only screen and (max-width: 850px) {
        .product-image{
            width: 300px;
        }
        .cart-item{
            display: flex;
            justify-content: center;
        }
    }
    @media only screen and (max-width: 1246px) and (min-width: 850px) {
        .remove-button{
            width: 145px;
        }
    }
</style>

<template>
    <div class="columns">
        <div class="column is-one-fifth cart-item">
            <a>
                <RouterLink to="/ProductInfo">
                    <img class="product-image" src="../images/card-img.jpg" alt="...">
                </RouterLink> 
            </a>
        </div>
        <div class="column centered cart-item">
            <h2>Nike Running Shoes</h2>
        </div>
        <div class="column centered cart-item">
            <h3>$22.12</h3> <!--Random Values-->
        </div>
        <div class="column is-one-half centered cart-item">

            <button class="button" @click="decreaseQuantity">-</button>
            <input placeholder="1" class="input quantity" type="number" v-model="quantity" min="0">
            <button class="button" @click="increaseQuantity">+</button>
            <button class="button is-danger remove-button" @click="removeItem">
                <i class="fa-solid fa-x"></i>
            </button>
            
        </div>
    </div>
    <hr>

</template>

<script setup>
import { ref } from 'vue';

const quantity = ref(1); //initial quantity

const decreaseQuantity = () => {
  if (quantity.value > 0) {
    quantity.value--;
  }
};

const increaseQuantity = () => {
  quantity.value++;
};

const removeItem = () => {
    quantity.value = 0;
   /**remove it from screen */
};
</script>