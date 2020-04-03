<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Axiomatize
        </q-toolbar-title>

        <div>v0.4.8</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Levels | Beginner
        </q-item-label>
      </q-list>
    </q-drawer>

    <q-page-container>
      <q-page
        class="full-height row wrap justify-center items-start content-start"
      >
        <q-card class="level-card" v-for="level in levels" :key="level.id">
          <q-card-section>
            <div class="text-h6">{{ level.name }}</div>
            <div class="text-subtitle3">{{ level.quote }}</div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-btn flat :to="{ name: level.id }">Play</q-btn>
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
          id: "1-1",
          name: "3-Point Geometry",
          quote: "Some cool quote",
          link: "1-1"
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
.level-card {
  width: 200px;
  height: 200px;
}
</style>
