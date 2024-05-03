import { defineStore } from "pinia";
import axios from "axios";

export const useTodoStore = defineStore("todo", {
    state: () => {
        return { list: [] };
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        getAll() {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    return axios
                        .get("http://localhost:3000/todos")
                        .then((response) => {
                            response.data.sort((a, b) =>
                                a.createTime < b.createTime
                                    ? 1
                                    : b.createTime < a.createTime
                                      ? -1
                                      : 0
                            );
                            this.list = response.data;
                            resolve();
                        });
                }, 1000);
            });
        },

        async add(data) {
            return axios
                .post("http://localhost:3000/todos", {
                    ...data,
                    createTime: new Date().getTime(),
                })
                .then((response) => {
                    this.store(response.data);
                });
        },

        async update({ id, data }) {
            return axios
                .put(`http://localhost:3000/todos/${id}`, data)
                .then((response) => {
                    this.store(response.data);
                });
        },

        async delete(id) {
            return axios
                .delete(`http://localhost:3000/todos/${id}`)
                .then(() => {
                    const index = this.list.findIndex((todo) => todo.id === id);

                    if (index >= 0) {
                        this.list.splice(index, 1);
                    }
                });
        },

        store(payload) {
            const index = this.list.findIndex((todo) => todo.id === payload.id);
            if (index >= 0) {
                this.list.splice(index, 1, payload);
            } else {
                this.list.unshift(payload);
            }
        },
    },
});
