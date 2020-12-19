<template>
  <div id="app">
    <notifications position="top left"/>
    <conversation-area/>
  </div>
</template>
<script>

  import ConversationArea from './components/ConversationArea';
  export default {
    name: 'app',
    components: { ConversationArea },
    mounted() {
      this.$store.dispatch('getConversation');
      this.$store.dispatch('getCurrentUser');
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .vue-notification {
    padding: 10px;
    margin: 0 5px 5px;

    font-size: 12px;

    color: #ffffff;
    background: #44A4FC;
    border-left: 5px solid #187FE7;

    &.warn {
      background: #ffb648;
      border-left-color: #f48a06;
    }

    &.error {
      background: #E54D42;
      border-left-color: #B82E24;
    }

    &.success {
      background: #68CD86;
      border-left-color: #42A85F;
    }
  }
</style>
