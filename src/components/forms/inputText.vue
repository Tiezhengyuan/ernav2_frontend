<template>
  <div class="container input-text">
    <div class="name">
      <label>{{ data.label }}</label>
    </div>
    <div class="value">
      <input type="text" :name="data.name" :value="data.value" @keyup="add" />
    </div>
  </div>
</template>

<script>
export default {
  name: "inputText",
  props: ["data", "receive"],
  methods: {
    add(e) {
      const obj = [this.data.name, e.target.value];
      this.receive(obj);
    },
  },
};
</script>

<style scoped>
.container.input-text {
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
}
.container.input-text .name {
  padding-right: 10px;
  display: flex;
  justify-content: right;
}
</style>
