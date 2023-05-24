<style scoped>
    .columns{
        margin-left: 10px;
        margin-right: 10px;

    }
    .quantity{
        width: 30%;
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
        <div class="column centered is-one-half cart-item">
            <button class="button">-</button>
            <input placeholder="1" class="input quantity" type="number" min="0">
            <button class="button">+</button>

            <button class="button is-danger"><i class="fa-solid fa-x"></i></button>
            
        </div>
    </div>
    <hr>

</template>

