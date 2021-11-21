<template>
  <v-card-text>
    <input type="text" v-model="studentName" placeholder="Nom de l'élève">
    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <button @click="showComment">GO !</button>
    <hr class="my-3">
    <p>Prévisualisation :</p>
    <p>{{comment}}</p>
    <copy-button :comment="comment"></copy-button>
    <button @click="showComment">Regénérer</button>
  </v-card-text>
</template>

<script>
import * as DataService from "../services/dataService";
import CopyButton from "./CopyButton";

export default {
  name: "CommentGenerator",
  components: {
    CopyButton
  },
  data() {
    return {
      studentName: "",
      options: [
        { text: 'Evaluation positive', value: 2 },
        { text: 'Evaluation neutre', value: 1 },
        { text: 'Evaluation négative', value: 0 }
      ],
      selected: 2,
      comment: "",
    }
  },
  methods: {
    showComment() {
      this.comment = DataService.getData(this.selected, this.studentName);
    }
  }
}
</script>

<style scoped lang="scss">
  input, select, button {
    background: burlywood;
    color: black;
    padding: 5px 15px;
  }

  button:hover {
    background: chocolate;
  }

  select {
    cursor: pointer;
  }
</style>
