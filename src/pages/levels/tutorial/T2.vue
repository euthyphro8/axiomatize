<template>
  <div>
    <Level :levelId="id" v-on:checkResult="updateComplete" />
    <Hud
      :levelTitle="title"
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
      title: "Tutorial 02",
      last: "T1",
      next: null,
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
      console.log(`Got results: ${JSON.stringify(result)}`);
      for (let a of this.axioms) {
        a.complete = result[a.objective - 1];
        console.log(JSON.stringify(a));
      }
    }
  }
};
</script>
