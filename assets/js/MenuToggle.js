class MenuToggle {
  constructor(button) {
    this.btn = document.querySelector(button);
    this.menu = document.querySelector(this.btn.getAttribute('data-js-target'));

    this.handleClick = this.handleClick.bind(this);
  }

  addClickEvent() {
    this.btn.addEventListener('click', this.handleClick);
  }

  handleClick() {
    this.menu.classList.toggle('active');
    this.btn.classList.toggle('active');
  }

  init() {
    if (this.btn && this.menu) {
      this.addClickEvent();
    } else {
      throw new Error(
        'An unusual error occurred, please check if the button class/id or target element is correct.'
      );
    }
    return this;
  }
}
