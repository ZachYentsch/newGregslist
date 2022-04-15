<template>
  <nav class="navbar navbar-expand-lg navbar-primary bg-primary px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img
          alt="logo"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/6873254d-c380-460a-a41f-fbf0a7cce980/d6rv2qa-072dac63-0ffa-4578-a199-172ffbfe5f7a.png"
          height="60"
          class="logo"
        />
      </div>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link
            :to="{ name: 'About' }"
            class="btn text-dark selectable text-uppercase"
          >
            <h6>About</h6>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Games' }"
            class="btn text-dark selectable text-uppercase"
          >
            <h6>Games</h6>
          </router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'Consoles' }"
            class="btn text-dark selectable text-uppercase"
          >
            <h6>Consoles</h6>
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.logo {
  filter: contrast(180%);
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
