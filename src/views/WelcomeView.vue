<template>
  <div>
    <h1>Hello {{ username }}</h1>
    <button class="btn--logout" v-on:click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "WelcomeView",
  data() {
    return {
      username: window.localStorage.getItem("username"),
    };
  },
  methods: {
    logout() {
      window.localStorage.removeItem("username");
      this.$router.push({
        name: "login",
        query: { logout: null },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.btn--logout {
  margin: 20px 0;
  min-width: 150px;
  border-radius: 4px;
  border: none;
  background-color: #fff;
  cursor: pointer;
  padding: 0.4rem;
  font-size: 1rem;
  height: 40px;
  background-color: #00287a;
  color: #fff;
}
</style>
