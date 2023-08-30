<script lang="ts">
import {
  BIconCheck,
  BIconTrash,
  BIconArrowDownCircleFill,
  BIconPencilFill,
} from "bootstrap-icons-vue";

export default {
  components: {
    BIconCheck,
    BIconTrash,
    BIconArrowDownCircleFill,
    BIconPencilFill,
  },
  data() {
    return {
      inputVal: "",
      isCheck: false,
    };
  },
  methods: {
    createTask() {
      this.inputVal;
    },

    doneTask() {
      this.isCheck = !this.isCheck;
      console.log(this.isCheck);
    },
  },
  // ...
};
</script>

<template>
  <div class="d-flex justify-content-center align-items-center w-100 h-100">
    <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-2">TODO APP</h5>
        <form action="" class="d-flex flex-column" @click.prevent="createTask">
          <label for="todo" class="ms-3 mb-1">What's your plan?</label>
          <div class="d-flex align-items-center">
            <input
              type="text"
              name="todo"
              placeholder="type here..."
              class="py-2 ps-3 rounded-pill border-1 h-100 w-100"
              v-model="inputVal"
            />
            <button class="border-0 bg-transparent">
              <BIconArrowDownCircleFill class="fs-3" />
            </button>
          </div>
        </form>
      </div>
      <div class="border-bottom border-1 border-dark"></div>
      <div class="card-body">
        <div class="d-flex align-items-center w-100">
          <button
            class="border-0 rounded-circle px-0"
            @click="doneTask"
            :class="{ 'bg-success': isCheck, 'bg-black': !isCheck }"
          >
            <BIconCheck class="fs-3 text-white" />
          </button>
          <h5
            class="mb-0 ms-2"
            style="width: 80%"
            :class="{ 'text-decoration-line-through ': isCheck }"
          >
            {{ inputVal }}
          </h5>
          <div class="d-flex justify-content-end w-100">
            <button>
              <BIconPencilFill />
            </button>
            <button>
              <BIconTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  width: 60vw;
  height: 60vh;
}
</style>
