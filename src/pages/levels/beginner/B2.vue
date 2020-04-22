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
  name: "B2",
  components: {
    Level,
    Hud
  },
  data() {
    return {
      id: "1-2",
      title: "Beginner 2",
      subtitle: "4 Point Geometry",
      last: "B1",
      next: "B3",
      axioms: [
        {
          objective: 1,
          description: "There exist exactly four points.",
          complete: false
        },
        {
          objective: 2,
          description:
            "Any two distinct points have exactly one line on both of them.",
          complete: false
        },
        {
          objective: 3,
          description: "Each line is on exactly two points.",
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
