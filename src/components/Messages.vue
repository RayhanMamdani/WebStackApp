    <template>
  <div class="chat">
    <div class="chat-header clearfix">
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg" alt="avatar" />

      <div class="chat-about">
        <div class="chat-with">Chat with Vincent Porter</div>
        <div class="chat-num-messages">already 1 902 messages</div>
      </div>
      <i class="fa fa-star"></i>
    </div> <!-- end chat-header -->

    <div class="chat-history">
      <ul>
        <message v-for="(message, index) in messages" :key="index" :text="message.text" :isMe="message.isMe" :time="message.time" />
      </ul>
    </div> <!-- end chat-history -->

    <div class="chat-message clearfix">
      <textarea name="message-to-send" id="message-to"></textarea>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      messages: ['Hello', 'How are you?', 'I am fine, thanks.'],
    };
  },
};
</script>