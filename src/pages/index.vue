<script setup lang="ts">
import { type MaisonRecord } from "@/types";
import MaisonCard from "@/components/MaisonCard.vue";
import { pb } from "@/backend";
//
const maisonsListe = await pb.collection("Maison").getFullList();

console.log (maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard v-for="maison in maisonsListe" v-bind="maison" :key="maison.id"></MaisonCard>
</template>