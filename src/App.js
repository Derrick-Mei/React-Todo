import React from 'react';
import {Component} from 'react';
import AddButton, { ListView, AddField } from './components';


class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Derrick\'s To Do',
      newTask: '',
      tasks: [ {
        task: 'finish todo',
        completed: false,
        id: 0} ]
    }
  }

  handleAddTask = () => {
    let stateTasks = this.state.tasks;
    let newTaskObj = {
      task: this.state.newTask,
      completed: false,
      id: Date.now()}
    let newStateTasks = stateTasks.concat(newTaskObj);
    this.setState({newTask: '', "tasks": newStateTasks});
  }

  handleTask = (event) => {
    this.setState({ newTask: event.target.value });
  }

  completeTask = (index) => {
    let completedTaskArr = this.state.tasks
    completedTaskArr[index].completed = !completedTaskArr[index].completed;
    this.setState({tasks: completedTaskArr})
  }

  deleteCompletedTasks = () => {
    let unfinishedTasks = this.state.tasks.filter(item => item.completed===false)
    this.setState({tasks: unfinishedTasks})
  }

  deleteTask = (index) => {
    let updatedTasks = this.state.tasks;
    updatedTasks.splice(index, 1);
    this.setState({tasks: updatedTasks});
  }


  render() {
    return (
      <div>
        <h1 className='header'>{this.state.title}</h1>
        <AddField onChange={this.handleTask} value={this.state.newTask} />
        <AddButton onClick={this.handleAddTask} text='add'/>
        <AddButton onClick={this.deleteCompletedTasks} text='Delete Completed Tasks'/>
        <ListView
          tasksAoOFromState={this.state.tasks}
          complete ={this.completeTask}
          delete={this.deleteTask}
          />
      </div>
    );
  }
}

export default App;