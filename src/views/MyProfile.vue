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

    .uploadLabel{
        display: inline-block;
        background-color: #209cee;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.2rem;
        cursor: pointer;
       
    }

    #ratingsLabel{
        color: gray;
        font-size: 12px;
    }

    .editPic{
        height: 100px;
    }

    .editHeading{
        font-size: 24px;
    }
    .editUnlist{
        
    }

    .container{
        padding: 10px;
    }

    /* .unlist-button{
        display: block !important;
    } */
</style>

<template>
 <NavBar></NavBar>
 <div class="container">
 <h1>Edit Profile</h1>
 <div class="columns">
    <div class="column is-one-half">
        <div class="card">
            <div class="card-content">
                <p class="editHeading">Profile Picture</p>
                <div class="columns">
                    <div class="column is-one-quarter">
                        <img class="editPic" src="../images/profile.png" alt="..."> 
                    </div>
                    <div class="column">
                        <input type="file" id="uploadProfile" accept="image/png, image/jpeg" hidden/>
                        <label class="uploadLabel" for="uploadProfile">Choose file</label>
                        <p @click="" class="has-text-danger">Remove</p>
                    </div>
                </div>

            </div>
        </div>
        <br>
        <div class="card">
            <div class="card-content">
                <p class="editHeading">User Info</p>
                <label for="">First Name</label>
                <input type="text" class="input" placeholder="John">
                <label for="">Last Name</label>
                <input type="text" class="input" placeholder="Smith">
                <label for="">City</label>
                <input type="text" class="input" placeholder="Toronto, ON"> <!--Location Selector-->
                <br>
                <br>
                <button class="button is-info">Save Changes</button>
            </div>
        </div>

    </div>
    <div class="column addItem">
        <div class="card">
            <div class="card-content">
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
                    <label class="uploadLabel" for="upload">Choose file</label>
                    
                    <!-- <input type="file" id="upload" name="filename" >
                    <label class="uploadButton" for="upload">Choose File</label> -->
                    <input type="submit" class="button">
          </form>
            </div>

        </div>
        
    </div>

 </div>
 <h1 class="productsSelling">Manage products</h1>
 <hr>
 <!-- <div class="card-container">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
 
        </div> -->

        <!--Fix to use card container later this is a placeholder-->
        <div class="card-container">
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>
            <Cards :isDisplayed="'block'"></Cards>


            <!-- <div class="control">
            </div> -->
        </div>

        <!-- <div class="columns">
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: 52px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>

                </div>
            </div>
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: 52px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>
                </div>
            </div>
            <div class="column">
                <Cards></Cards>
                <div class="field has-addons" style="margin-left: px">
                    <div class="control">
                        <button class="button" style="width: 380px;">Unlist</button>
                    </div>
                </div>
            </div>
        </div> -->
    </div>
</template>

