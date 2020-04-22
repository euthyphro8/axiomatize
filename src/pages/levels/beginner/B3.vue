<template>
  <div>
    <Level :levelId="id" v-on:checkResult="updateComplete" />
    <Hud
      :levelTitle="title"
      :levelSubtitle="subtitle"
      :infoItems="axioms"
      :lastName="last"
      :nextName="next"
    />
  </div>
</template>

<script>
import Level from "../../../components/Level.vue";
import Hud from "../../../components/Hud.vue";

export default {
  name: "B3",
  components: {
    Level,
    Hud
  },
  data() {
    return {
      id: "1-3",
      title: "Beginner 3",
      subtitle: "Fanos's Geometry",
      last: "B2",
      next: "B4",
      axioms: [
        {
          objective: 1,
          description: "There exist at least one line.",
          complete: false
        },
        {
          objective: 2,
          description: "There are exactly three points on every line.",
          complete: false
        },
        {
          objective: 3,
          description: "Not all points are on the same line.",
          complete: false
        },
        {
          objective: 4,
          description: "There is exactly one line on any two distinct points.",
          complete: false
        },
        {
          objective: 5,
          description: "There is at least one point on any two distinct lines.",
          complete: false
        }
      ]
    };
  },
  mounted() {},
  methods: {
    updateComplete(result) {
      for (let a of this.axioms) {
        a.complete = result[a.objective - 1];
      }
    }
  }
};
</script>
