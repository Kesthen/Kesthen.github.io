// Datos de productos naturistas
const products = [
    // Colagenos (5 productos)
    {
        id: 1,
        name: "HIDROLYZED COLLAGEN COMPLEX",
        category: "herbal",
        price: 75000,
        oldPrice: null,
        rating: 4.5,
        image: "img/HIDROLYZED COLLAGEN COMPLEX.png",
        description: "Infusión relajante para digestión y calmar nervios"
    },
    {
        id: 2,
        name: "COLAGENO HIDROLIZADO MARINO",
        category: "herbal",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/COLAGENO HIDROLIZADO MARINO.png",
        description: "Superalimento rico en nutrientes y antioxidantes"
    },
    {
        id: 3,
        name: "COLAGENO HIDROLIZADO SIN ENDULZANTE",
        category: "herbal",
        price: 55000,
        oldPrice: null,
        rating: 5,
        image: "img/COLAGENO HIDROLIZADO SIN ENDULZANTE.webp",
        description: "Superalimento rico en nutrientes y antioxidantes"
    },
    {
        id: 4,
        name: "CREAM & COFE",
        category: "herbal",
        price: 65000,
        oldPrice: null,
        rating: 5,
        image: "img/CREAM & COFE.png",
        description: "Superalimento rico en nutrientes y antioxidantes"
    },
    {
        id: 5,
        name: "COLAGMAR SUPLE HERBALS",
        category: "herbal",
        price: 60000,
        oldPrice: null,
        rating: 5,
        image: "img/COLAGMAR SUPLE HERBALS.png",
        description: "Superalimento rico en nutrientes y antioxidantes"
    },

    
    // Vitaminas(8 productos)
    {
        id: 6,
        name: "VITAMINA C",
        category: "tea",
        price: 60000,
        oldPrice: null,
        rating: 5,
        image: "img/VITAMINA C.png",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 7,
        name: "VITAMINA E",
        category: "tea",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/VITAMINA E.png",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 8,
        name: "SHILAJT",
        category: "tea",
        price: 40000,
        oldPrice: null,
        rating: 5,
        image: "img/SHILAJT.webp",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 9,
        name: "SURE ADVENCE",
        category: "tea",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/SURE ADVENCE.webp",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 10,
        name: "FACTORES",
        category: "tea",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/FACTORES.webp",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 11,
        name: "KIDS 4+",
        category: "tea",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/KIDS 4+.png",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 12,
        name: "COMPLEJO B + ZINC",
        category: "tea",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/COMPLEJO B + ZINC.webp",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 13,
        name: "CISTIXIN",
        category: "tea",
        price: 65000,
        oldPrice: null,
        rating: 5,
        image: "img/CISTIXIN.webp",
        description: "Antioxidante natural que aumenta energía"
    },
    
    // Minerales (4 productos)
    {
        id: 14,
        name: "MAGNESIO",
        category: "supplement",
        price: 45000,
        oldPrice: null,
        rating: 4,
        image: "img/MAGNESIO.png",
        description: "Antioxidante natural que aumenta energía"
    },
    {
        id: 15,
        name: "SUPER MAGNESIO",
        category: "supplement",
        price: 80000,
        oldPrice: null,
        rating: 5,
        image: "img/SUPER MAGNESIO.png",
        description: "Antiinflamatorio natural para digestión y náuseas"
    },
    {
        id: 16,
        name: "MAGNESIO OXIDE",
        category: "supplement",
        price: 48000,
        oldPrice: null,
        rating: 5,
        image: "img/MAGNESIO OXIDE.webp",
        description: "Antiinflamatorio natural para digestión y náuseas"
    },
    {
        id: 17,
        name: "POTASIO",
        category: "supplement",
        price: 60000,
        oldPrice: null,
        rating: 5,
        image: "img/POTASIO.webp",
        description: "Antiinflamatorio natural para digestión y náuseas"
    },
    
    // Omegas (4 productos)
    {
        id: 18,
        name: "PURE EPA & DHA 3",
        category: "omega",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/PURE EPA & DHA 3.jpg",
        description: "Relajante natural para estrés y sueño"
    },
    {
        id: 19,
        name: "OMEGA 3.6.9",
        category: "omega",
        price: 45000,
        oldPrice: null,
        rating: 5,
        image: "img/OMEGA 3.6.9.jpg",
        description: "Relajante natural para estrés y sueño"
    },
    {
        id: 20,
        name: "FISH OIL OMEGA 3",
        category: "omega",
        price: 65000,
        oldPrice: null,
        rating: 5,
        image: "img/FISH OIL OMEGA 3.png",
        description: "Relajante natural para estrés y sueño"
    },
    {
        id: 21,
        name: "PROSCIENCE OMEGA 3",
        category: "omega",
        price: 75000,
        oldPrice: null,
        rating: 5,
        image: "img/PROSCIENCE OMEGA 3.webp",
        description: "Relajante natural para estrés y sueño"
    },
    
    // Otros (17 productos)
    {
        id: 22,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 23,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 24,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 25,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 26,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 27,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 28,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 29,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 30,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 31,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 32,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 33,
        name: "Miel Orgánica",
        category: "organic",
        price: 18000,
        oldPrice: 20000,
        rating: 5,
        image: "img/miel.jpg",
        description: "Endulzante natural con propiedades medicinales"
    },
    {
        id: 34,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 35,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 36,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 37,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
    },
    {
        id: 38,
        name: "Latte Proteico",
        category: "coffee",
        price: 11000,
        oldPrice: 13000,
        rating: 5,
        image: "img/latte.jpg",
        description: "Café con leche y proteína añadida"
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