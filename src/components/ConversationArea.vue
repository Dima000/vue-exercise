<template>
  <div class="conversation-area">
    <conversation-area-message
        v-for="item in conversation"
        :key="item.id"
        :message="item" />
  </div>
</template>

<script>
  import ConversationAreaMessage from './ConversationAreaMessage';
  import { mapGetters } from 'vuex';

  export default {
    name: 'ConversationArea',
    components: { ConversationAreaMessage },
    computed: {
      ...mapGetters([
        'conversation',
      ])
    },
  }
</script>

<style scoped>
  .conversation-area {
    max-width: 500px;
    width: 100%;
    max-height: 400px;
    height: 100%;
    overflow-y: auto;
    margin: -16px 0;
    padding: 8px;
  }
</style>
