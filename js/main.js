// 2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

const { createApp } = Vue

  createApp({
    data() {
      return {
        list : {},
        userInput : '',
        errorLength : false
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
      },
      addItem (){
        let userText = this.userInput;
        if (userText.trim().length>=5){
          this.errorLength = false;
          let newItem = {};
          newItem.text = userText;
          newItem.done = false;
          this.list.unshift(newItem);
          this.userInput = '';
        } else {
          this.errorLength = true;
        }
        
      },
      eraseList(){
        this.list = [];
      },
      toggleChecked(index){
        this.list[index].done = !this.list[index].done;
      }
    },
    mounted(){
      this.list = this.createList(10);
    }
  }).mount('#app');