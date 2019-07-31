import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.todos = [
      {
        id:1,
        content: 'Ring Peter',
        icon: 'fas fa-phone-alt'
      },{
        id:2,
        content: 'Cook dinner',
        icon: 'fas fa-utensils'
      },{
        id:3,
        content: 'Sleep',
        icon: 'fas fa-bed'
      }
    ];
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
          { this.todos.map(function(todoItem){
            return(
              <div className="todoApp-body card-body" >
                <ul className="list-group ">
                  <li className="list-group-item todo-item" key={todoItem.id}>
                  <i className={todoItem.icon}></i>
                    {todoItem.content}
                    <i className="far fa-circle"></i> 
                  </li>
                </ul>
              </div>
            )
          })}

          <div className="todoApp-footer">
              <form className="card card-body">
                  <div className="form-row">
                      <div className="col-11">
                          <input type="text" className="form-control" placeholder="Task name"/>
                      </div>
                      <div className="col-1">
                              <button type="button" className="btn btn-outline-primary">+</button>
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
