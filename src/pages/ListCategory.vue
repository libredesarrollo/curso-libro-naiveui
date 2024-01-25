<template>
  <!-- <h1>List Categories</h1> -->

  <n-button type="primary">
    <router-link :to="{ name: 'save-category' }">Create</router-link>
  </n-button>

  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="c in categories" :key="c.id">
        <td>{{ c.title }}</td>
        <td>
          <n-button type="primary">
            <router-link
              :to="{ name: 'list-element', params: { type: 'c', id: c._id } }"
              >Elements</router-link
            >
          </n-button>

          <router-link :to="{ name: 'save-category', params: { id: c._id } }"
            class="ml-2" >Edit</router-link
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
      categories: [],
    };
  },
  mounted() {
    this.$axios
      .get(this.$root.urlCRUDCategory)
      .then((res) => {
        this.categories = res.data;
      });
  },
};
</script>