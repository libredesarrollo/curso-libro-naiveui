<template>
<button @click="add()">Add</button>
  <table >
    <thead>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(d, index) in data" :key="d.id">
        <td>{{ d.id }}</td>
        <td>{{ d.title }}</td>
        <td>
          <button @click="remove(index)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: 1,
          title: 'Test 1'
        },
        {
          id: 2,
          title: 'Test 2'
        }
      ],
    };
  },
  methods: {
    add(){

      // this.data = [...this.data,
      // {
      //     id: Date(),
      //     title: 'Test'
      //   }];

        this.data = [].concat(this.data, {
          id: Date(),
          title: 'Test'
        });

       
        console.log(this.data)
    },
    remove(index){
        this.data.splice(index,1)
        // delete this.data[index]
        console.log(this.data)
    }
  },

};
</script>