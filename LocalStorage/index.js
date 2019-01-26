const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.dishes');
const allDone = document.querySelector('[value="Mark All As Done"]');
const clearAll = document.querySelector('[value="Clear All"]');
const noneDone = document.querySelector('[value="Mark All As Not Done"]');
let items = JSON.parse(localStorage.getItem('items')) || [];

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
allDone.addEventListener('click', markAllAsDone);
noneDone.addEventListener('click', markAllAsNotDone);
clearAll.addEventListener('click', clear);
populateList(items, itemsList);

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name="item"]')).value;
  const item = {
    text,
    done: false
  };
  items = [...items, item];
  populateList(items, itemsList); //performance wise is not so good because all the list is recreated every time we add an item;

  localStorage.setItem('items', JSON.stringify(items)); // localStorage only accepts strings; converts anything else automatically to one;
  this.reset();
}

function populateList(dishes = [], dishesList) {
  dishesList.innerHTML = dishes.map((dish, idx) => {
    return `
      <li>
        <input type="checkbox" data-index=${idx} id="item${idx}" ${dish.done ? "checked" : ""} />
        <label for="item${idx}">${dish.text}</label>
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
}

function markAllAsDone() {
  items.forEach(item => item.done = true);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function markAllAsNotDone() {
  items.forEach(item => item.done = false);
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

function clear() {
  items = [];
  localStorage.clear();
  populateList(items, itemsList);
}
