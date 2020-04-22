<template>
  <q-page class="hud">
    <q-card class="nav">
      <q-btn style="width:48px;" @click="navigate('Menu')">
        <q-icon name="menu" />
        <q-tooltip anchor="center right" self="center middle">
          Menu
        </q-tooltip>
      </q-btn>
      <q-btn
        style="width:48px;"
        @click="navigate(lastName)"
        :disable="lastName === null"
      >
        <q-icon name="arrow_back" />
        <q-tooltip anchor="center right" self="center middle">
          Last Level
        </q-tooltip>
      </q-btn>
      <q-btn
        style="width:48px;"
        @click="navigate(nextName)"
        :disable="nextName === null"
      >
        <q-icon name="arrow_forward" />
        <q-tooltip anchor="center right" self="center middle">
          Next Level
        </q-tooltip>
      </q-btn>
      <q-btn style="width:48px;" @click="$router.go(0)">
        <q-icon name="cached" />
        <q-tooltip anchor="center right" self="center middle">
          Restart
        </q-tooltip>
      </q-btn>
    </q-card>

    <q-card class="title">
      <q-toolbar-title style="text-align: center; margin-top:16px;">
        {{ levelSubtitle }}
      </q-toolbar-title>
      <hr />
      <div class="italic" style="text-align: center; ">
        <i>{{ levelTitle }}</i>
      </div>
    </q-card>

    <q-card class="tools">
      <q-btn style="width:48px;">
        <q-icon name="radio_button_unchecked" :size="'8px'" />
        <q-tooltip anchor="center left" self="center middle">
          Point
        </q-tooltip>
      </q-btn>
      <q-btn style="width:48px;">
        <q-icon name="timeline" />
        <q-tooltip anchor="center left" self="center middle">
          Line
        </q-tooltip>
      </q-btn>
      <q-btn style="width:48px;" @click="$store.commit('emitUndoCallback')">
        <q-icon name="undo" />
        <q-tooltip anchor="center left" self="center middle">
          Undo
        </q-tooltip>
      </q-btn>
      <q-btn style="width:48px;" @click="$store.commit('emitRedoCallback')">
        <q-icon name="redo" />
        <q-tooltip anchor="center left" self="center middle">
          Redo
        </q-tooltip>
      </q-btn>
    </q-card>
    <q-card class="info">
      <q-toolbar-title
        style="text-align: center; height: 40px; margin-top: 12px; letter-spacing: 4px; font-weight: 100;"
      >
        AXIOMS
      </q-toolbar-title>
      <q-scroll-area
        class="col"
        :thumb-style="thumbStyle"
        style="height: 150px;"
      >
        <q-list
          v-for="item in infoItems"
          :key="item.objective"
          bordered
          separator
        >
          <q-item clickable v-ripple :active="item.complete">
            <q-item-section side>{{ item.objective }}</q-item-section>
            <q-item-section>{{ item.description }}</q-item-section>
            <q-item-section avatar>
              <q-icon name="check_circle" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: "Hud",
  data() {
    return {
      thumbStyle: {
        right: "0px",
        borderRadius: "5px",
        backgroundColor: "#d47e2f",
        width: "8px",
        opacity: 0.75
      }
    };
  },
  props: {
    levelTitle: String,
    levelSubtitle: String,
    lastName: String,
    nextName: String,
    infoItems: Array
  },
  mounted() {},
  methods: {
    navigate(name) {
      console.log(`navigating to ${name}`);
      if (name) this.$router.push({ name: name });
    }
  }
};
</script>

<style>
.hud {
  pointer-events: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.title {
  pointer-events: auto;
  position: absolute;
  top: 16px;
  left: calc(50% - 200px);
  right: calc(50% - 200px);
  width: 400px;
  height: 96px;
}
.nav {
  pointer-events: auto;
  position: absolute;
  top: 8px;
  left: 8px;
  width: 48px;
  height: 144px;
}
.tools {
  pointer-events: auto;
  position: absolute;
  top: 8px;
  right: 8px;
  width: 48px;
  height: 144px;
}
.info {
  pointer-events: auto;
  position: absolute;
  bottom: 8px;
  left: calc(50% - 300px);
  right: calc(50% - 300px);
  width: 600px;
  height: 198px;
}
hr {
  width: 80%;
}
</style>
