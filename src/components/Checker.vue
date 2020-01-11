<template lang='pug'>
  #checker
    .columns.is-centered(style='margin-top: 50px')
      .column.is-10
        form(@keydown.enter.prevent='check()')
          b-field
            b-input(
              v-mask="'###########'",
              v-model='idNumber',
              ref='checker',
              placeholder='Fill with an 11 digits Turkish ID number'
              expanded)
            p.control
              b-button(@click='check()') Check
    .columns.is-centered
      .column.is-10
        table.table.is-fullwidth.is-hoverable.is-narrow.is-bordered
          thead
            tr
              th(style="width: 10%")  No
              th(style="width: 10%")  Value
              th(style="width: 70%")  Message
              th(style="width: 10%")  Status
          tbody(v-for='(result, index) in results', :key='result[index]')
            tr
              td(style="width: 10%") {{index+1}}
              td(style="width: 10%") {{result.value}}
              td(style="width: 70%") {{result.display}}
              td(style="width: 10%")
                b-tag(:type='result.status ? "is-success" : "is-danger"') {{result.status}}

</template>

<script>
let checkId = require("turkish-id-checker");
export default {
  data() {
    return {
      idNumber: "",
      results: []
    };
  },
  mounted() {
    this.$refs.checker.focus();
  },
  methods: {
    snackbar(message) {
      this.$buefy.snackbar.open({
        duration: 5000,
        position: "is-bottom",
        type: "is-primary",
        queue: false,
        message
      });
    },
    check() {
      this.$refs.checker.focus();
      if (this.idNumber.length) {
        let result = checkId(this.idNumber);
        result.value = this.idNumber;
        this.results.push(result);
        if (result.status) {
          this.idNumber = "";
        }
        this.snackbar(result.display);
      }
    }
  }
};
</script>

<style lang="scss">
#checker {
  margin: 2vh;
  td, th{
    text-align: center;
  }
}
</style>