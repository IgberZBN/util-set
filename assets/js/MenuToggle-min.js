export default class MenuToggle{constructor(t){this.btn=document.querySelector(t),this.menu=document.querySelector(this.btn.getAttribute("data-js-target")),this.handleClick=this.handleClick.bind(this),this.init()}addClickEvent(){this.btn.addEventListener("click",this.handleClick)}handleClick(){this.menu.classList.toggle("active"),this.btn.classList.toggle("active")}init(){if(this.btn&&this.menu)return this.addClickEvent(),this;throw new Error("An unusual error occurred, please check if the button class/id or target element is correct.")}}