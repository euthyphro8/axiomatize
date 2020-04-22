<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page>
        <div class="play">
          <q-btn
            class="bg-primary"
            style="width: 100%; height: 100%; max-width: 50vh; min-height: 30vh;"
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
        <div class="credit" @click="onCredit">
          <hr />
          JOSH <br />
          HESS
          <hr />
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
  methods: {
    onCredit() {
      window.open("https://joshhess.info");
    }
  }
};
</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
.play {
  position: absolute;
  top: 48px;
  bottom: calc(50% + 48px);
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
  height: 100vw;
}
.logo > img {
  height: 100%;
  width: 100%;
}
.credit {
  color: #f3ba38;
  cursor: pointer;
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 85px;
  height: 90px;
  text-align: center;
  font-size: 1.4em;
  font-weight: 50;
}
.credit:hover {
  color: #eed9a8;
}
hr {
  width: 80%;
  background: #f3ba38;
  border: none;
  height: 2px;
  margin: 6px auto;
}
</style>
