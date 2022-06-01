<template>
  <div class="login">
    <login-slider />
    <login-form />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import LoginSlider from "@/components/LoginSlider.vue";
export default {
  name: "LoginView",
  components: { LoginForm, LoginSlider },
};
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 90vw;
  height: 100vh;
}
</style>
