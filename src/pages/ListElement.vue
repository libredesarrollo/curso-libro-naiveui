<template>
  <!-- <h1>Listado Categorías</h1> -->

  <n-button type="primary">
    <router-link :to="{ name: 'save-element' }">Create</router-link>
  </n-button>
  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="e in elements" :key="e._id">
        <td>{{ e._id }}</td>
        <td>{{ e.title }}</td>
        <td>{{ e.price }}</td>
        <td>
          <n-button type="primary">
            <router-link
              :to="{ name: 'detail-element', params: { id: e._id } }"
              >Show</router-link
            >
          </n-button>

          <router-link class="ml-2" :to="{ name: 'save-element', params: { id: e._id } }"
            >Edit</router-link
          >
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script>
export default {
  data() {
    return {
      elements: [],
    };
  },
  mounted() {
    let url = this.$root.urlCRUDElement;

    if (this.$route.params.type == "c")
      url =
        this.$root.urlCRUDCategory +
        this.$route.params.id +
        "/elements/?format=json";
    else if (this.$route.params.type == "t")
      url =
        this.$root.urlCRUDType +
        this.$route.params.id +
        "/elements/?format=json";

    this.$axios.get(url).then((res) => {
      this.elements = res.data.results ? res.data.results : res.data;
    });
  },
};
</script>