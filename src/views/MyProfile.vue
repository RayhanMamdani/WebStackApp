<script setup>
    import NavBar from '../components/NavBar.vue'
    import Cards from '../components/Cards.vue'
    import { ref } from 'vue';

</script>





<style>
    h1{
        font-size: 30px;
    }
    .productsSelling{
        margin-left: 30px;
    }

    #uploadLabel{
        display: inline-block;
        background-color: #209cee;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.2rem;
        cursor: pointer;
       
    }
</style>

<template>
 <NavBar></NavBar>
 <div class="columns">
    <div class="column is-one-third">
        <img src="../images/profile.png" alt="..."> 
    </div>
    <div class="column is-one-third">
        <h1>Username</h1>
        <h2>City:</h2>
        <h2>Date Joined:</h2>
        <h2>Age</h2>
        <h2>Products Sold</h2>
        <button class="button">Edit</button>
    </div>
    <div class="column addItem">
        <h1>Sell new item</h1>
        <form>
            <label for="">Product Name</label>
                <input class="input" type="text" >
            <label for="">Product Price</label>
                <input class="input" type="text" >
            <label for="">Product Description</label>
                <input class="input" type="text" >


            <!-- <label>
                <i class="fa-solid fa-arrow-up-from-bracket"> </i>
                Upload File
            </label> -->
            <br>
            <br>
            <input type="file" id="upload" accept="image/png, image/jpeg" hidden/>
            <label id="uploadLabel" for="upload">Choose file</label>
            
            <!-- <input type="file" id="upload" name="filename" >
            <label class="uploadButton" for="upload">Choose File</label> -->
            <input type="submit" class="button">
        </form>

        
      
   
        
    </div>

 </div>
 <h1 class="productsSelling">You are selling:</h1>
 <div class="card-container">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
 
        </div>
</template>

