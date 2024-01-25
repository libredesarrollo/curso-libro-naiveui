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
      type: "",
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
      await this.getType();
      // init
      this.initType();
    }
  },

  methods: {
    async getType() {
      this.type = await this.$axios.get(
        this.$root.urlCRUDType +'/'+
          this.$route.params.id
      );

      this.type = this.type.data;
    },

    initType() {
      this.form.title = this.type.title;
      this.form.url_clean = this.type.url_clean;
    },

    submit() {
      this.cleanForm();

      if (this.type == "")
        return this.$axios
          .post(this.$root.urlCRUDType, this.form)
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
          .put(this.$root.urlCRUDType  +'/'+
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