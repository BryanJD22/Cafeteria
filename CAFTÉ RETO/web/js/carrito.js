async function obtenerResultados(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const resultados = await response.json();
    console.log(resultados)
    resultados.forEach((item, idx) => {
        const itemEl = document.createElement('div');
        itemEl.classList.add('item');
        itemEl.id = `item-${item.id}`;
        itemEl.onclick = () => addItem(idx, item.id);
        itemEl.innerHTML = `<img src="${item.imagen}" alt="" class="item-img"/>
        <div class="overview">
            <h3>${item.nombre}</h3>
            <br>
            <p>${item.descripcion}</p>
            <br>
            <h4>${item.precio}</h4>
        </div>
        <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
        <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>`;
        itemsEl.appendChild(itemEl);
    });
    return resultados;
}

let ITEMS = [];

async function fetchItems() {
    ITEMS = await obtenerResultados("Controller?ACTION=PRODUCTO.FIND_ALL");
   
}
fetchItems();

const coffeFilter = document.getElementById('filter-coffee')
const teaFilter = document.getElementById('filter-tea')
const allFilter = document.getElementById('filter-all')
const priceFilter = document.getElementById('filter-price')
const priceFilter2 = document.getElementById('filter-price2')
const openBtn = document.getElementById('open_cart_btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close_btn');
const backdrop = document.querySelector('.backdrop');
const itemsEl = document.querySelector('.items');
const cartItems = document.querySelector('.cart_items');
const itemsNum = document.getElementById('items_num');
const subtotalPrice = document.getElementById('subtotal_price');

let cart_data = [];
if (localStorage.getItem("cart_data")) {
  cart_data = JSON.parse(localStorage.getItem("cart_data"));
  updateCart();
}

window.addEventListener("beforeunload", function() {
  saveCartData();
});
//Abrir y cerrar carrito
openBtn.addEventListener('click', openCart);
closeBtn.addEventListener('click', closeCart);

// Filtros
coffeFilter.addEventListener('click', renderCoffeeItems)
teaFilter.addEventListener('click', renderTeaItems)
allFilter.addEventListener('click', renderItems)
priceFilter.addEventListener('click',renderByPriceHigherItems)
priceFilter2.addEventListener('click',renderByPriceLowerItems)

renderCartItems();

function openCart() {
    cart.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('show');
    }, 0);
}

function closeCart() {
    cart.classList.remove('open');
    backdrop.classList.remove('show');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 500);
}

function renderItems() {
    itemsEl.innerHTML = ''
    ITEMS.forEach((item/*Este es el item de la base de datos con su id, nombre etc*/, idx) => {
        const itemEl = document.createElement('div');//no tiene s, no es items es item
        itemEl.classList.add('item');
        itemEl.id = `item-${item.id}`;
        itemEl.onclick = () => addItem(idx, item.id);
        itemEl.innerHTML = `
            <img src="${item.imagen}" alt="" class="item-img"/>
            <div class="overview">
            <h2>${item.nombre}</h2>
            <br>
            <p>${item.descripcion}</p>
            <br>
            <h3>${item.precio}$</h3>
            </div>
            <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
            <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>
        `;
        itemsEl.appendChild(itemEl);
        //Esto es para el popup de añadir el carrito 
        const addtocartproduct = document.getElementById(`addtocartproduct-${item.id}`);

        addtocartproduct.addEventListener('click', function () {
            itemEl.classList.add('itemactive');
        });
    });
}

function renderCartItems() {
    cartItems.innerHTML = '';
    cart_data.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart_item');
        cartItem.innerHTML = `<div class="remove_item" onclick="removeCartItem(${item.id})">
        <span>&times;</span>
    </div>
    <div class="item_img">
        <img src="${item.imagen}" alt="">
    </div>
    <div class="item_details">
        <p>${item.nombre}</p>
        <strong>${item.precio}$</strong>
        <div class="qty">
            <span onclick="decreaseQty(${item.id}">-</span>
            <strong>${item.qty}</strong>
            <span onclick="increaseQty(${item.id})">+</span>
        </div>
    </div>`;
        cartItems.appendChild(cartItem);
    });
}
///Filtros

function renderCoffeeItems() {
  itemsEl.innerHTML = '';
  ITEMS.forEach((item, idx) => {
    if (item.tipo === 'Coffee') {
      const itemEl = document.createElement('div');
      itemEl.classList.add('item');
      itemEl.id = `item-${item.id}`;
      itemEl.onclick = () => addItem(idx, item.id);
      itemEl.innerHTML = `
        <img src="${item.imagen}" alt="" class="item-img"/>
        <div class="overview">
          <h2>${item.nombre}</h2>
          <br>
          <p>${item.descripcion}</p>
          <br>
          <h3>${item.precio}$</h3>
        </div>
        <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
        <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>
      `;
      itemsEl.appendChild(itemEl);

      const addtocartproduct = document.getElementById(`addtocartproduct-${item.id}`);
      addtocartproduct.addEventListener('click', function () {
        itemEl.classList.add('itemactive');
      });
    }
  });
}

