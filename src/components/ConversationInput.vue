<template>
  <form class="conversation-area__input" @submit.prevent="onSubmit">
    <textarea
        v-model="text"
        placeholder="Type your message here..."
        class="message-textarea"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="onSubmit"
    />
    <button type="submit" class="message-send-button">
      Send
    </button>
  </form>

</template>

<script>
  export default {
    name: 'ConversationInput',
    data() {
      return {
        text: ''
      }
    },
    methods: {
      addNewLine() {
        this.text += '\n';
      },
      onSubmit() {
        this.$emit('submit', this.text);
        this.text = '';
      }
    }
  }
</script>

<style scoped>
  .conversation-area__input {
    display: flex;
    margin-top: 12px;
  }

  .message-send-button {
    width: 60px;
    margin-left: 12px;
  }

  .message-textarea {
    flex: 1;
    border: 1px solid gray;
    max-height: 80px;
    padding: 8px;
  }

</style>
