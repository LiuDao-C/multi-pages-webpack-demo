<template>
  <div>
    <h1 class="h1">{{ title }}</h1>
    <p>{{ date }}</p>
  </div>
</template>

<script>
import formDate from '../../public/utils/formDate';
export default {
  data() {
    return {
      title: '修改后的页面2',
      date: '2022-08-23',
    };
  },

  mounted() {
    this.date = formDate(this.date);
  },
};
</script>

<style lang="scss">
h1 {
  color: rebeccapurple;
}
</style>
