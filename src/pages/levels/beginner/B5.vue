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
      id: "1-5",
      title: "Beginner 5",
      subtitle: "Geometry of Pappus",
      last: "B4",
      next: null,
      axioms: [
        {
          objective: 1,
          description: "There exists at least one line.",
          complete: false
        },
        {
          objective: 2,
          description: "Every line has exactly three points.",
          complete: false
        },
        {
          objective: 3,
          description: "Not all points are on the same line.",
          complete: false
        },
        {
          objective: 4,
          description:
            "If a point, P, is not on a given line, l, then " +
            "there is exactly one line, m, that contains P " +
            "and is parallel to l.",
          complete: false
        },
        {
          objective: 5,
          description:
            "If P is a point that is not on a line, l, then " +
            "there exists exactly one point P' on l such that " +
            "no line contains both P and P'.",
          complete: false
        },
        {
          objective: 6,
          description:
            "With the exception of Axiom 5, if P and Q are " +
            "distinct points, then exactly one line contains " +
            "them both.",
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
