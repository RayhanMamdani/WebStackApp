
<template>
  <!DOCTYPE html>
  <Navbar></Navbar>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="box-form">
	<div class="left">
		<div class="overlay">
		<h1>Find More</h1>
		<p>Welcome to Vendoza, the ultimate destination for buying and selling in the digital age.
</p>
		<span>
      <br>
			<p>Login With Google</p>
			<a href="#"><i class="fa-brands fa-google" style="color: #ffffff;"></i> Login with Google</a>
		</span>
		</div>
	</div>
	
	
		<div class="right">
		<h5 style="font-size: 300%; margin-top:50px;">Sign Up</h5>
   

    <div class="wrapper">
      <p>Create an account right now! It takes less than a few minutes!!</p>
		<div class="inputs">
      <input v-model="name" type="text" placeholder="name"  required>

			<input v-model="email" type="email" placeholder="email">
      
			<br>
			<input v-model="password" type="password" placeholder="password">
		
      <input v-model="confirmPassword" type="password" placeholder="confirm password"  required>

      <input v-model="address" type="text" placeholder="address"  required>
      <input v-model="age" type="number" placeholder="age"  required>

    </div>
			
			<br><br>
    </div>
		<div class="remember-me--forget-password">
				<!-- Angular -->
	<label>
		<input type="checkbox" name="item" checked/>
		<span class="text-checkbox">Remember me</span>
	</label>
			<p>forget password?</p>
		</div>
			
			<br>
      <form v-on:submit="signup">
			  <button type="submit">Sign Up</button>
      </form>
	</div>
	
</div>
<!-- partial -->
  
</body>
</html>

<br><br>
<br>

</template>

<script>

 
    import axios from 'axios'

    export default {

        data() {
            return {
                name: '',
                email: '',
                age: '',
                address: '',
                password: '',
                confirmPassword: ''
            }
        },

        name: "signup",
        methods: {
            signup(e) {

                e.preventDefault()
                let url = "http://localhost:3000/api/users/register/"
                console.log(url)
                axios.post(url, {
                  "name": this.name,
                  "age": this.age,
                  "address": this.address,
                  "email": this.email,
                  "password": this.password,
                  "confirmPassword": this.confirmPassword
                }).then((response) => {
                    console.log(response)
                }, {
                    withCredentials: true,
                    maxRedirects: 1
                })

            }
        }
    }

</script>

<style scoped>
  body {
  background-image: linear-gradient(135deg, #FAB2FF 10%, #1904E5 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: "Open Sans", sans-serif;
  color: #333333;
}
.wrapper{
  margin-top:100px;
}
.box-form {
  margin: 0 auto;
  width: 80%;
  background: #FFFFFF;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex: 1 1 100%;
  align-items: stretch;
  justify-content: space-between;
  box-shadow: 0 0 20px 6px #090b6f85;
}
@media (max-width: 980px) {
  .box-form {
    flex-flow: wrap;
    text-align: center;
    align-content: center;
    align-items: center;
  }
}
.box-form div {
  height: auto;
}
.box-form .left {
  color: #FFFFFF;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("../images/homesectionbg.jpg");
  overflow: hidden;
}
.box-form .left .overlay {
  padding: 30px;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
}
.box-form .left .overlay h1 {
  font-size: 10vmax;
  line-height: 1;
  font-weight: 900;
  margin-top: 40px;
  margin-bottom: 20px;
}
.box-form .left .overlay span p {
  margin-top: 30px;
  font-weight: 900;
}
.box-form .left .overlay span a {
  background: #3b5998;
  color: #FFFFFF;
  margin-top: 10px;
  padding: 14px 50px;
  border-radius: 100px;
  display: inline-block;
  box-shadow: 0 3px 6px 1px #042d4657;
}
.box-form .left .overlay span a:last-child {
  background: black;
  margin-left: 30px;
}
.box-form .right {
  padding: 40px;
  overflow: hidden;
}
@media (max-width: 980px) {
  .box-form .right {
    width: 100%;
  }
}
.box-form .right h5 {
  font-size: 6vmax;
  line-height: 0;
}
.box-form .right p {
  font-size: 14px;
  color: #B0B3B9;
}
.box-form .right .inputs {
  overflow: hidden;
}
.box-form .right input {
  width: 100%;
  padding: 10px;
  margin-top: 25px;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 2px solid #B0B3B9;
}
.box-form .right .remember-me--forget-password {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.box-form .right .remember-me--forget-password input {
  margin: 0;
  margin-right: 7px;
  width: auto;
}
.box-form .right button {
  float: right;
  color: #fff;
  font-size: 16px;
  padding: 12px 35px;
  border-radius: 50px;
  display: inline-block;
  border: 0;
  outline: 0;
  box-shadow: 0px 4px 20px 0px #49c628a6;
  background-image: linear-gradient(135deg, #70F570 10%, #49C628 100%);
}

label {
  display: block;
  position: relative;
  margin-left: 30px;
}

label::before {
  content: ' \f00c';
  position: absolute;
  font-family: FontAwesome;
  background: transparent;
  border: 3px solid #70F570;
  border-radius: 4px;
  color: transparent;
  left: -30px;
  transition: all 0.2s linear;
}

label:hover::before {
  font-family: FontAwesome;
  content: ' \f00c';
  color: #fff;
  cursor: pointer;
  background: #70F570;
}

label:hover::before .text-checkbox {
  background: #70F570;
}

label span.text-checkbox {
  display: inline-block;
  height: auto;
  position: relative;
  cursor: pointer;
  transition: all 0.2s linear;
}

label input[type="checkbox"] {
  display: none;
}



</style>