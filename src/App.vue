<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap");

$primary: #445065;
$secondary: #0089e5;
$light-gray: #a6a6a6;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-family: "Roboto", sans-serif;
  color: $primary;
}
</style>
