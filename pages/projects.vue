<template>
    <main>
        <section>
         <h1>Projects page</h1>
         <div v-for="project in githubProjects" :key="project.id">
             <h3><a :href="project.html_url">{{project.name}}</a></h3>
             <p>{{project.description}}</p>
        </div>   
        </section>
        <aside>
            <h3>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea unde aut laudantium, dolorum dolores odit voluptatibus reprehenderit fugit iste quam consequatur nostrum praesentium consectetur libero deleniti at vel quisquam quaerat?</p>
        </aside>
    </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["githubProjects"])
  }
  //moved to plugin
  //   mounted() {
  //     this.$store.dispatch("getGithubProjects");
  //   }
};
</script>

<style lang="scss" scoped>
main {
  width: 80vw;
  margin: 2% 8%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 0px;
}

section {
  background: white;
  color: black;
  padding: 30px;
  grid-area: 1 / 1 / 2 / 2;
  a {
    color: black;
    cursor: pointer;
  }
  div {
    margin: 10px 0;
  }
}
aside {
  grid-area: 1 / 2 / 2 / 3;
}
</style>