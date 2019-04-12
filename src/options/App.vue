<template>
  <div class="options-page">
    <h1 class="user-introduction">Hi There!</h1>
    <p class="user-message">
      There are no Custom Options yet. If you have a suggestion for an option, or if you are enjoying this extension, please leave a review!
      <br>Thanks!
    </p>
    <p>
      <strong>-Tabbi</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped lang="scss">
.options-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  .user-introduction {
    font-size: 2rem;
    font-weight: 600;
  }
  .user-message {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1rem;
  }
}
</style>
