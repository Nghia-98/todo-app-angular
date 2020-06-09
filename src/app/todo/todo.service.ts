import { Injectable } from '@angular/core';
import { callbackify } from 'util';

let todoList = [
  { title: '1 study angular', isDone: false },
  { title: '2 code todo app', isDone: true },
  { title: '3 do homework', isDone: false },
  { title: '3 go to school', isDone: true },
  { title: '4 drive bicycle', isDone: false },
  { title: '5 fix bug project', isDone: false },
  { title: '6 study react', isDone: true },
  { title: '7 study online on zoom at 7am', isDone: true },
  { title: '8 repair for seminar', isDone: false },
  { title: '9 go shoping', isDone: false },
  { title: '10 playing soccer', isDone: false },
  
];

// let todosTmp = [];

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  get(searchStr) {
    return new Promise((resolve, reject) => {
      const todoFilter = todoList.filter(todo => todo.title.toLocaleLowerCase().includes(searchStr))
      resolve(todoFilter);
      reject(new Error('err ....!'));
    })
  }

  add(newTodo) {
    return new Promise((resolve, reject) => {
      todoList.unshift(newTodo);
      resolve()
    })
  }

  putTitle(todoWithNoUpdate, newTitle) {
    return new Promise(resolve => {
      const index = todoList.findIndex(todo => todo.title === todoWithNoUpdate.title);
      todoList[index].title = newTitle;
      resolve();
    });
  }

  putIsDone(todoSelected) {
    return new Promise(resolve => {
      const index = todoList.findIndex(todo => todo === todoSelected);
      todoList[index].isDone = !todoList[index].isDone;
      resolve()
    })
  }

  delete(todoSelected) {
    return new Promise(resolve => {
      const index = todoList.findIndex(todo => todo === todoSelected);
      todoList.splice(index, 1);
      resolve();
    })
  }

  // search(findTodo) {
  //   return new Promise(resolve => {
  //     todosTmp = [...todoList];
  //     todoList.splice(0, todoList.length)
    
  //     todosTmp.forEach((el, i, arr) => {
  //       if(el.title.search(findTodo) !== -1) {
  //         todoList.push(el)
  //       }
  //     })
  //     resolve()
  //   })
  // }

}
