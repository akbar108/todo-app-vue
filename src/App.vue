<!-- ilangin checkbox dari todolist container 
baru munculin pas di on going task
complete task disabled edit
list task cuma ada title sama tanggal (cek toDate untuk sorting, berdasarkan tanggal yg paling muda paling atas)
-->

<!--  sort task, that sort all of the list in task list by date,
  always put recently add task on top and put all of the task that pass the toDate in the bottom -->

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
      displayedAllTask: [] as any[],
      createdAt: "",
      editingIndex: null,
      isTest: false as boolean,
      dummy: [{ num: 1 }, { num: 7 }, { num: 2 }, { num: 10 }] as any[],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() == "" || this.newTodo == null) {
        return;
      }
      if (this.fromDate && this.toDate) {
        const updateFrom = new Date(this.fromDate);
        const updateTo = new Date(this.toDate);

        if (updateTo <= updateFrom) {
          alert("invalid");
          return;
        }
        const conditionSameDate = this.todoStore.todos.some((item: any) => {
          const from = new Date(item.fromDate);
          const to = new Date(item.toDate);
          return (
            (updateFrom >= from && updateTo < to) ||
            (updateTo > from && updateTo <= to)
          );
        });
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

      this.displayedTodos = this.todoStore.todos;
      this.displayedAllTask = this.displayedTodos;

      this.sortedTodos;
    },

    filterAll() {
      this.displayedTodos = this.todoStore.todos;
    },

    newValue() {
      return (this.displayedTodos = this.todoStore.todos);
    },

    // remove index
    removeTodo(i: number) {
      this.todoStore.removeTodo(i);
      // this.sortTasks();

      this.displayedTodos = this.todoStore.todos;
    },
    editedDate() {},

    formatDate(stringDate: string) {
      // this.createdAt.toString();
      // let tot = moment(this.createdAt).format("MM/DD/YYYY HH:mm");
      // console.log(tot);
      let created = new Date();
      created.toString();
      this.createdAt = moment(created).format("MM/DD/YYYY HH:mm");

      return moment(stringDate).format("MM/DD/YYYY HH:mm");
    },

    isEditing(index: any) {
      this.editingIndex = index;
    },
    dummyTest() {
      // const dummy  = [{ num: 1 }, { num: 7 }, { num: 2 }, { num: 10 }]
      this.dummy.sort((a, b) => {
        // console.log(a.num);
        // console.log(b.num);
        return a.num - b.num;

        // const exVar = 5;
        // if (a.num < exVar && b.num >= exVar) {
        //   return 1;
        // } else if (a.num >= exVar && b.num < exVar) {
        //   return -1;
        // } else {
        //   return b.num - a.num;
        // }
      });
      // console.log(this.dummy);
    },
    sortedTodos() {
      this.displayedTodos.sort((a, b) => {
        const aDate = new Date(a.toDate);
        const bDate = new Date(b.toDate);
        const now = new Date();

        console.log(now);

        // JS SORT FLOW
        // 1. < 0 ..... a comes first
        // 2. 0 ...... nothing happend
        // 3. > 0 b comes first

        // task yang due date uda lewat urut di paling bawah
        // jika toDate task kurang dari now dan toDate task yg lain lebih dari atau sama dengan now maka return 1
        // yang artinya b diurutkan pertama
        if (aDate < now && bDate >= now) {
          // console.log("1");

          return 1;
          // jika toDate task lebih dari sama dengan now dan todate task lain kurang dari now maka return -1
          // yang artinya a diurutkan pertama
        } else if (aDate >= now && bDate < now) {
          // console.log("-1");
          return -1;
        } else {
          return bDate.getTime() - aDate.getTime();
        }
      });
    },
  },
  mounted() {
    // this.displayedTodos = this.sortedTodos;
    this.newValue();
    this.displayedCompletedTask = this.displayedTodos;

    this.displayedAllTask = this.displayedTodos;
    this.dummyTest();

    // console.log(this.createdAt);
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
    <div class="row d-flex">
      <div class="all col-3">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>todo list</h3>
        </div>
        <draggable v-model="displayedTodos" item-key="id" group="task-list">
          <template #item="{ element, index }">
            <div class="card col-12 my-2">
              <div
                class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
              >
                <input type="checkbox" v-model="element.status" class="me-2" />

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

                <div>
                  <BIconPencilFill
                    class="m-2 text-white opacity-0"
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
      <div class="all col-3">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>on going task</h3>
        </div>
        <draggable v-model="displayedTodos" item-key="id" group="task-list">
          <template #item="{ element, index }">
            <div class="">
              <div class="" v-if="element.status == false">
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

                    <BIconPencilFill
                      class="m-2 text-white"
                      @click="isEditing(index)"
                    />
                  </div>
                  <div class="card-body">
                    <div class="" @click="editedDate">
                      <p>from: {{ formatDate(element.fromDate) }}</p>
                      <p>to: {{ formatDate(element.toDate) }}</p>
                    </div>
                  </div>
                  <button
                    @click="removeTodo(index)"
                    class="border-0 rounded-circle p-2 bg-transparent opacity-0"
                    disabled
                  >
                    <BIconTrash class="fs-3 text-danger" />
                  </button>
                </div>
              </div>
            </div>
          </template>
        </draggable>
      </div>

      <div class="complete col-3">
        <div class="d-flex justify-content-center border border-1 w-100">
          <h3>complete task</h3>
        </div>
        <draggable
          v-model="displayedCompletedTask"
          item-key="id"
          group="task-list"
        >
          <template #item="{ element, index }">
            <div class="">
              <div v-if="element.status">
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
                        class="m-2 text-white opacity-0"
                        disabled
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
                    class="border-0 rounded-circle p-2 bg-transparent opacity-0"
                    disabled
                  >
                    <BIconTrash class="fs-3 text-danger" />
                  </button>
                </div>
              </div>
              <div v-else></div>
            </div>
          </template>
        </draggable>
      </div>
      <div class="task-list col-3">
        <div class="d-flex justify-content-center border border-1 w-100">
          <!-- tampilin semua task tanpa button delete & complete -->
          <h3>list task</h3>
        </div>
        <div class="" v-for="(element, index) in displayedAllTask">
          <div
            class="card col-12 my-2"
            :class="{
              'bg-danger text-white': formatDate(element.toDate) < createdAt,
            }"
          >
            <div
              class="border-bottom d-flex justify-content-between align-items-center bg-dark p-2"
            >
              <input
                type="checkbox"
                v-model="element.status"
                class="me-2 opacity-0"
                disabled
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

              <div>
                <BIconPencilFill
                  class="m-2 text-white opacity-0"
                  disabled
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
              class="border-0 rounded-circle p-2 bg-transparent opacity-0"
              dissabled
            >
              <BIconTrash class="fs-3 text-danger" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
