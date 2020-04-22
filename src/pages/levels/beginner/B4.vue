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
  name: "B1",
  components: {
    Level,
    Hud
  },
  data() {
    return {
      id: "1-4",
      title: "Beginner 4",
      subtitle: "Young's Geometry",
      last: "B3",
      next: "B5",
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
          description:
            "For each line l and each point P not on l, there exists exactly " +
            "one line on P that does not contain any points on l.",
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
