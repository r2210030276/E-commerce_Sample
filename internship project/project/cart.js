// Sample data (replace with actual product data or fetch from an API)
const products = [
    {
        id: 1,
        title: 'Product Title 1',
        image: 'images/product1.jpg',
        price: 25.99
    },
    {
        id: 2,
        title: 'Product Title 2',
        image: 'images/product2.jpg',
        price: 19.99
    },
    {
        id: 3,
        title: 'Product Title 3',
        image: 'images/product3.jpg',
        price: 29.99
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const cartProducts = document.getElementById('cartProducts');
    const totalAmount = document.getElementById('totalAmount');

    // Function to add products to the cart
    function addProductToCart(product) {
        const cartProduct = document.createElement('div');
        cartProduct.classList.add('cart-product');

        cartProduct.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <div class="cart-info">
                <h3>${product.title}</h3>
                <p>Quantity: <input type="number" value="1"></p>
                <p>Price: $${product.price.toFixed(2)}</p>
            </div>
        `;

        cartProducts.appendChild(cartProduct);
    }

    // Add sample products to the cart (you can replace this with actual logic)
    products.forEach(product => {
        addProductToCart(product);
    });

    // Calculate total amount
    const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
    totalAmount.textContent = `$${totalPrice.toFixed(2)}`;
});
