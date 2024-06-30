// Dummy data for products (replace with actual data or fetch from server)
const products = [
    { name: 'Product 1', category: 'category1', price: 2000, image: 'images/product1.jpg', detailsPage: 'product1_details.html' },
    { name: 'Product 2', category: 'category2', price: 2500, image: 'images/product2.jpg', detailsPage: 'product2_details.html' },
    { name: 'Product 3', category: 'category1', price: 1899, image: 'images/product3.jpg', detailsPage: 'product3_details.html' },
    // Add more products as needed
];

// Function to filter and display products
function displayProducts(categoryFilter, priceRange) {
    const productsList = document.getElementById('productsList');
    productsList.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        if ((categoryFilter === '' || product.category === categoryFilter) &&
            product.price <= priceRange) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            // Create product content
            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productDiv.appendChild(productImage);

            const productName = document.createElement('h3');
            productName.textContent = product.name;
            productDiv.appendChild(productName);

            const productPrice = document.createElement('p');
            productPrice.textContent = `$${product.price.toFixed(2)}`;
            productDiv.appendChild(productPrice);

            // Create link to product details page
            const productLink = document.createElement('a');
            productLink.href = product.detailsPage;
            productLink.textContent = 'View Details';
            productDiv.appendChild(productLink);

            productsList.appendChild(productDiv);
        }
    });
}

// Event listeners for filters
document.addEventListener('DOMContentLoaded', function () {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRange = document.getElementById('priceRange');

    // Initial load of products
    displayProducts(categoryFilter.value, priceRange.value);

    // Event listener for category filter change
    categoryFilter.addEventListener('change', function () {
        displayProducts(categoryFilter.value, priceRange.value);
    });

    // Event listener for price range filter change
    priceRange.addEventListener('input', function () {
        document.getElementById('priceValue').textContent = priceRange.value;
        displayProducts(categoryFilter.value, priceRange.value);
    });
});
