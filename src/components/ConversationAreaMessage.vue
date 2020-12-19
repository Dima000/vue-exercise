<template>
  <div class="conversation-area__message" :class="{'right-side': isOwnMessage}">
    <img :src="message.from.thumbnail"
         :alt="message.from.name"
         :title="tooltipText"
         class="message-image">
    <div class="message-text" v-html="message.message">
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'ConversationAreaMessage',
    props: {
      message: Object
    },
    computed: {
      ...mapGetters(['currentUser']),
      isOwnMessage() {
        return this.message.from.id === this.currentUser.id;
      },
      tooltipText() {
        let { firstName, lastName } = this.message.from;
        return `${firstName || ''} ${lastName || ''}`.trim();
      }
    }
  }
</script>

<style scoped>
  .conversation-area__message {
    display: flex;
    align-items: flex-end;
    margin: 12px 0;
  }

  .message-image {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    order: 1;
  }

  .message-text {
    padding: 8px;
    border-radius: 8px;
    width: calc(60% - 48 - 12);
    background-color: lightgray;
    margin: 0 0 0 12px;
    order: 1;
    text-align: left;
    white-space: pre-wrap;
  }

  .conversation-area__message.right-side {
    justify-content: flex-end;
  }

  .conversation-area__message.right-side .message-image {
    order: 2;
  }

  .conversation-area__message.right-side .message-text {
    order: 1;
    background-color: lightblue;
    margin: 0 12px 0 0;
  }

</style>
