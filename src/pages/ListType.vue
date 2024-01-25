<template>
  <n-button type="primary">
    <router-link :to="{ name: 'save-type' }">Create</router-link>
  </n-button>
  <n-table :bordered="true" :single-line="false" class="my-table">
    <thead>
      <tr>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="t in tipes" :key="t.id">
        <td>{{ t.title }}</td>
        <td>
          <n-button type="primary">
            <router-link
              :to="{ name: 'list-element', params: { type: 't', id: t._id } }"
              >Elements</router-link
            >
          </n-button>

          <router-link :to="{ name: 'save-type', params: { id: t._id } }"
            class="ml-2" >Types</router-link
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
      tipes: [],
    };
  },
  mounted() {
    this.$axios
      .get(this.$root.urlCRUDType)
      .then((res) => {
        this.tipes = res.data;
      });
  },
};
</script>