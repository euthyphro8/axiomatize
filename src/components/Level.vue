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
  data() {
    return {
      request: null
    };
  },
  mounted() {
    // Get canvas and context
    this.checkFlag = false;
    this.data = new LevelData();
    this.level = new LevelManager();
    this.controller = new LevelController(this.$refs["screen"]);
    this.check = new WinCheck();

    this.$store.commit("registerUndoCallback", this.undoCallback.bind(this));
    this.$store.commit("registerRedoCallback", this.redoCallback.bind(this));
    // Register listeners
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
    this.$root.$on("toggleDrawerEvent", this.onResize.bind(this));
    this.request = requestAnimationFrame(this.tick.bind(this));
  },
  beforeDestroy() {
    cancelAnimationFrame(this.request);
  },
  methods: {
    tick(time) {
      const ctx = this.$refs["screen"].getContext("2d", {
        alpha: false
      });

      // Update controller and apply to data
      if (this.controller.update(this.data) || this.checkFlag) {
        this.checkFlag = false;
        let result = this.check.check(this.levelId, this.data);
        this.$emit("checkResult", result);
      }
      this.level.render(ctx, this.data);

      this.request = requestAnimationFrame(this.tick.bind(this));
    },
    onResize() {
      const canvas = this.$refs["screen"];
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    },
    undoCallback() {
      this.checkFlag = true;
      this.data.undo();
    },
    redoCallback() {
      this.checkFlag = true;
      this.data.redo();
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
