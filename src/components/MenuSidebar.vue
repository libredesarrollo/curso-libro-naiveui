<template>
  <n-menu :options="options"> </n-menu>
</template>

<script>
import { h } from "vue";
import { RouterLink } from "vue-router";
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  name: "list-element",
                },
              },
              { default: () => "Elementos" }
            ),
          key: "list type",
        },
      ],
    };
  },
  mounted() {
    this.categories();
    this.types();
  },
  methods: {
    types() {
      this.$axios
        .get(this.$root.urlCRUDType)
        .then((res) => {
          const optionType = [
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: "list-type",
                    },
                  },
                  { default: () => "List" }
                ),
              key: "list type",
            },
          ];
          res.data.forEach((t) => {
            optionType.push({
              label: () =>
                h(
                  RouterLink,
                  {
                    to: { name: 'list-element', params: { type: 't', id: t.id } },
                  },
                  { default: () => t.title }
                ),
              key: "t " + t.id,
            });
          });
          this.options.push({
            label: "Types",
            key: "2 parent",
            children: optionType,
          });
        });
    },
    categories() {
      this.$axios
        .get(this.$root.urlCRUDCategory)
        .then((res) => {
          const optionCate = [
            {
              label: () =>
                h(
                  RouterLink,
                  {
                    to: {
                      name: "list-category",
                    },
                  },
                  { default: () => "List" }
                ),
              key: "list cate",
            },
          ];
          res.data.forEach((c) => {
            optionCate.push({
              label: () =>
                h(
                  RouterLink,
                  {
                    to: { name: 'list-element', params: { type: 'c', id: c.id } },
                  },
                  { default: () => c.title }
                ),
              key: "c " + c.id,
            });
          });
          this.options.push({
            label: "Categories",
            key: "1 parent",
            children: optionCate,
          });
        });
    },
  },
};
</script>