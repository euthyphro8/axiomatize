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
  name: "T1",
  components: {
    Level,
    Hud
  },
  data() {
    return {
      id: "0-1",
      title: "Tutorial 01",
      last: null,
      next: "T2",
      axioms: [
        {
          objective: 1,
          description: "There exist exactly three points.",
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
