<!-- ilangin checkbox dari todolist container 
baru munculin pas di on going task
complete task disabled edit
list task cuma ada title sama tanggal (cek toDate untuk sorting, berdasarkan tanggal yg paling muda paling atas)
-->

<script lang="ts">
import { useTodoStore } from "./stores/todo";
import {
  BIconCheckAll,
  BIconTrash,
  BIconArrowDownCircleFill,
  BIconPencilFill,
  BIconSaveFill,
} from "bootstrap-icons-vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import draggable from "vuedraggable";
import moment from "moment";

// ganti ui jadi ke kiri dan ketika addTodo di trigger tambahin todo task ke samping dan seterusnya dalama card terpisah
export default {
  components: {
    BIconCheckAll,
    BIconTrash,
    BIconArrowDownCircleFill,
    BIconPencilFill,
    BIconSaveFill,
    VueDatePicker,
    draggable,
  },
  data() {
    return {
      checked: false,
      todoStore: useTodoStore(),
      newTodo: "",
      fromDate: "" as string,
      toDate: "" as string,
      displayedTodos: [] as any[],
      displayedCompletedTask: [] as any[],
      displayedOnGoingTask: [] as any[],
      createdAt: Date,
      editingIndex: null,
      isTest: false as boolean,
    };
  },
  methods: {
    addTodo() {
      // jika input value kosong maka jangan return apapun
      if (this.newTodo.trim() == "" || this.newTodo == null) {
        return;
      }
      // jika fromdate & toDate value ada maka lanjutkan kondisi
      if (this.fromDate && this.toDate) {
        // inisiasi variable yg tadinya string ke date agar bisa dibandingkan
        const updateFrom = new Date(this.fromDate);
        const updateTo = new Date(this.toDate);

        // jika updateTo tanggal atau hari atau jamnya kurang dari updateFrom hentikan kondisi
        if (updateTo <= updateFrom) {
          alert("invalid");
          return;
        }
        //method some nge filter data yg ada di dalam array, yg me return boolean
        const conditionSameDate = this.todoStore.todos.some((item) => {
          const from = new Date(item.fromDate);
          const to = new Date(item.toDate);
          return (
            (updateFrom >= from && updateTo < to) ||
            (updateTo > from && updateTo <= to)
          );
        });
        // jika conditionSamedate me return true maka jalankan kondisi ini
        if (conditionSameDate) {
          alert("uda diisi bro");
          return;
        }
      } else {
        alert("gabole kosong bre");
        return;
      }

      this.todoStore.addTodoFromPinia(
        this.newTodo,
        this.fromDate,
        this.toDate,
        this.checked
      );

      this.newTodo = "";
    },

    // sortin task dari yg paling baru
    sortTasks() {
      this.todoStore.todos.sort((a, b) => {
        if (a.todo > b.todo) {
          return -1;
        } else if (a.todo < b.todo) {
          return 1;
        } else {
          return 0;
        }
      });
    },

    // jika array.status yg di filter hasilnya true
    filterCompleted() {
      this.displayedCompletedTask = this.todoStore.todos.filter(
        (x) => x.status == true
      );

      // data ini untuk mendisplay todo yg status nya komplit untuk di print ke dalam container complete task
    },
    // jika array.status yg di filter hasilnya false

    // filterOngoing() {
    //   this.displayedOnGoingTask = this.todoStore.todos.filter(
    //     (x) => x.status == false
    //   );
    // },
    // tampilkan semua array
    filterAll() {
      this.displayedTodos = this.todoStore.todos;
    },

    // display semua task
    newValue() {
      return (this.displayedTodos = this.todoStore.todos);
    },

    // remove index
    removeTodo(i: number) {
      this.todoStore.removeTodo(i);
      this.sortTasks();

      this.displayedTodos = this.todoStore.todos;
    },
    editedDate() {},

    formatDate(stringDate: string) {
      return moment(stringDate).format("MM/DD/YYYY HH:mm");
    },

    isEditing(index: any) {
      this.editingIndex = index;
    },
    taskComplete(index: number) {
      this.checked = !this.checked;
      this.displayedCompletedTask = this.displayedTodos.filter(
        (x) => x.status == true
      );

      console.log(this.checked);
      console.log(this.displayedTodos);
      console.log(this.displayedTodos[index]);

      this.displayedCompletedTask.push({
        todo: this.displayedTodos[index].todo,
        fromDate: this.displayedTodos[index].fromDate,
        toDate: this.displayedTodos[index].toDate,
        status: this.checked,
      });
    },
  },
  mounted() {
    // nge declare todoStore ke dalam displayedTodos agar setiap browser reload todo task selalu ke display
    this.displayedTodos = this.todoStore.todos;
    this.newValue();
    console.log(this.todoStore.todos);
  },
};
</script>

