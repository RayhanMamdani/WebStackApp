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
        font-size: 25px !important;
    }
    html{
        background-color: lightgray;
    }
    .cost{
        height: 275px;
        margin: auto;
    }
    
    header{
        text-align: center;
    }

    .title{
        margin: auto;
    }

    .cart-title{
        margin: auto !important;
        text-align: center !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        font-size: 50px;
    }
    @media only screen and (max-width: 769px) {
        .no-mobile{
            display: none;
        }
    }
</style>

<template>
    <NavBar></NavBar>
    
    <h1 class="cart-title">Cart</h1>
    <br>
    <br>

    <div class="columns">
        <div class="column is-two-thirds">
            <div class="columns no-mobile">
                <div class="column is-one-fifth header"></div>
                <div class="column header">Product</div>
                <div class="column header">Price</div>
                <div class="column header">Quantity</div>
            </div>
            <hr>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>
            <CartItem></CartItem>

        </div>
        <div class="column ">
        <div class="card" style="margin: auto">
        <div class="card-content cost">
                <h1 class="alignright">$50.00</h1>
                <h1>Total</h1>
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
        </div>
    </div>
</template>