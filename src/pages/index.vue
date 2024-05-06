<script setup lang="ts">
import { MaisonRecord } from "@/types";
import MaisonCard from "@/components/MaisonCard.vue";
//
const maisonsListe: MaisonRecord[] = 
  [
  {
    "adresse": "2821 Lake Sevilla, Palm Harbor, TX",
    "collectionId": "zqgjr7bhnrthg9e",
    "collectionName": "Maison",
    "created": "2024-05-03 08:29:11.160Z",
    "exclusive": true,
    "favoris": true,
    "id": "flvl4jxi3lhe193",
    "image": "r_architecture_p_0tn_q8hb70_unsplash_fXI04bnGPW.jpg",
    "nb_de_chambre": 4,
    "nb_salle_de_bain": 2,
    "nom": "Beverly Springfield",
    "price": 180000,
    "surface": 102,
    "updated": "2024-05-03 14:47:10.233Z"
  },
  {
    "adresse": "2699 Green Valley, Highland Lake",
    "collectionId": "zqgjr7bhnrthg9e",
    "collectionName": "Maison",
    "created": "2024-05-03 08:30:04.326Z",
    "exclusive": false,
    "favoris": false,
    "id": "netb50viztdgdwt",
    "image": "r_architecture_m6_e8_so73_mpy_unsplash_e3a21ngGH7.jpg",
    "nb_de_chambre": 4,
    "nb_salle_de_bain": 2,
    "nom": "Palm Harbor",
    "price": 168000,
    "surface": 97,
    "updated": "2024-05-03 14:46:58.074Z"
  },
  {
    "adresse": "909 Woodland St, Michigan, IN",
    "collectionId": "zqgjr7bhnrthg9e",
    "collectionName": "Maison",
    "created": "2024-05-03 08:30:50.446Z",
    "exclusive": true,
    "favoris": false,
    "id": "0r8mre723gjacp3",
    "image": "r_architecture_hqcw1g_tmjek_unsplash_NOPkSc7eTF.jpg",
    "nb_de_chambre": 4,
    "nb_salle_de_bain": 3,
    "nom": "Faulkner Ave",
    "price": 208000,
    "surface": 126,
    "updated": "2024-05-03 14:46:32.849Z"
  },
  {
    "adresse": "210 US Highway, HighlandLake, FL",
    "collectionId": "zqgjr7bhnrthg9e",
    "collectionName": "Maison",
    "created": "2024-05-03 08:31:24.584Z",
    "exclusive": false,
    "favoris": true,
    "id": "gq9l3m0vjrn1pjl",
    "image": "lotus_design_n_print_g51_f6_wyzy_u_unsplash_LstnXkOAfh.jpg",
    "nb_de_chambre": 4,
    "nb_salle_de_bain": 2,
    "nom": "St. Christal",
    "price": 176500,
    "surface": 87,
    "updated": "2024-05-03 14:46:13.787Z"
  },
  {
    "adresse": "243 CurlewRoad, PalmHarbor, TX",
    "collectionId": "zqgjr7bhnrthg9e",
    "collectionName": "Maison",
    "created": "2024-05-03 08:32:07.987Z",
    "exclusive": true,
    "favoris": false,
    "id": "0xjbpofvm0wd85b",
    "image": "kara_eads_l7_ew_hkq1_b2s_unsplash_gxknX819Eg.jpg",
    "nb_de_chambre": 4,
    "nb_salle_de_bain": 2,
    "nom": "Cover Red",
    "price": 195800,
    "surface": 107,
    "updated": "2024-05-03 14:45:56.719Z"
  }
]

console.log (maisonsListe)
</script>

<template>
  <h1 class="text-2xl">Bonjour monde !</h1>
  <MaisonCard/>
</template>