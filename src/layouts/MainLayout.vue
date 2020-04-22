<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <div class="play">
          <q-btn
            style="width: 100%; height: 100%; max-width: 60vh; min-height: 30vh;"
            outline
            rounded
            :to="{ name: 'Menu' }"
          >
            <q-icon
              class="col-8"
              style="width:100%; height:60%;"
              name="play_arrow"
              size="30vh"
              active="primary"
            >
            </q-icon>
            <div
              style="width: 100%; height: 40%; 
                  font-size: 10vh;
                  display: flex;
                  justify-content: center;
                  align-items: center;"
            >
              Play
            </div>
          </q-btn>
        </div>
        <div class="logo">
          <img src="~assets/TitleScreenCenter.svg" />
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.play {
  position: absolute;
  top: 64px;
  bottom: calc(50% + 64px);
  left: 20%;
  right: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.play > i {
  font-size: 20em;
}
.logo {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
}
.logo > img {
  height: 100%;
  width: 100%;
}
</style>
