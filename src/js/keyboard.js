export class Keyboard {
  #switchEl;

  constructor() {
    this.#assignElement();
    this.#addEvent();
  }

  #assignElement() {
    this.#switchEl = document.querySelector("#switch");
  }

  #addEvent() {
    this.#switchEl.addEventListener("change", function (e) {
      document.documentElement.setAttribute(
        "theme",
        e.target.checked && "dark-mode"
      );
    });
  }
}
