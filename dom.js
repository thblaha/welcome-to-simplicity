const $ = function (sel) {
    const nodeList = document.querySelectorAll(sel);
  
    const text = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].textContent = content;
      }
    }
  
    const toggleClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.toggle(className);
      }
    }
  
    const on = function (action, cb) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener(action, cb);
      }
    }
  
    const val = function (content) {
      if (content === undefined) {
        return nodeList[0].value;
      } else {
        nodeList[0].value = content;
      }
    }
  
    const html = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = content;
      }
    }
    const empty = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML = '';
      }
    }
  
    const append = function (content) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].innerHTML += content;
      }
  
    }
    const addClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add(className);
      }
    }
  
    const removeClass = function (className) {
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove(className);
      }
    }
    const publicAPI = {
      text: text,
      toggleClass: toggleClass,
      on: on,
      val: val,
      html: html,
      append: append,
      empty: empty,
      removeClass: removeClass,
      addClass: addClass,
    }
    return publicAPI;
  
  }
  
  var x = document.getElementById("mySubmit");