<template>
  <q-layout view="lHh Lpr lFf">
    <div class="logo">
      <img src="~assets/TitleScreenCenter.svg" />
    </div>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Axiomatize
        </q-toolbar-title>
        <div>v0.5.1</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="menu-list row wrap justify-center items-start content-start"
      >
        <q-card class="level-card" v-for="level in levels" :key="level.id">
          <q-card-section style="height: 50px;">
            <span class="text-h6">{{ level.id }}</span>
          </q-card-section>

          <q-separator class="card-seperator" />

          <q-card-section style="height: 110px;">
            <div class="text-h6">{{ level.name }}</div>
            <div class="text-subtitle3">{{ level.quote }}</div>
          </q-card-section>

          <q-separator class="card-seperator" />

          <q-card-actions vertical>
            <q-btn flat :to="{ name: level.link }">Play</q-btn>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",

  components: {},

  data() {
    return {
      levels: [
        {
          id: "0-1",
          name: "Point Tutorial",
          quote: "What's the point?",
          link: "T1"
        },
        {
          id: "0-2",
          name: "Line Tutorial",
          quote: "Some cool quote",
          link: "T2"
        },
        {
          id: "1-1",
          name: "3-Point Geometry",
          quote: "Some cool quote",
          link: "B1"
        },
        {
          id: "1-2",
          name: "4-Point Geometry",
          quote: "Some other cool quote",
          link: "1-2"
        },
        {
          id: "1-3",
          name: "Young's Geometry",
          quote: "Oswald Veblen & John Wesley Young",
          link: "1-3"
        },
        {
          id: "1-4",
          name: "Fano's Geometry",
          quote: "Gino Fano",
          link: "1-4"
        },
        {
          id: "1-5",
          name: "Pappus' Geometry",
          quote: "Pappus of Alexandria",
          link: "1-5"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style>
.logo {
  /* width: 100%;
  height: 100%; */
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.menu-list {
  width: 680px;
  margin: 0 auto;
  padding: 8px 8px;
}
.card-seperator {
  width: 80%;
  margin: auto;
}
.level-card {
  width: 260px;
  height: 210px;
  margin: 8px 8px;
}
</style>
