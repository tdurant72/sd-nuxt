<template>
  <main>
    <div class="background">
      <app-masthead/>
    </div>
    <div class="headings">
      <h1>Tacos
    <br>I love tocos
    </h1>
    </div>
    <div class="links"><p>Go follow me</p></div>
    <div class="nextpage">Projects</div>
    
    
  </main>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";

export default {
  components: {
    AppMasthead
  }
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: calc(100vh - 100px);
  display: grid;
  grid-template-columns: repeat(2, 100px) repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr) 50px 100px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.background {
  grid-area: 1 / 3 / 5 / 6;
}
.headings {
  grid-area: 2 / 2 / 3 / 6;
}
.links {
  padding: 30px;
  grid-area: 5 / 1 / 6 / 5;
}
.nextpage {
  background: #eee;
  color: black;
  padding: 30px;
  grid-area: 4 / 5 / 6 / 6;
}
</style>