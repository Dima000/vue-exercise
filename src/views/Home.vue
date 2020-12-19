<template>
  <div class="home sm:m-4 m-8">
    <conversation-area />
  </div>
</template>

<script>
  import ConversationArea from '../components/ConversationArea';

  export default {
    name: 'Home',
    components: { ConversationArea },
  }
</script>
