// Datos de bebidas
const products = [
    // Batidos  (5 productos)
    {
        id: 1,
        name: "FITNESS",
        category: "smoothie",
        price: 13000,
        oldPrice: null,
        rating: 5,
        image: "img/FITNESS.jpg",
        description: "Delicioso batido en agua con Fruta, 25 gr de proteína,20 gr de avena"
    },
    {
        id: 2,
        name: "WELLNESS",
        category: "smoothie",
        price: 15000,
        oldPrice: null,
        rating: 5,
        image: "img/WELLNESS.jpg",
        description: "Delicioso batido en leche con Fruta, 25 gr de proteína,20 gr de avena, "+ "leche de almendras + $ 2.000,00 "
    },
    {
        id: 3,
        name: "FULL POWER",
        category: "smoothie",
        price: 6000,
        oldPrice: null,
        rating: 5,
        image: "img/FULL POWER.jpg",
        description: "Pre entreno  granizado" + "Agua de aloe + $ 2.000,00 "
    },
    {
        id: 4,
        name: "GRANIZADO DE PROTEINA",
        category: "smoothie",
        price: 10000,
        oldPrice: null,
        rating: 5,
        image: "img/GRANIZADO DE PROTEINA.jpg",
        description: "Delicioso granizado , 25 gr de proteína,25 gr de avena"
    },

    
    // Jugos Naturales (3 productos)
    {
        id: 5,
        name: "JUGO EN AGUA",
        category: "juice",
        price: 6000,
        oldPrice: null,
        rating: 5,
        image: "img/JUGO EN AGUA.png",
        description: "Delicioso jugo de pulpa de fruta de mango,mora,fresa y guanabana"
    },
    {
        id: 6,
        name: "JUGO EN LECHE",
        category: "juice",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/JUGO EN LECHE.jpg",
        description: "Delicioso jugo de pulpa de fruta de mango,mora,fresa y guanabana"
    },
    {
        id: 7,
        name: "LIMONADA",
        category: "juice",
        price: 6000,
        oldPrice: null,
        rating: 5,
        image: "img/LIMONADA.jpg",
        description: "Jugo de limón en agua"
    },
    
    // Bebidas Calientes (3 productos)
    {
        id: 8,
        name: "TINTO",
        category: "energy",
        price: 2500,
        oldPrice: null,
        rating: 5,
        image: "img/TINTO.jpg",
        description: "Tinto"
    },
    {
        id: 9,
        name: "CAPUCHINO",
        category: "energy",
        price: 4000,
        oldPrice: null,
        rating: 5,
        image: "img/CAPUCHINO.jpg",
        description: "Americano con leche"
    },
    {
        id: 10,
        name: "MILO",
        category: "energy",
        price: 5000,
        oldPrice: null,
        rating: 5,
        image: "img/MILO.jpg",
        description: "Milo en leche" 
    },

    
    // Jugos FIT (2 productos)
    {
        id: 11,
        name: "MIX DE MANGO",
        category: "detox",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/MIX DE MANGO.jpg",
        description: "Deliciosa mezcla en agua de mango, manzana y avena"
    },
    {
        id: 12,
        name: "MIX DE FRESA",
        category: "detox",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/MIX DE FRESA.jpg",
        description: "Deliciosa mescla de fresas, bananas y avena "
    },

    // Jugos verdes (5 productos)
    {
        id: 13,
        name: "BATIDO DETOX",
        category: "coffee",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/BATIDO DETOX.jpg",
        description: "Espinaca, pepino, apio, manzana y jengibre"
    },
    {
        id: 14,
        name: "ANTIOXIDANTE",
        category: "coffee",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/ANTIOXIDANTE.jpg",
        description: "Espinaca, pepino, tomate, mora, uva y remolacha"
    },
    {
        id: 15,
        name: "HIDRATANTE",
        category: "coffee",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/HIDRATANTE.jpg",
        description: "Zanahoria, pepino, apio, jengibre, naranja"
    },
    {
        id: 16,
        name: "PONCHE DE LA ABUELA",
        category: "coffee",
        price: 8000,
        oldPrice: null,
        rating: 5,
        image: "img/PONCHE DE LA ABUELA.jpg",
        description: "Naranja, Aloe vera, Clara de huevo, miel"
    },
];

// Variables para paginación
let currentPage = 1;
const productsPerPage = 8;
let filteredProducts = [...products];

