<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="topbar">
    <span class="brand">Table Ticket</span>
    <nav aria-label="Main">
      <RouterLink to="/menu">Menu</RouterLink>
      <RouterLink to="/my-orders">My orders</RouterLink>
      <RouterLink to="/chef">Chef queue</RouterLink>
    </nav>
  </header>
  <main class="page">
    <RouterView />
  </main>
</template>
