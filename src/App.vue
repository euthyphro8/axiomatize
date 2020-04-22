<template>
  <div id="q-app">
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
      rel="stylesheet"
    />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  overflow: hidden;
  font-family: "Montserrat", sans-serif;
}
body {
  overflow: hidden;
}
</style>
