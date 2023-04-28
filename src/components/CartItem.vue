<style>
    .columns{
        margin-left: 10px;
        margin-right: 10px;

    }
    .quantity{
        width: 30%;
    }
</style>

<template>
    <div class="columns">
        <div class="column is-one-fifth">
            <a>
                <RouterLink to="/ProductInfo">
                    <img src="../images/card-img.jpg" alt="...">
                </RouterLink> 
            </a>
        </div>
        <div class="column">
            <h2>Nike Running Shoes</h2>
            <h2>$22.12</h2> <!--Random Values-->
            <span> Qty: <input placeholder="1" class="input quantity" type="number" min="0"></span>
            <button class="button is-danger">Remove</button>
        </div>
    </div>
    <hr>

</template>

