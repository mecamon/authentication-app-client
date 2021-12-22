import { defineStore } from 'pinia';

export const useExample = defineStore('example', {
  state: () => ({
    title: 'Example title',
    numericalValue: 10
  }),
  getters: {
    getNumericalProduct: (state) => state.numericalValue * 2,
    getTitleDescription: (state) => `This is ${state.title}`,
  },
  actions: {
    increment() {
      this.numericalValue ++
    },
    decrement() {
      this.numericalValue --
    }
  }
});