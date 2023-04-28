<script setup>
import NavBar from '../components/NavBar.vue';
import CartItem from '../components/CartItem.vue'

import { ref } from 'vue';
</script>
<template>
    <NavBar></NavBar>
    <div class="columns">
        <div class="column is-two-thirds">
            <h1>CART</h1>
            <hr>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>



        </div>
        <div class="column">
            <h1>TOTAL</h1>
            <hr>
            <h2>Subtotal</h2>
            <h2>Taxes</h2>
            <h2>Delivery</h2>
            <button class="button">Checkout</button>
        </div>
    </div>
</template>