<template>
  <div class="popup">
    <div class="search-wrapper">
      <label>Search title:</label>
      <input
        @keydown="test"
        tabindex="0"
        ref="searchbar"
        type="text"
        v-model="search"
        placeholder="Search tabs.."
      >
    </div>
    <div v-if="tabs">
      <Tab
        ref="test"
        :class="{ focus: index === focus }"
        v-on:removeTab="removeTab"
        v-for="tab, index in filteredTabs"
        :key="tab.id"
        :tab="tab"
      ></Tab>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Tab from './components/Tab.vue';
export default {
  components: {
    Tab,
  },
  data() {
    return {
      tabs: null,
      search: '',
      focus: null,
    };
  },
  mounted() {
    this.loadState(() => {
      if (this.tabs) {
        console.log('tabs are valid');
        this.$nextTick(() => this.$refs.searchbar.focus());
      }
    });
  },
  methods: {
    removeTab(tabId) {
      this.tabs = this.tabs.filter(tab => tab.id !== tabId);
    },

    loadState(cb) {
      this.$chrome.storage.local.get(['key'], ({ key }) => {
        console.log('loaded controls', key);
        if (key) {
          this.tabs = key;
        }
        cb();
      });
    },
    test: function(event) {
      switch (event.keyCode) {
        case 38:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus > 0) {
            this.focus--;
          }
          break;
        case 40:
          if (this.focus === null) {
            this.focus = 0;
          } else if (this.focus < this.items.length - 1) {
            this.focus++;
          }
          break;
      }
    },
  },
  computed: {
    filteredTabs() {
      return this.tabs.filter(tab => {
        return tab.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
.popup {
  width: 300px;
  box-sizing: border-box;
  padding-bottom: 0;
  .search-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
    label {
      font-size: 18px;
      color: rgba(0, 0, 0, 0.5);
      top: 8px;
      left: 12px;
      z-index: -1;
      transition: 0.15s all ease-in-out;
      display: none;
    }
    input {
      padding: 4px 12px;
      font-size: 14px;
      border-radius: 3px;
      height: 30px;
      width: 75%;
      margin: 0 auto;
      color: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(0, 0, 0, 0.12);
      transition: 0.15s all ease-in-out;
      background: white;
      &:focus {
        outline: none;
        transform: scale(1.05);
        & + label {
          font-size: 10px;
          display: block;
        }
      }
      &::-webkit-input-placeholder {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
        font-weight: 100;
      }
    }
  }
  .tab-wrapper.focus {
    border: 1px solid blue;
  }
}
</style>
