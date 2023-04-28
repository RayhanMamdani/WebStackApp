<script setup>
import NavBar from '../components/NavBar.vue';
import CartItem from '../components/CartItem.vue'

import { ref } from 'vue';
</script>

<style scoped>
    .alignleft{
  float: left;
  margin-left: 20px;

    }

    .alignright{
    float: right;
    margin-right: 30px;
    }

    h1{
        font-size: 20px;
    }
    html{
        background-color: lightgray;
    }
    .checkout{
        background-color: lightsteelblue;
        height: 200px;
    }

    
</style>

<template>
    <NavBar></NavBar>
    <br>
    <div class="columns">
        <div class="column is-two-thirds">
            <h1>CART</h1>
            <hr>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>

        </div>
        <div class="column checkout">
            <h1 class="alignright">$50.00</h1>
            <h1>TOTAL</h1>
            <hr>
            <h2 class="alignright">$40.00</h2>
            <h2>Subtotal</h2>   
            <h2 class="alignright">$5.00</h2>
            <h2>Taxes</h2>
            <h2 class="alignright">$5.00</h2>
            <h2>Delivery</h2>
            <br>
            <button class="button alignright is-info">Checkout</button>
        </div>
    </div>
</template>