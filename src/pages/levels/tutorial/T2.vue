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
  name: "T2",
  components: {
    Level,
    Hud
  },
  data() {
    return {
      id: "0-2",
      title: "Tutorial 2",
      subtitle: "Where I Draw the Line",
      last: "T1",
      next: "B1",
      axioms: [
        {
          objective: 1,
          description: "There exists at least one line.",
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
