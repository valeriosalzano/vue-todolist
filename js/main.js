// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

  createApp({
    data() {
      return {
        list : {},
      }
    },
    methods: {
      createList(length){
        let list = [];
        for (let i=1; i<=length; i++){
          let item = {};
          item.text = `Task ${i}`;
          item.done = false;
          list.push(item);
        }
        return list;
      },
      deleteItem (index){
        this.list.splice(index,1);
      }
    },
    mounted(){
      this.list = this.createList(10);
    }
  }).mount('#app');