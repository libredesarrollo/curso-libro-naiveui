<template>
  <form @submit.prevent="submit">
    <n-form-item
      label="Title"
      :feedback="errors.title"
      :validaiton-status="errors.title == '' ? 'success' : 'error'"
    >
      <n-input
        :status="errors.title == '' ? 'success' : 'error'"
        placeholder="Title"
        v-model:value="form.title"
        type="text"
      />
    </n-form-item>
    <n-form-item
      label="Slug"
      :feedback="errors.url_clean"
      :validaiton-status="errors.url_clean == '' ? 'success' : 'error'"
    >
      <n-input
        :status="errors.url_clean == '' ? 'success' : 'error'"
        placeholder="Slug"
        v-model:value="form.url_clean"
        type="text"
      />
    </n-form-item>
    <n-button class="mt-2" type="primary" attr-type="submit">Send</n-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      category: "",
      form: {
        title: "",
        url_clean: "",
      },
      errors: {
        title: "",
        url_clean: "",
      },
    };
  },

  async mounted() {
    if (this.$route.params.id) {
      // obtener la categoria
      await this.getCategory();
      // init
      this.initCategory();
    }
  },

  methods: {
    async getCategory() {
      this.category = await this.$axios.get(
        this.$root.urlCRUDCategory +'/'+
          this.$route.params.id 
      );

      this.category = this.category.data;
    },

    initCategory() {
      this.form.title = this.category.title;
      this.form.url_clean = this.category.url_clean;
    },

    submit() {
      this.cleanForm();

      if (this.category == "")
        return this.$axios
          .post(this.$root.urlCRUDCategory, this.form)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            if (error.response.data.title)
              this.errors.title = error.response.data.title[0];
            if (error.response.data.url_clean)
              this.errors.url_clean = error.response.data.url_clean[0];
          });

          this.$axios
          .put(this.$root.urlCRUDCategory +'/'+
          this.$route.params.id, this.form)
          .then((res) => {
            console.log(res.data);
          })
          .catch((error) => {
            if (error.response.data.title)
              this.errors.title = error.response.data.title[0];
            if (error.response.data.url_clean)
              this.errors.url_clean = error.response.data.url_clean[0];
          });
    },

    cleanForm() {
      this.errors.title = "";
      this.errors.url_clean = "";
    },
  },
};
</script>