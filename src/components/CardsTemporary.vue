<script>
import '@/assets/cards.css';
import { RouterLink } from 'vue-router';
export default {
  name: 'Cards',
  props: {
    isDisplayed: {
      type: String,
      default: 'none'
    }
  }
}



</script>

<template>
 <!DOCTYPE html>
<html lang="en">

<head>


    <!-- Montserrat Font -->
    <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400&display=swap" rel="stylesheet">

    <!-- BoxIcons v2.1.1 -->
    <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'>


</head>

<body>
    <div class="no-scroll">
    <div class="card">

        <div class="card-header">
            <h3>Nike Running Shoes</h3>
            <span>New</span>
        </div>

        <div class="card-img">
            <img src="../images/card-img.jpg" alt="...">
            <i class="bx bx-heart"></i>
        </div>

        <div class="card-details">
            <div class="price">
                <p>Price</p>
                <strong>$169.00</strong>
            </div>
            
        </div>
        <p>I'm selling my gently used Nike Air Max sneakers in size 9.5. These sneakers have been worn a few times but are still in great condition. They have a stylish black and white design with a comfortable cushioned sole that's perfect for running or everyday wear.</p>
        <br>
        
<RouterLink to="/ProductInfo">
        <div class="card-footer">
            <button>
                
                Buy now
            </button>
        </div>
    </RouterLink>
    </div>
</div>

<div class="field has-addons">
            <p class="control">
                <button :style="{display: isDisplayed}" class="button is-danger unlist-button">Unlist</button>
             </p>
             <p class="control">
                <a href="">
                    <RouterLink to="/EditProducts">
                        <button :style="{display: isDisplayed}" class="button is-light unlist-button">Edit</button>
                    </RouterLink>
                </a>
             </p>  
            
          </div>


</body>

</html>

</template>
<style scoped>

* {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
}

html{
    overflow-y: hidden !important;
}

.no-scroll {
  overflow: hidden !important;
}

body {
    display: grid;
    place-items: center;
    font-family: 'Rubik', sans-serif;
    overflow: hidden !important;
}

.card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 380px;
    height: auto;
    min-height: 0;
    padding: 25px;
    background: #ffffff;
    border: 2px solid #e1e3e6;
    border-radius: 20px;
    transition: .4s;
}

.card:hover {
    border-color: #ffffff;
    transform: translateY(-10px);
    box-shadow: 0 5px 12px rgba(0, 0, 0, .08);
}

.card .card-header h3 {
    color: #404d61;
    font-size: 28px;
}

.card .card-header p {
    color: #757d8a;
    font-size: 20px;
}

.card .card-header span {
    position: absolute;
    color: #f43c3c;
    background: #fef0f0;
    right: 25px;
    top: 25px;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 18px;
}

.card .card-img {
    position: relative;
    height: 220px;
    border-radius: 12px;
    margin: 22px 0;
    overflow: hidden;
}

.card .card-img img {
    width: 100%;
    height: 100%;
    transition: .4s;
}

.card:hover .card-img img {
    transform: scale(1.06);
}

.card .card-img i {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 12px;
    color: #757d8a;
    background: #ffffff;
    padding: 6px;
    border-radius: 6px;
}

.card .card-details {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card .card-details .price p {
    color: #757d8a;
    font-size: 20px;
}

.card .card-details .price strong {
    color: #545d6d;
    font-size: 22px;
}

.card .card-details .colors {
    display: flex;
}

.card .card-details .colors div {
    cursor: pointer;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 0 4px;
}

.card .card-details .colors div:nth-child(1) {
    background: linear-gradient(90deg, #b72c31, #efb9b0);
}

.card .card-details .colors div:nth-child(2) {
    background: linear-gradient(90deg, #25476d, #a8bed2);
}

.card .card-details .colors div:nth-child(3) {
    background: linear-gradient(90deg, #10505b, #a4beb2);
}

.card .card-details .colors div i {
    color: #ffffff;
    margin: 5px;
    font-size: 25px;
    opacity: 0;
}

.card .card-details .colors div.selected i {
    opacity: 1;
}

.card .card-sizes {
    display: flex;
    justify-content: space-between;
    margin: 22px 0;
}

.card .card-sizes span {
    cursor: pointer;
    color: #757d8a;
    background: #f1f2f3;
    border-radius: 3px;
    padding: 6px 12px;
}

.card .card-sizes span.selected {
    color: #4e73f8;
    background: #d5defe;
}

.card .card-footer button {
    cursor: pointer;
    width: 100%;
    height: 46px;
    border-radius: 12px;
    background: linear-gradient(#6787fd, #3f66f5);
    color: #ffffff;
    font-size: 20px;
    letter-spacing: .5px;
}

.unlist-button{
    width: 190px; 
    margin-bottom: 20px;
}
</style>