function renderTeaItems() {
  itemsEl.innerHTML = '';
  ITEMS.forEach((item, idx) => {
    if (item.tipo === 'Tea') {
      const itemEl = document.createElement('div');
      itemEl.classList.add('item');
      itemEl.id = `item-${item.id}`;
      itemEl.onclick = () => addItem(idx, item.id);
      itemEl.innerHTML = `
        <img src="${item.imagen}" alt="" class="item-img"/>
        <div class="overview">
          <h2>${item.nombre}</h2>
          <br>
          <p>${item.descripcion}</p>
          <br>
          <h3>${item.precio}$</h3>
        </div>
        <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
        <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>
      `;
      itemsEl.appendChild(itemEl);

      const addtocartproduct = document.getElementById(`addtocartproduct-${item.id}`);
      addtocartproduct.addEventListener('click', function () {
        itemEl.classList.add('itemactive');
      });
    }
  });
}

function renderByPriceHigherItems() {
  itemsEl.innerHTML = '';
  ITEMS.sort((a, b) => b.precio - a.precio).forEach((item, idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    itemEl.id = `item-${item.id}`;
    itemEl.onclick = () => addItem(idx, item.id);
    itemEl.innerHTML = `
      <img src="${item.imagen}" alt="" class="item-img"/>
      <div class="overview">
        <h2>${item.nombre}</h2>
        <br>
        <p>${item.descripcion}</p>
        <br>
        <h3>${item.precio}$</h3>
      </div>
      <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
      <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>
    `;
    itemsEl.appendChild(itemEl);

    const addtocartproduct = document.getElementById(`addtocartproduct-${item.id
    
        }`);
    addtocartproduct.addEventListener('click', function () {
      itemEl.classList.add('itemactive');
    });
  });
  ITEMS.sort((a, b) => a.id - b.id);
}

function renderByPriceLowerItems() {
  itemsEl.innerHTML = '';
  ITEMS.sort((a, b) => a.precio - b.precio).forEach((item, idx) => {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');
    itemEl.id = `item-${item.id}`;
    itemEl.onclick = () => addItem(idx, item.id);
    itemEl.innerHTML = `
      <img src="${item.imagen}" alt="" class="item-img"/>
      <div class="overview">
        <h2>${item.nombre}</h2>
        <br>
        <p>${item.descripcion}</p>
        <br>
        <h3>${item.precio}$</h3>
      </div>
      <p id="addproduct-${item.id}" class="addproduct">¡Producto añadido!</p>
      <button id="addtocartproduct-${item.id}" class="addtocartproduct">Add to Cart</button>
    `;
    itemsEl.appendChild(itemEl);

    const addtocartproduct = document.getElementById(`addtocartproduct-${item.id}`);
    addtocartproduct.addEventListener('click', function () {
      itemEl.classList.add('itemactive');
    });
  });
  ITEMS.sort((a, b) => a.id - b.id);
}
////////////////////
function addItem(idx, itemId) {
    const foundedItem = cart_data.find(item => item.id.toString() === itemId.toString())
    if (foundedItem) {
        increaseQty(itemId)
    } else {
        cart_data.push({...ITEMS[idx], qty: 1})
    }
    updateCart()
}


//Esto es para que el carrito calcule, añada y elimine el objeto 
function updateCart() {
    renderCartItems()
    calcItemsNum()
    calcSubtotalPrice()
        saveCartData(); // Guardar los datos del carrito en el localStorage
}

function removeCartItem(itemId) {
    cart_data = cart_data.filter(item => item.id != itemId)
    updateCart()
}

function increaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.
        toString() ? { ...item, qty: item.qty + 1 } : item)
    updateCart()
}

function decreaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.
        toString() ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty } : item)
    updateCart()
}

//Calcular el numero de productos añadidos
function calcItemsNum() {
    let itemsCount = 0
    cart_data.forEach(item => itemsCount += item.qty)
    itemsNum.innerText = itemsCount
}
//////////////////////////////////////////////
//Calcular el precio de productos añadidos
function calcSubtotalPrice() {
    let subtotal = 0
    cart_data.forEach(item => (subtotal += item.precio * item.qty))
    subtotalPrice.innerText = subtotal
}


////Guardar el carrito

function saveCartData() {
    localStorage.setItem('cart_data', JSON.stringify(cart_data));
}

