<template>
  <q-page class="level">
    <canvas ref="screen" class="screen" />
  </q-page>
</template>

<script>
import WinCheck from "../js/WinCheck";
import LevelData from "../js/LevelData";
import LevelManager from "../js/LevelManager";
import LevelController from "../js/LevelController";

export default {
  name: "Level",
  props: {
    levelId: String
  },
  mounted() {
    // Get canvas and context
    this.data = new LevelData();
    this.level = new LevelManager();
    this.controller = new LevelController(this.$refs["screen"]);
    this.check = new WinCheck();

    // Register listeners
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
    this.$root.$on("toggleDrawerEvent", this.onResize.bind(this));
    requestAnimationFrame(this.tick.bind(this));
  },
  methods: {
    tick(time) {
      const ctx = this.$refs["screen"].getContext("2d", {
        alpha: false
      });

      // Update controller and apply to data
      if (this.controller.update(this.data)) {
        let result = this.check.check(this.levelId, this.data);
        this.$emit("checkResult", result);
      }
      this.level.render(ctx, this.data);

      requestAnimationFrame(this.tick.bind(this));
    },
    onResize() {
      const canvas = this.$refs["screen"];
      const h = canvas.offsetWidth;
      const w = canvas.offsetHeight;
      canvas.width = w * 2;
      canvas.height = h * 2;
    }
  }
};
</script>

<style>
.level {
  background-color: black;
}
.screen {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
}
</style>
