// Datos de productos
const products = [
    // Proteínas (28 productos)
    {
        id: 1,
        name: "BI PRO LITE",
        category: "protein",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/bipro.webp",
        description: "Proteína 2 Libras"
    },
    {
        id: 2,
        name: "ISO 100",
        category: "protein",
        price: 500000,
        oldPrice: null,
        rating: 5,
        image: "img/ISO_100.webp",
        description: "Proteína 5 libras"
    },
    {
        id: 3,
        name: "PROTON",
        category: "protein",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/PROTON.webp",
        description: "Proteína 6 libras"
    },
    {
        id: 4,
        name: "TNT MEGA MASS",
        category: "protein",
        price:155000,
        oldPrice: null,
        rating: 5,
        image: "img/TNT MEGA MASS.webp",
        description: "Proteina ganadera 6 libras"
    },
    {
        id: 5,
        name: "MASS TECH",
        category: "protein",
        price: 215000,
        oldPrice: null,
        rating: 3.5,
        image: "img/MASS TECH.jpg",
        description: "Proteína 6 libras"
    },
    {
        id: 6,
        name: "SMART",
        category: "protein",
        price: 90000,
        oldPrice: null,
        rating: 5,
        image: "img/SMART.webp",
        description: "Proteína  3 libras"
    },
    {
        id: 7,
        name: "BARBARUS",
        category: "protein",
        price: 155000,
        oldPrice: null,
        rating: 5,
        image: "img/BARBARUS.webp",
        description: "Proteína  2 libras"
    },
    {
        id: 8,
        name: "MEGAPLEX POWER",
        category: "protein",
        price: 220000,
        oldPrice: null,
        rating: 5,
        image: "img/MEGAPLEX POWER.PNG",
        description: "Proteína  10 libras"
    },
    {
        id: 9,
        name: "TITAN ARMY",
        category: "protein",
        price: 58000,
        oldPrice: null,
        rating: 5,
        image: "img/TITAN ARMY.webp",
        description: "Proteína 2 libras"
    },
    {
        id: 10,
        name: "SUPER MEGA GAINER",
        category: "protein",
        price: 55000,
        oldPrice: null,
        rating: 5,
        image: "img/SUPER MEGA GAINER.png",
        description: "Proteína 2 libras"
    },
    {
        id: 11,
        name: "BODY RIPPED",
        category: "protein",
        price: 85000,
        oldPrice: null,
        rating: 5,
        image: "img/BODY RIPPED.png",
        description: "Proteína 2 libras"
    },
    {
        id: 12,
        name: "MEGABOLIC MASS",
        category: "protein",
        price: 55000,
        oldPrice: null,
        rating: 5,
        image: "img/MEGABOLIC MASS.webp",
        description: "Proteína 2 libras"
    },
    {
        id: 13,
        name: "BEST PROTEIN",
        category: "protein",
        price: 200000,
        oldPrice: null,
        rating: 5,
        image: "img/BEST PROTEIN.webp",
        description: "Proteína 2 libras"
    },
    {
        id: 14,
        name: "ISO 100",
        category: "protein",
        price: 290000,
        oldPrice: null,
        rating: 5,
        image: "img/ISO_100.webp",
        description: "Proteína 3 libras"
    },
    {
        id: 15,
        name: "ISO WEY",
        category: "protein",
        price: 240000,
        oldPrice: null,
        rating: 5,
        image: "img/ISO WEY.png",
        description: "Proteína 2 libras"
    },
    {
        id: 16,
        name: "GOLD STANDARD WHEY",
        category: "protein",
        price: 200000,
        oldPrice: null,
        rating: 5,
        image: "img/GOLD STANDARD WHEY.jpg",
        description: "Proteína 2 libras"
    },
    {
        id: 17,
        name: "MUSCLETECH NITRO TECH",
        category: "protein",
        price: 320000,
        oldPrice: null,
        rating: 5,
        image: "img/MUSCLETECH NITRO TECH.webp",
        description: "Proteína 5 libras"
    },
    {
        id: 18,
        name: "CARNIVOR",
        category: "protein",
        price: 230000,
        oldPrice: null,
        rating: 5,
        image: "img/CARNIVOR.webp",
        description: "Proteína 2 libras"
    },
    {
        id: 19,
        name: "WHEY ELITE",
        category: "protein",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/WHEY ELITE.webp",
        description: "Proteína 2 libras"
    },
    {
        id: 20,
        name: "TNT MEGA MASS GAINER ",
        category: "protein",
        price: 78000,
        oldPrice: null,
        rating: 5,
        image: "img/TNT MEGA MASS GAINER.webp",
        description: "Proteína ganadora 3 libras"
    },
    {
        id: 21,
        name: "MEGAPLEX POWER",
        category: "protein",
        price: 58000,
        oldPrice: null,
        rating: 5,
        image: "img/MEGAPLEX POWER.png",
        description: "Proteína 2 libras"
    },
    {
        id: 22,
        name: "WHEY PURE",
        category: "protein",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/WHEY PURE.webp",
        description: "Proteína 2 Libras"
    },
    {
        id: 23,
        name: "BI PRO CLASSIC",
        category: "protein",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/BI PRO CLASSIC.png",
        description: "Proteína 2 libras"
    },
    {
        id: 24,
        name: "WHEY BLEND",
        category: "protein",
        price: 155000,
        oldPrice: null,
        rating: 5,
        image: "img/WHEY BLEND.webp",
        description: "Proteína 2 libras"
        
    },
    {
        id: 25,
        name: "PROSCIENCE SMART",
        category: "protein",
        price: 75000,
        oldPrice: null,
        rating: 5,
        image: "img/PROSCIENCE SMART.webp",
        description: "Proteína 2 libras"
  
    },

    {
        id: 26,
        name: "ISO CLEAN",
        category: "protein",
        price: 155000,
        oldPrice: null,
        rating: 5,
        image: "img/ISO CLEAN.webp",
        description: "Proteína 2 libras"

        
    },
    {
        id: 27,
        name: "ISO LATE GOURMET",
        category: "protein",
        price: 200000,
        oldPrice: null,
        rating: 5,
        image: "img/ISO LATE GOURMET.png",
        description: "Proteína 2 libras"

        
    },
    {
        id: 28,
        name: "MUSCLETECH NITRO TECH",
        category: "protein",
        price: 200000,
        oldPrice: null,
        rating: 5,
        image: "img/MUSCLETECH NITRO TECH.webp",
        description: "Proteína 2 libras"

        
    },
    // Creatinas (17 productos)
    {
        id: 29,
        name: "CREATINA PLATINUM",
        category: "creatine",
        price: 160000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINAPLATINUM.webp",
        description: "Creatina  80 servicios"
    },
    {
        id: 30,
        name: "CREATINA MUSCLETECH",
        category: "creatine",
        price: 125000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINAMUSCLETECH.webp",
        description: "Creatina en capsulas, 50 servicios"
    },
    {
        id: 31,
        name: "CREATINA POLVO DE UVA",
        category: "creatine",
        price: 100000,
        oldPrice: null,
        rating: 5,
        image: "img/creatinapolvodeuva.webp",
        description: "Creatina en polvo 30 servicios"
    },
    {
        id: 32,
        name: "CREATINA DYMATIZE",
        category: "creatine",
        price: 135000,
        oldPrice: null,
        rating: 5,
        image: "img/creatinadymatize.webp",
        description: "Creatina 88 servicios"
    },
    {
        id: 33,
        name: "CREATINA MICRONIZED",
        category: "creatine",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA MICRONIZED.jpeg",
        description: "Creatina 60 servicios"
    },
    {
        id: 34,
        name: "CREATINA LEGACY",
        category: "creatine",
        price: 75000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINALEGACY.webp",
        description: "Creatina 30 servicios"
    },
    {
        id: 35,
        name: "CREATINA TNT INSTINCT",
        category: "creatine",
        price: 70000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA TNT INSTINCT.webp",
        description: "Creatina 30 servicios"
    },
    {
        id: 36,
        name: "CREATINA NUTREX",
        category: "creatine",
        price: 120000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA NUTREX.webp",
        description: "Creatina 60 servicios"
    },
    {
        id: 37,
        name: "CREATINA HEALTHY SPORTS",
        category: "creatine",
        price: 125000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA HEALTHY SPORTS.webp",
        description: "Creatina 100 servicios"
    },
    {
        id: 38,
        name: " CREATINA MUSCLETECH PLATINUM",
        category: "creatine",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA MUSCLETECH PLATINUM.webp",
        description: "Creatina 80 servicios"
    },

    {
        id: 39,
        name: " CREATINA ATOMIC",
        category: "creatine",
        price: 100000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA ATOMIC.PNG",
        description: "Creatina 60 servicios"
    },
    {
        id: 40,
        name: " CREATINA NUTREAMERICAN STACS",
        category: "creatine",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA NUTREAMERICAN STACS.PNG",
        description: "Creatina 60 servicios"
    },
    {
        id: 41,
        name: " CREATINA VITALBOOSTT CR7",
        category: "creatine",
        price: 85000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA VITALBOOSTT.webp",
        description: "Creatina 70 servicios"
    },
    {
        id: 42,
        name: " CREATINA MUSCLETECH CELLTECH",
        category: "creatine",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA MUSCLETECH CELLTECH.webp",
        description: "Creatina 30 servicios"
    },
    {
        id: 43,
        name: " CREATINA TNT INSTINCT",
        category: "creatine",
        price: 90000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA TNT INSTINCT.webp",
        description: "Creatina 60 servicios"
    },
    {
        id: 44,
        name: " CREATINA ULTRA PURE",
        category: "creatine",
        price: 120000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA ULTRA PURE.webp",
        description: "Creatina 100 servicios"
    },
    {
        id: 45,
        name: " CREATINA HEALTHY SPORTS",
        category: "creatine",
        price: 70000,
        oldPrice: null,
        rating: 5,
        image: "img/CREATINA HEALTHY SPORTS.webp",
        description: "Creatina 50 servicios"
    },

    
    // Pre-entrenos (7 productos)
    {
        id: 46,
        name: "C4 ORIGINAL",
        category: "preworkout",
        price: 130000,
        oldPrice: null,
        rating: 5,
        image: "img/C4.jpeg",
        description: "Pre-entreno 30 servicios"
    },
    {
        id: 47,
        name: "PSYCHOTIC",
        category: "preworkout",
        price: 150000,
        oldPrice: null,
        rating: 5,
        image: "img/PSYCHOTIC.jpg",
        description: "Pre-entreno 35 servicios"
    },
    {
        id: 48,
        name: "ELECTRON",
        category: "preworkout",
        price: 125000,
        oldPrice: null,
        rating: 5,
        image: "img/ELECTRON.webp",
        description: "Pre-entreno 30 servicios"
    },
    {
        id: 49,
        name: "INTENZE",
        category: "preworkout",
        price: 145000,
        oldPrice: null,
        rating: 5,
        image: "img/INTENZE.webp",
        description: "Pre-entreno 30 servicios"
    },
    {
        id: 50,
        name: "ENERGY UP",
        category: "preworkout",
        price: 40000,
        oldPrice: null,
        rating: 5,
        image: "img/ENERGY UP.png",
        description: "Pre-entreno  12 sobres"
    },
    {
        id: 51,
        name: "ENERGY X",
        category: "preworkout",
        price: 40000,
        oldPrice: null,
        rating: 5,
        image: "img/ENERGY X.png",
        description: "Pre-entreno 25 sachets"
    },
    {
        id: 52,
        name: "INSANIT",
        category: "preworkout",
        price: 100000,
        oldPrice: null,
        rating: 5,
        image: "img/INSANIT.webp",
        description: "Pre-entreno 30 servicios"
    },
    
    // Aminoácidos (2 productos)
    {
        id: 53,
        name: "EAAS MAX",
        category: "amino",
        price: 115000,
        oldPrice: null,
        rating: 5,
        image: "img/EAAS MAX.png",
        description: "Aminoácidos ecensiales, 30 servicios"
    },
    {
        id: 54,
        name: "EAA`S ARMY ",
        category: "amino",
        price: 115000,
        oldPrice: null,
        rating: 5,
        image: "img/EAA`S.webp",
        description: "Aminoácidos esenciales, 30 servicios"
    },
    
    // Multivitaminicos (3 productos)
    {
        id: 55,
        name: "MUSCLETECH",
        category: "vitamin",
        price: 90000,
        oldPrice: null,
        rating: 5,
        image: "img/MUSCLETECH MULTIVITAMINICO.png",
        description: "Complejo de vitaminas y minerales, 90 cápsulas"
    },
    {
        id: 56,
        name: "SHIELD",
        category: "vitamin",
        price: 90000,
        oldPrice: null,
        rating: 5,
        image: "img/SHIELD.png",
        description: "30 servicios de sabor limon"
    },
    {
        id: 57,
        name: "THE ONE",
        category: "vitamin",
        price: 85000,
        oldPrice: null,
        rating: 5,
        image: "img/THE ONE.webp",
        description: "30 servicios sabor naranja"
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