<template>
  <div class="bg-dark">
    <div
      class="container d-flex justify-content-center align-items-center py-2"
    >
      <div class="">
        <div class="d-flex align-items-center">
          <input
            v-model="newTodo"
            placeholder="Add a new todo"
            class="rounded-pill p-2 border-1 w-100"
          />
          <button
            @click="addTodo()"
            class="rounded-pill py-2 bg-transparent border-1 bg-transparent border-0"
          >
            <BIconArrowDownCircleFill class="text-white fs-3" />
          </button>
        </div>
        <div class="d-flex">
          <div class="w-100">
            <P class="mb-0 mt-1">from: </P>
            <VueDatePicker v-model="fromDate" />
          </div>
          <div class="w-100">
            <P class="mb-0 mt-1">to:</P>
            <VueDatePicker v-model="toDate" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="all col-3 p-0">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>todo list</h3>
        </div>
        <draggable v-model="displayedTodos" item-key="id" group="task-list">
          <template #item="{ element, index }">
            <div class="card col-12 my-2">
              <div
                class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
              >
                <!-- <input
                  type="checkbox"
                  v-model="checked"
                  class="me-2"
                  @click="taskComplete(index)"
                /> -->

                <div v-if="editingIndex === index">
                  <form>
                    <input
                      type="text"
                      class="m-0 border-0 fs-5 ps-2 w-100 rounded-pill"
                      v-model="element.todo"
                    />
                  </form>
                </div>
                <div v-else>
                  <p>{{ element.todo }}</p>
                </div>
                <p
                  :class="{
                    'd-block rounded-pill bg-success p-1': element.status,
                    'd-none': !element.status,
                  }"
                  class="complete-text"
                >
                  completed
                </p>
                <div>
                  <BIconPencilFill
                    class="m-2 text-white"
                    :class="{
                      'opacity-25': editingIndex == index,
                      'opacitiy-100 cursor-pointer': editingIndex != index,
                    }"
                    @click="isEditing(index)"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="" @click="editedDate">
                  <p>from: {{ formatDate(element.fromDate) }}</p>
                  <p>to: {{ formatDate(element.toDate) }}</p>
                </div>
              </div>
              <button
                @click="removeTodo(index)"
                class="border-0 rounded-circle p-2 bg-transparent"
              >
                <BIconTrash class="fs-3 text-danger" />
              </button>
            </div>
          </template>
        </draggable>
      </div>
      <div class="all col-3 p-0">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>on going task</h3>
        </div>
        <draggable
          v-model="displayedOnGoingTask"
          item-key="id"
          group="task-list"
        >
          <template #item="{ element, index }">
            <div class="card col-12 my-2">
              <div
                class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
              >
                <!-- <input
                  type="checkbox"
                  v-model="element.status"
                  disabled
                  class="me-2 opacity-0"
                /> -->
                <input
                  type="checkbox"
                  v-model="checked"
                  class="me-2"
                  @click="taskComplete(index)"
                />
                <div>
                  <form>
                    <input
                      type="text"
                      class="m-0 border-0 fs-5 ps-2 w-100 rounded-pill"
                      v-model="element.todo"
                    />
                  </form>
                </div>

                <p
                  :class="{
                    'd-block rounded-pill bg-success p-1': element.status,
                    'd-none': !element.status,
                  }"
                  class="complete-text"
                >
                  completed
                </p>
                <div>
                  <BIconPencilFill
                    class="m-2 text-white"
                    :class="{
                      'opacity-25': editingIndex == index,
                      'opacitiy-100 cursor-pointer': editingIndex != index,
                    }"
                    @click="isEditing(index)"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="" @click="editedDate">
                  <p>from: {{ formatDate(element.fromDate) }}</p>
                  <p>to: {{ formatDate(element.toDate) }}</p>
                </div>
              </div>
              <button
                @click="removeTodo(index)"
                class="border-0 rounded-circle p-2 bg-transparent"
              >
                <BIconTrash class="fs-3 text-danger" />
              </button>
            </div>
          </template>
        </draggable>
      </div>

      <div class="complete col-3 p-0">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>complete task</h3>
        </div>
        <draggable
          v-model="displayedCompletedTask"
          item-key="id"
          group="task-list"
        >
          <template #item="{ element, index }">
            <div class="card col-12 my-2">
              <div
                class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
              >
                <input
                  type="checkbox"
                  v-model="element.status"
                  disabled
                  class="me-2 opacity-0"
                />

                <div v-if="editingIndex === index">
                  <form>
                    <input
                      type="text"
                      class="m-0 border-0 fs-5 ps-2 w-100 rounded-pill"
                      v-model="element.todo"
                    />
                  </form>
                </div>
                <div v-else>
                  <p>{{ element.todo }}</p>
                </div>
                <p
                  :class="{
                    'd-block rounded-pill bg-success p-1': element.status,
                    'd-none': !element.status,
                  }"
                  class="complete-text"
                >
                  completed
                </p>
                <div>
                  <BIconPencilFill
                    class="m-2 text-white"
                    :class="{
                      'opacity-25': editingIndex == index,
                      'opacitiy-100 cursor-pointer': editingIndex != index,
                    }"
                    @click="isEditing(index)"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="" @click="editedDate">
                  <p>from: {{ formatDate(element.fromDate) }}</p>
                  <p>to: {{ formatDate(element.toDate) }}</p>
                </div>
              </div>
              <button
                @click="removeTodo(index)"
                class="border-0 rounded-circle p-2 bg-transparent"
              >
                <BIconTrash class="fs-3 text-danger" />
              </button>
            </div>
          </template>
        </draggable>
      </div>
      <div class="task-list col-3 p-0">
        <div class="d-flex justify-content-center border border-1 w-100">
          <!-- tampilin semua task tanpa button delete & complete -->
          <h3>list task</h3>
        </div>
        <!-- <draggable v-model="displayedTodos" item-key="id">
          <template #item="{ element, index }">
            <div class="card col-12 my-2">
              <div
                class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
              >
                <input
                  type="checkbox"
                  v-model="element.status"
                  disabled
                  class="me-2 opacity-0"
                />

                <div v-if="editingIndex === index">
                  <form>
                    <input
                      type="text"
                      class="m-0 border-0 fs-5 ps-2 w-100 rounded-pill"
                      v-model="element.todo"
                    />
                  </form>
                </div>
                <div v-else>
                  <p>{{ element.todo }}</p>
                </div>
                <p
                  disabled
                  :class="{
                    'd-block rounded-pill bg-success p-1': element.status,
                    'd-none': !element.status,
                  }"
                  class="complete-text opacity-0"
                >
                  completed
                </p>
                <div class="opacity-0" disabled>
                  <BIconPencilFill
                    class="m-2 text-white"
                    :class="{
                      'opacity-25': editingIndex == index,
                      'opacitiy-100 cursor-pointer': editingIndex != index,
                    }"
                    @click="isEditing(index)"
                  />
                </div>
              </div>
              <div class="card-body">
                <div class="" @click="editedDate">
                  <p>from: {{ formatDate(element.fromDate) }}</p>
                  <p>to: {{ formatDate(element.toDate) }}</p>
                </div>
              </div>
              <button
                @click="removeTodo(index)"
                disabled
                class="border-0 rounded-circle p-2 bg-transparent opacity-0"
              >
                <BIconTrash class="fs-3 text-danger" />
              </button>
            </div>
          </template>
        </draggable> -->
      </div>
    </div>
  </div>
  <!-- <div class="card py-2 px-3 rounded border-2 border-black">
    <h3>TODO APP</h3>
    <div class="my-3 d-flex flex-column">
      <input
        v-model="newTodo"
        placeholder="Add a new todo"
        class="rounded-pill p-2 border-1"
      />
      <div class="d-flex">
        <div class="w-100">
          <P class="mt-2">from: </P>
          <VueDatePicker v-model="fromDate" />
        </div>
        <div class="w-100">
          <P class="mt-2">to:</P>
          <VueDatePicker v-model="toDate" />
        </div>
      </div>

      <div class="d-flex w-100 justify-content-between">
        <button
          class="rounded-pill me-2 w-100 bg-transparent border-1"
          @click="filterCompleted"
        >
          completed task
        </button>
        <button
          class="rounded-pill ms-2 w-100 bg-transparent border-1"
          @click="filterOngoing"
        >
          on going task
        </button>
      </div>
      <button
        class="rounded-pill w-100 bg-transparent border-1"
        @click="filterAll"
      >
        all
      </button>
    </div>
    <ul class="card-content overflow-auto list-unstyle ps-0">
      <draggable v-model="displayedTodos" item-key="id">
        <template #item="{ element, index }">
          <li class="mt-3">
            <div v-for="(task, index) in displayedCompletedTask" :key="index">
              {{ task.todo }}
              {{ task.fromDate }}
              {{ task.toDate }}
            </div>
            <div
              class="test d-flex justify-content-between align-items-center border p-2 rounded-pill"
            >
              <div class="d-flex align-items-center position-relative">
                <input type="checkbox" v-model="element.status" class="me-2" />

                <span class="checkmark"></span>
                <div class="">
                  <div class="d-flex align-items-center">
                    <form action="">
                      <input
                        type="text"
                        class="m-0 border-0 fs-4 ps-2"
                        v-model="element.todo"
                      />
                    </form>
                    <p
                      :class="{
                        'd-block rounded-pill bg-success p-1': element.status,
                        'd-none': !element.status,
                      }"
                      class="complete-text"
                    >
                      completed
                    </p>
                  </div>
                  <div class="d-flex" @click="editedDate">
                    <VueDatePicker v-model="element.fromDate" />
                    <VueDatePicker v-model="element.toDate" />
                  </div>
                </div>
              </div>

              <button
                @click="removeTodo(index)"
                class="border-0 rounded-circle p-2 bg-transparent"
              >
                <BIconTrash class="fs-3 text-danger" />
              </button>
            </div>
          </li>
        </template>
      </draggable>
    </ul>
    <div class="footer">
      <button
        @click="addTodo()"
        class="rounded-pill w-100 py-2 bg-transparent border-1"
      >
        Add Todo
      </button>
    </div>
  </div> -->
</template>

<style lang="scss">
.bg-dark {
  p {
    color: white;
  }
}

p {
  margin-bottom: 0 !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>
