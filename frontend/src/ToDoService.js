export default class ToDoService {

  static instance = null;

  static getInstance(){
    if(ToDoService.instance == null){
      ToDoService.instance = new ToDoService();
    }
    return this.instance;
  }
    
  AddToDo(item) {
    try{
       //Backend: Post item
      console.log(
        "Service called with item details: " +
          item.id +
          " " +
          item.text +
          " " +
          item.complete
      );
    }catch(error){
      console.log(error);
    }

  }

  getAllItems(){
    items = [];
    try{
      //Initialization of the item list;
      return list
    }catch(error){
      console.log(error);
    }
  }

  removeItem(itemID){
    try{
      //find the given id in the database and erase it from the list.
    }catch(error){
      console.log(error);
    } 
  }

  toggleItemComplete(itemID){
    try{
      //find the given id in the database then toggle it's state.
      return list
    }catch(error){
      console.log(error);
    }
  }

}

export default ToDoService;
