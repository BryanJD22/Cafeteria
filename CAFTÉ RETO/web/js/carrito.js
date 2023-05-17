const ITEMS = [
    //Aqui hay que pasar la url de base de datos
    {
        id: 1,
        name: "American Coffee",
        description: "Black coffee with hot water",
        category: "Coffee",
        price: 0.25,
        image: "img/carrusel/imagenCafe1.png",
        available: 1
    },
    {
        id: 2,
        name: "Espresso",
        description: "Strong and concentrated black coffee",
        category: "Coffee",
        price: 0.35,
        image: "img/carrusel/imagenCafe2.png",
        available: 1
    },
    {
        id: 3,
        name: "Latte",
        description: "Coffee with hot milk and foam",
        category: "Coffee",
        price: 0.45,
        image: "img/carrusel/imagenCafe3.png",
        available: 1
    },
    {
        id: 4,
        name: "Mocha",
        description: "Coffee with milk, chocolate, and cream",
        category: "Coffee",
        price: 0.55,
        image: "img/carrusel/imagenCafe4.png",
        available: 1
    },
    {
        id: 5,
        name: "Cappuccino",
        description: "Coffee with hot milk and foam",
        category: "Coffee",
        price: 0.45,
        image: "img/carrusel/imagenCafe5.png",
        available: 1
    },
    {
        id: 6,
        name: "Frappé",
        description: "Coffee with ice, milk, and sugar",
        category: "Coffee",
        price: 0.4,
        image: "img/carrusel/imagenCafe6.png",
        available: 1
    },
    {
        id: 7,
        name: "Iced Coffee",
        description: "Coffee with ice and milk",
        category: "Coffee",
        price: 0.35,
        image: "img/carrusel/imagenCafe7.png",
        available: 1
    },
    {
        id: 8,
        name: "Café au Lait",
        description: "Coffee with hot milk",
        category: "Coffee",
        price: 0.3,
        image: "img/carrusel/imagenCafe8.png",
        available: 1
    },
    {
        id: 9,
        name: "Viennese Coffee",
        description: "Coffee with cream and chocolate",
        category: "Coffee",
        price: 0.6,
        image: "img/carrusel/imagenCafe9.png",
        available: 1
    },
    {
        id: 10,
        name: "Irish Coffee",
        description: "Coffee with whiskey and cream",
        category: "Coffee",
        price: 0.7,
        image: "img/carrusel/imagenCafe10.png",
        available: 1
    },
    {
        id: 11,
        name: "Green Tea",
        description: "Delicate and refreshing tea made from unoxidized leaves",
        category: "Tea",
        price: 0.25,
        image: "img/carrusel/imagenTe1.jpg",
        available: 1
    },
    {
        id: 12,
        name: "Earl Grey",
        description: "Black tea flavored with bergamot oil, known for its citrusy aroma",
        category: "Tea",
        price: 0.35,
        image: "img/carrusel/imagenTe2.jpg",
        available: 1
    },
    {
        i: 13,
        name: "Chamomile",
        description: "Herbal tea made from dried chamomile flowers, known for its calming properties",
        category: "Tea",
        price: 0.45,
        image: "img/carrusel/imagenTe3.jpg",
        available: 1
    },
    {
        id: 14,
        name: "Oolong",
        description: "Partially oxidized tea with a rich and complex flavor profile",
        category: "Tea",
        price: 0.55,
        image: "img/carrusel/imagenTe4.jpg",
        available: 1
    },
    {
        id: 15,
        name: "Peppermint",
        description: "Herbal tea with a minty and refreshing taste",
        category: "Tea",
        price: 0.45,
        image: "img/carrusel/imagenTe5.jpg",
        available: 1
    },
    {
        "id": 16,
        name: "Rooibos",
        description: "Caffeine-free herbal tea from South Africa, known for its sweet and nutty flavor",
        category: "Tea",
        price: 0.4,
        image: "img/carrusel/imagenTe6.jpg",
        available: 1
    },
    {
        id: 17,
        name: "Hibiscus",
        description: "Herbal tea made from the dried petals of hibiscus flowers, known for its tart and fruity taste",
        category: "Tea",
        price: 0.35,
        image: "img/carrusel/imagenTe7.jpg",
        available: 1
    },
    {
        id: 18,
        name: "Matcha",
        description: "Vibrant green tea powder made from finely ground tea leaves, traditionally used in Japanese tea ceremonies",
        category: "Tea",
        price: 0.3,
        image: "img/carrusel/imagenTe8.jpg",
        available: 1
    },
    {
        id: 19,
        name: "White Tea",
        description: "Subtle and delicate tea made from young tea leaves and buds",
        category: "Tea",
        price: 0.6,
        image: "img/carrusel/imagenTe9.jpg",
        available: 1
    },
    {
        id: 20,
        name: "Masala Chai",
        description: "Spiced tea blend with a combination of black tea, milk, and aromatic spices like cinnamon, cardamom, and ginger",
        category: "Tea",
        price: 0.7,
        image: "img/carrusel/imagenTe10.jpg",
        available: 1
    }
]

const openBtn = document.getElementById('open_cart_btn')
const cart = document.getElementById('sidecart')
const closeBtn = document.getElementById('close_btn')
const backdrop = document.querySelector('.backdrop')
const itemsEl = document.querySelector('.items')
const cartItems = document.querySelector('.cart_items')
const itemsNum = document.getElementById('items_num')
const subtotalPrice = document.getElementById('subtotal_price')


let cart_data = [] //Creo que aqui hay que añadir la url de base de datos

//Abrir y cerrar carrito
openBtn.addEventListener('click', openCart)
closeBtn.addEventListener('click', closeCart)

renderItems()
renderCartItems()

function openCart() {
    cart.classList.add('open')
    backdrop.style.display = 'block'
    setTimeout(() => {
        backdrop.classList.add('show')
    }, 0)

}

function closeCart() {
    cart.classList.remove('open')
    backdrop.classList.remove('show')
    setTimeout(() => {
        backdrop.style.display = 'none'

    }, 500)

}
//////////////////////////////////////////////////////////////


function renderItems() {
    ITEMS.forEach((item/*Este es el item de la base de datos con su id, nombre etc*/, idx) => {
        const itemEl = document.createElement('div');//no tiene s, no es items es item
        itemEl.classList.add('item');
        itemEl.id = `item-${item.id}`;
        itemEl.onclick = () => addItem(idx, item.id);
        itemEl.innerHTML = `
            <img src="${item.imagen}" alt="" class="item-img"/>
            <div class="overview">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
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
    cartItems.innerHTML = ''
    cart_data.forEach(item => {
        const cartItem = document.createElement('div')
        cartItem.classList.add('cart_item')
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
            <span onclick="decreaseQty(${item.id})">-</span>
            <strong>${item.qty}</strong>
            <span onclick="increaseQty(${item.id})">+</span>
        </div>
    </div>`
        cartItems.appendChild(cartItem)
    })
}

function addItem(idx, itemId) {
    const foundedItem = cart_data.find(item => item.id.toString() === itemId.toString())
    if (foundedItem) {
        increaseQty(itemId)
    } else {
        cart_data.push({...ITEMS[idx], available: 1})
    }
    updateCart()
}


//Esto es para que el carrito calcule, añada y elimine el objeto 
function updateCart() {
    renderCartItems()
    calcItemsNum()
    calcSubtotalPrice()
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
        toString() ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.available } : item)
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
    cart_data.forEach(item => (subtotal += item.price * item.qty))
    subtotalPrice.innerText = subtotal
}