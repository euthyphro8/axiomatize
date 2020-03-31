<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Axiomatize
        </q-toolbar-title>

        <div>Axiomatize v{{ $q.version }}</div>
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
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "3-Point Geometry",
          caption: "Explore the Axioms of a 3-Point Geometry",
          icon: "looks_one",
          link: "#/1-1"
        },
        {
          title: "Level Two",
          caption: "",
          icon: "looks_two",
          link: "#/1-2"
        },
        {
          title: "Level Three",
          caption: "",
          icon: "looks_3",
          link: "#/1-3"
        },
        {
          title: "Level Four",
          caption: "",
          icon: "looks_4",
          link: "#/1-4"
        },
        {
          title: "Level Five",
          caption: "",
          icon: "looks_5",
          link: "#/1-5"
        },
        {
          title: "Level Six",
          caption: "",
          icon: "looks_6",
          link: "#/1-6"
        }
      ]
    };
  }
};
</script>
