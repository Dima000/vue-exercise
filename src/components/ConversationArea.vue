<template>
  <div class="conversation">
    <div class="conversation-area" ref="conversationArea">
      <conversation-area-message
          v-for="item in conversation"
          :key="item.id"
          :message="item" />
    </div>

    <conversation-input @submit="sendNewMessage" />
  </div>

</template>

<script>
  import ConversationAreaMessage from './ConversationAreaMessage';
  import { mapGetters } from 'vuex';
  import ConversationInput from './ConversationInput';

  export default {
    name: 'ConversationArea',
    components: { ConversationInput, ConversationAreaMessage },
    computed: {
      ...mapGetters([
        'conversation',
        'currentUser'
      ])
    },
    methods: {
      sendNewMessage(messageText) {
        let newMessage = {
          id: Date.now(),
          date: (new Date).toLocaleString(),
          message: messageText,
          from: { ...this.currentUser }
        }

        this.$store.dispatch('sendMessage', newMessage);
        this.scrollToBottom();
      },
      async scrollToBottom() {
        await this.$nextTick();

        let el = this.$refs.conversationArea;

        if (el) {
          el.scrollTop = el.scrollHeight;
        }
      }
    }
  }
</script>

<style scoped>
  .conversation {
    max-width: 500px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .conversation-area {
    flex: 1;
    overflow-y: auto;
    padding: 8px;
    border: 1px solid gray;
  }
</style>
