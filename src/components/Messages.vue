<template>
    <div class="wrapper">
    <div class="container">
        <div class="left">
            <div class="top">
                <input type="text" placeholder="Search" />
                <a href="javascript:;" class="search"></a>
            </div>
            <ul class="people">
                <li class="person" data-chat="person1">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg" alt="" />
                    <span class="name">Thomas Bangalter</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">I was wondering...</span>
                </li>
                <li class="person" data-chat="person2">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/dog.png" alt="" />
                    <span class="name">Dog Woofson</span>
                    <span class="time">1:44 PM</span>
                    <span class="preview">I've forgotten how it felt before</span>
                </li>
                <li class="person" data-chat="person3">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/louis-ck.jpeg" alt="" />
                    <span class="name">Louis CK</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">But we’re probably gonna need a new carpet.</span>
                </li>
                <li class="person" data-chat="person4">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg" alt="" />
                    <span class="name">Bo Jackson</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">It’s not that bad...</span>
                </li>
                <li class="person" data-chat="person5">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/michael-jordan.jpg" alt="" />
                    <span class="name">Michael Jordan</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">Wasup for the third time like is 
you blind bitch</span>
                </li>
                <li class="person" data-chat="person6">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/drake.jpg" alt="" />
                    <span class="name">Drake</span>
                    <span class="time">2:09 PM</span>
                    <span class="preview">howdoyoudoaspace</span>
                </li>
            </ul>
        </div>
        <div class="right">
            <div class="top"><span>To: <span class="name">Dog Woofson</span></span></div>
            <div class="chat" data-chat="person1">
                <div class="conversation-start">
                    <span>Today, 6:48 AM</span>
                </div>
                <div class="bubble you">
                    Hello,
                </div>
                <div class="bubble you">
                    it's me.
                </div>
                <div class="bubble you">
                    I was wondering...
                </div>
            </div>
            <div class="chat" data-chat="person2">
                <div class="conversation-start">
                    <span>Today, 5:38 PM</span>
                </div>
                <div class="bubble you">
                    Hello, can you hear me?
                </div>
                <div class="bubble you">
                    I'm in California dreaming
                </div>
                <div class="bubble me">
                    ... about who we used to be.
                </div>
                <div class="bubble me">
                    Are you serious?
                </div>
                <div class="bubble you">
                    When we were younger and free...
                </div>
                <div class="bubble you">
                    I've forgotten how it felt before
                </div>
            </div>
            <div class="chat" data-chat="person3">
                <div class="conversation-start">
                    <span>Today, 3:38 AM</span>
                </div>
                <div class="bubble you">
                    Hey human!
                </div>
                <div class="bubble you">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div class="bubble me">
                    ... what.
                </div>
                <div class="bubble me">
                    Are you serious?
                </div>
                <div class="bubble you">
                    I mean...
                </div>
                <div class="bubble you">
                    It’s not that bad...
                </div>
                <div class="bubble you">
                    But we’re probably gonna need a new carpet.
                </div>
            </div>
            <div class="chat" data-chat="person4">
                <div class="conversation-start">
                    <span>Yesterday, 4:20 PM</span>
                </div>
                <div class="bubble me">
                    Hey human!
                </div>
                <div class="bubble me">
                    Umm... Someone took a shit in the hallway.
                </div>
                <div class="bubble you">
                    ... what.
                </div>
                <div class="bubble you">
                    Are you serious?
                </div>
                <div class="bubble me">
                    I mean...
                </div>
                <div class="bubble me">
                    It’s not that bad...
                </div>
            </div>
            <div class="chat" data-chat="person5">
                <div class="conversation-start">
                    <span>Today, 6:28 AM</span>
                </div>
                <div class="bubble you">
                    Wasup
                </div>
                <div class="bubble you">
                    Wasup
                </div>
                <div class="bubble you">
                    Wasup for the third time like is <br />you blind bitch
                </div>

            </div>
            <div class="chat" data-chat="person6">
                <div class="conversation-start">
                    <span>Monday, 1:27 PM</span>
                </div>
                <div class="bubble you">
                    So, how's your new phone?
                </div>
                <div class="bubble you">
                    You finally have a smartphone :D
                </div>
                <div class="bubble me">
                    Drake?
                </div>
                <div class="bubble me">
                    Why aren't you answering?
                </div>
                <div class="bubble you">
                    howdoyoudoaspace
                </div>
            </div>
            <div class="write">
                <a href="javascript:;" class="write-link attach"></a>
                <input type="text" />
                <a href="javascript:;" class="write-link smiley"></a>
                <a href="javascript:;" class="write-link send"></a>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
:root {
--white: #fff;
--black: #000;
--bg: #f8f8f8;
--grey: #999;
--dark: #1a1a1a;
--light: #e6e6e6;
--wrapper: 1000px;
--blue: #00b0ff;
}

*,
*:before,
*:after {
box-sizing: border-box;
}

body {
background-color: var(--bg);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
font-family: 'Source Sans Pro', sans-serif;
font-weight: 400;
background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/image.jpg');
background-size: cover;
background-repeat: none;
}

.wrapper {
position: relative;
left: 50%;
width: var(--wrapper);
height: 800px;
transform: translate(-50%, 0);
}

.container {
position: relative;
top: 50%;
left: 50%;
width: 80%;
height: 75%;
background-color: var(--white);
transform: translate(-50%, -50%);
}

.container .left {
float: left;
width: 37.6%;
height: 100%;
border: 1px solid var(--light);
background-color: var(--white);
}

.container .left .top:after {
position: absolute;
bottom: 0;
left: 50%;
display: block;
width: 80%;
height: 1px;
content: '';
background-color: var(--light);
transform: translate(-50%, 0);
}

.container .left input {
float: left;
width: 188px;
height: 42px;
padding: 0 15px;
border: 1px solid var(--light);
background-color: #eceff1;
border-radius: 21px;
font-family: 'Source Sans Pro', sans-serif;
font-weight: 400;
}

.container .left input:focus {
outline: none;
}

.container .left a.search {
display: block;
float: left;
width: 42px;
height: 42px;
margin-left: 10px;
border: 1px solid var(--light);
background-color: var(--blue);
background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/name-type.png');
background-repeat: no-repeat;
background-position: top 12px left 14px;
border-radius: 50%;
}

.container .left .people {
margin-left: -1px;
border-right: 1px solid var(--light);
border-left: 1px solid var(--light);
width: calc(100% + 2px);
}

.container .left .people .person {
position: relative;
width: 100%;
padding: 12px 10% 16px;
cursor: pointer;
background-color: var(--white);
}

.container .left .people .person:after {
position: absolute;
bottom: 0;
left: 50%;
display: block;
width: 80%;
height: 1px;
content: '';
background-color: var(--light);
transform: translate(-50%, 0);
}

.container .left .people .person img {
float: left;
width: 40px;
height: 40px;
margin-right: 12px;
border-radius: 50%;
object-fit: cover;
}

.container .left .people .person .name {
font-size: 14px;
line-height: 22px;
color: var(--dark);
font-family: 'Source Sans Pro', sans-serif;
font-weight: 600;
}

.container .left .people .person .time {
font-size: 14px;
position: absolute;
top: 16px;
right: 10%;
padding: 0 0 5px 5px;
color: var(--grey);
background-color: var(--white);
}

.container .left .people .person .preview {
font-size: 14px;
display: inline-block;
overflow: hidden !important;
width: 70%;
white-space: nowrap;
text-overflow: ellipsis;
color: var(--grey);
}

.container .left .people .person.active,
.container .left .people .person:hover {
margin-top: -1px;
margin-left: -1
}
</style>