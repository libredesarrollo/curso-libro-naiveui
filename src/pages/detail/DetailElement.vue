<template>
  <div v-if="element != Object" class="max-w-lg">
    <h1 class="text-4xl">
      {{ element.title }}
    </h1>
    <p class="text-sm mt-5">
      {{ element.price }}$
      <span class="float-right"
        >{{ element.category_id }} / {{ element.type_id }}</span
      >
    </p>
    <hr class="my-4">
    <p>{{ element.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      element: Object,
    };
  },
  mounted() {
    this.$axios
      .get(
        this.$root.urlCRUDElement +'/'+
          this.$route.params.id
      )
      .then((res) => {
        this.element = res.data;
      });
  },
};
</script>