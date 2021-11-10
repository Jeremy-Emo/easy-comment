<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Commentaire facile !
        </v-card-title>
        <CommentGenerator />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CommentGenerator from "../components/CommentGenerator";

export default {
  components: {CommentGenerator}
}
</script>
