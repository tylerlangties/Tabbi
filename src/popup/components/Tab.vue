<template>
  <div class="tab-wrapper">
    <close-icon v-on:removeTab="removeTab" color="black"></close-icon>
    <div>
      <div @click="highlightTab" class="tab">
        <img class="tab-favicon" :src="tab.favIconUrl">
        <h4 class="tab-title">{{tab.title}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from './Icons/CloseIcon.vue';
export default {
  components: {
    CloseIcon,
  },
  props: {
    tab: {
      type: Object,
      required: true,
    },
  },
  methods: {
    highlightTab() {
      chrome.tabs.highlight({ tabs: this.tab.index });
    },
    removeTab() {
      chrome.tabs.remove(this.tab.id);
      this.$emit('removeTab', this.tab.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-wrapper {
  background-color: #f5f5f5;
  border-radius: 3px;
  padding: 0.5rem;
  margin: 0.25rem 0;
  &:hover {
    background-color: #dbdbdb;
    cursor: pointer;
    transition: all 150ms ease;
    span {
      opacity: 1;
      transition: all 300ms;
    }
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    z-index: 5;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    &-favicon {
      height: 30px;
      margin-right: 0.5rem;
    }
    &-title {
      margin: 0;
    }
  }
  span {
    opacity: 0;
  }
}
</style>