// Elementos del DOM
const productsContainer = document.getElementById('products-container');
const categoryFilter = document.getElementById('category-filter');
const priceFilter = document.getElementById('price-filter');
const productSearch = document.getElementById('product-search');
const pageNumbers = document.getElementById('page-numbers');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const clearFiltersBtn = document.querySelector('.btn-clear-filters');
const searchProductsBtn = document.querySelector('.btn-search-products');

// Función para mostrar productos
function displayProducts(productsToShow) {
    productsContainer.innerHTML = '';
    
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedProducts = productsToShow.slice(startIndex, endIndex);
    
    // Añadir o remover clase de resultados de búsqueda
    if (productSearch.value || categoryFilter.value !== 'all' || priceFilter.value !== 'default') {
        productsContainer.classList.add('search-results');
    } else {
        productsContainer.classList.remove('search-results');
    }
    
    if (paginatedProducts.length === 0) {
        productsContainer.innerHTML = '<p class="no-products">No se encontraron productos que coincidan con tu búsqueda.</p>';
        return;
    }
    
    paginatedProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'card-product';
        productCard.dataset.category = product.category;
        
        const discountBadge = product.oldPrice ? 
            `<span class="discount">-${Math.round((1 - product.price / product.oldPrice) * 100)}%</span>` : '';
        
        const oldPriceDisplay = product.oldPrice ? 
            `<span>${formatPrice(product.oldPrice)}</span>` : '';
        
        const stars = renderStars(product.rating);
        
        productCard.innerHTML = `
            <div class="container-img">
                <img src="${product.image}" alt="${product.name}" />
                ${discountBadge}
                <div class="button-group">
                    <span>
                        <i class="fa-regular fa-eye"></i>
                    </span>
                    <span>
                        <i class="fa-regular fa-heart"></i>
                    </span>
                    <span>
                        <i class="fa-solid fa-code-compare"></i>
                    </span>
                </div>
            </div>
            <div class="content-card-product">
                ${stars}
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="add-cart">
                    <i class="fa-solid fa-basket-shopping"></i>
                </span>
                <p class="price">${formatPrice(product.price)} ${oldPriceDisplay}</p>
                <button class="btn-buy">Comprar ahora</button>
            </div>
        `;
        
        productsContainer.appendChild(productCard);
    });
}

// Función para renderizar estrellas de valoración
function renderStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fa-solid fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fa-solid fa-star-half-stroke"></i>';
        } else {
            stars += '<i class="fa-regular fa-star"></i>';
        }
    }
    
    return `<div class="stars">${stars}</div>`;
}

// Función para formatear precios
function formatPrice(price) {
    return '$' + price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Función para filtrar productos
function filterProducts() {
    const category = categoryFilter.value;
    const priceOrder = priceFilter.value;
    const searchTerm = productSearch.value.toLowerCase();
    
    filteredProducts = products.filter(product => {
        const matchesCategory = category === 'all' || product.category === category;
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                            product.description.toLowerCase().includes(searchTerm);
        return matchesCategory && matchesSearch;
    });
    
    // Ordenar por precio si es necesario
    if (priceOrder === 'price-asc') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceOrder === 'price-desc') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (priceOrder === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    }
    
    currentPage = 1;
    updatePagination();
    displayProducts(filteredProducts);
}

// Función para actualizar la paginación
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('a');
        pageLink.href = '#';
        pageLink.textContent = i;
        if (i === currentPage) {
            pageLink.className = 'active';
        }
        pageLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            displayProducts(filteredProducts);
            updatePagination();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pageNumbers.appendChild(pageLink);
    }
    
    prevPage.classList.toggle('disabled', currentPage === 1);
    nextPage.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
}

// Event listeners
categoryFilter.addEventListener('change', filterProducts);
priceFilter.addEventListener('change', filterProducts);
productSearch.addEventListener('input', filterProducts);
clearFiltersBtn.addEventListener('click', () => {
    categoryFilter.value = 'all';
    priceFilter.value = 'default';
    productSearch.value = '';
    filterProducts();
});
searchProductsBtn.addEventListener('click', filterProducts);

prevPage.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
        currentPage--;
        displayProducts(filteredProducts);
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

nextPage.addEventListener('click', (e) => {
    e.preventDefault();
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        displayProducts(filteredProducts);
        updatePagination();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// Inicializar
filterProducts();