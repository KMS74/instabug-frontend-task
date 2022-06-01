<template>
  <div class="not-found">
    <div class="not-found__img">
      <img src="../assets/404.svg" alt="404" />
    </div>
    <div class="not-found__content">
      <h2>404 - Page Not Found!</h2>
      <p>Sorry, that page dosn't exits. What would like to do?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style lang="scss" scoped>
.not-found {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  &__content {
    margin: 20px 0;

    h2 {
      color: #00287a;
      margin: 10px;
    }
    p {
      color: #a6a6a6;
    }
  }
}
</style>
