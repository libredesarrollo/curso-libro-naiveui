<template>
    <router-view></router-view>
</template>
<script>
const urlCRUD = "https://crudcrud.com/api/9555d20f81ea4896b838a378f51872fa";

export default {
  data() {
    return {
      urlCRUD: urlCRUD,
      urlCRUDElement: urlCRUD + "/element",
      urlCRUDCategory: urlCRUD + "/category",
      urlCRUDType: urlCRUD + "/type",
    };
  },
};
</script>
