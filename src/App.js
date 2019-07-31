import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todos: [
        {
          id:1,
          content: 'Ring Peter',
          icon: 'fas fa-phone-alt',
          date: 'today',
          status:'todo'
        },{
          id:2,
          content: 'Cook dinner',
          icon: 'fas fa-utensils',
          date: 'today',
          status:'todo'
        },{
          id:3,
          content: 'Sleep',
          icon: 'fas fa-bed',
          date: 'today',
          status:'todo'
        }
      ],
      todoInputValue: '',
      iconInputValue:'',
    };
  }

  handleTodoInputChange = (e) =>{
    this.setState({todoInputValue: e.target.value});
  }
  handleIconInputChange = (e) =>{
    this.setState({iconInputValue: e.target.value});
  }

  handleAddTodoClick = (e) =>{
    e.preventDefault();
    var task = {
      id: Date.now(),
      content: this.state.todoInputValue,
      icon: 'fas fa-'+this.state.iconInputValue,
      status:'todo'
      
    };
    var newTask = [...this.state.todos,task];
    this.setState({
      todos: newTask,
      todoInputValue: '',
      iconInputValue: '',
      
    });
  }

  removeTodo = (todoId) =>{
    var todos = this.state.todos;
    var filteredTodos = todos.filter( function(todoItem){
      return todoItem.id !== todoId;
    });
    this.setState({todos:filteredTodos});
  }

  completeTodo = (todoId,status)=>{
    var todos = this.state.todos;
    var index = todos.findIndex( function(todoItem){
      return todoItem.id === todoId;
    });
    todos[index].status = status;
    this.setState({todos});

  }

  render(){
    return(
      <div className="wrap">
      <div className="todoApp card">
          <div className="card-header text-white bg-info mb-3">
              <div className="nav-icon"></div>
              <h5 className="card-title">Things to do</h5>
              <ul className="nav nav-tabs card-header-tabs nav-fill">
                  <li className="nav-item">
                      <a href="#" className="nav-link active">Today</a>
                  </li>
                  <li className="nav-item">
                          <a href="#" className="nav-link">Tomorrow</a>
                  </li>
                  <li className="nav-item">
                          <a href="#" className="nav-link">Future</a>
                  </li>
                  
              </ul>
          </div>
          { this.state.todos.map((todoItem)=>{
            return(
              <div className="todoApp-body card-body" >
                <ul className="list-group ">
                  <li className="list-group-item todo-item" key={todoItem.id}>
                  <i className={todoItem.icon}></i>
                    <div className="todo-task-name">{todoItem.content}</div>
                    {
                      (todoItem.status === 'todo') ?  <i className="far fa-circle" onClick={(e) => { this.completeTodo(todoItem.id,'complete')}}></i> : <i className="far fa-check-circle" onClick={(e) => { this.completeTodo(todoItem.id,'todo')}}></i>
                    }
                    <i className="far fa-trash-alt" onClick={(e) => { this.removeTodo(todoItem.id)}}></i>
                  </li>
                </ul>
              </div>
            )
          })}

          <div className="todoApp-footer">
              <form className="card card-body">
                  <div className="form-row justify-content-between">
                    <div className="dropdown col-3">
                      <select className="form-control">
                        <option>Today</option>
                        <option>Tomorrow</option>
                        <option>Future</option>
                      </select>
                    </div>
                    <div className="dropdown col-3">
                      <select className="form-control" onChange={this.handleIconInputChange}>
                        <option>phone</option>
                        <option>broom</option>
                        <option>bed</option>
                      </select>
                    </div>

                      <div className="col-5">
                          <input type="text" className="form-control" placeholder="Task name" onChange={this.handleTodoInputChange}/>
                      </div>
                      <div className="col-1">
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleAddTodoClick}>+</button>
                      </div>
                  </div>
              </form>
              
          </div>
      </div>
  </div>

    );
  }
  
}

export default App;
