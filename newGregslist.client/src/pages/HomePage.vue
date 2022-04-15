<template>
  <div class="container-fluid home">
    <div class="row">
      <div class="col-12">
        <h1 class="text-primary text-center p-4">Welcome to the Game</h1>
      </div>
      <div class="col-12 d-flex justify-content-center">
        <img
          src="https://th.bing.com/th/id/OIP.BwsNemnOI7NwGvTeuG4U3AHaEK?pid=ImgDet&rs=1"
          alt="Anonymous Mask"
          class="mainPic selectable"
          @click="rickRoll()"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  setup() {
    return {
      async rickRoll() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      }
    };
  }
}
</script>

<style scoped lang="scss">
.home {
  background: #000000;
  height: 100vh;
}
.mainPic {
  filter: hue-rotate(180deg);
  border-radius: 8px;
}
.mainPic:hover {
  transform: scaleX(-1);
}
</style>
