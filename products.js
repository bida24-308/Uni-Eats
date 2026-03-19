/* ================================================
   FRESHBITE - Products Page JavaScript
   Filtering, sorting, and product interactions
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeProductFilters();
    initializeProductCards();
    loadMeals();
});

let currentFilters = {
    cuisine: [],
    diet: [],
    maxPrice: 15
};

// Initialize product filters
function initializeProductFilters() {
    // Checkbox filters
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', handleFilterChange);
    });

    // Price range filter
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', handlePriceChange);
    }
}

// Handle filter changes
function handleFilterChange(e) {
    const filterType = e.target.dataset.filter;
    const value = e.target.parentElement.textContent.trim();
    
    if (e.target.checked) {
        if (!currentFilters[filterType].includes(value)) {
            currentFilters[filterType].push(value);
        }
    } else {
        currentFilters[filterType] = currentFilters[filterType].filter(v => v !== value);
    }
    
    applyFilters();
}

// Handle price range change
function handlePriceChange(e) {
    currentFilters.maxPrice = parseFloat(e.target.value);
    const priceDisplay = document.getElementById('priceDisplay');
    if (priceDisplay) {
        priceDisplay.textContent = `$5 - $${priceDisplay.value}`;
    }
    applyFilters();
}

// Apply all filters
function applyFilters() {
    const productCards = document.querySelectorAll('.product-card');
    let visibleCount = 0;

    productCards.forEach(card => {
        const priceText = card.querySelector('.price')?.textContent;
        const price = parseFloat(priceText?.replace('$', '').trim());
        const categoryTag = card.querySelector('.cuisine-tag')?.textContent.trim();
        const mealDetails = card.querySelector('.meal-details')?.textContent.toLowerCase();

        let shouldShow = true;

        // Price filter
        if (price > currentFilters.maxPrice) {
            shouldShow = false;
        }

        // Cuisine filter
        if (currentFilters.cuisine.length > 0 && !currentFilters.cuisine.includes(categoryTag)) {
            shouldShow = false;
        }

        // Dietary filter
        if (currentFilters.diet.length > 0) {
            let hasDiet = false;
            currentFilters.diet.forEach(diet => {
                if (mealDetails?.includes(diet.toLowerCase())) {
                    hasDiet = true;
                }
            });
            if (!hasDiet) shouldShow = false;
        }

        card.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) visibleCount++;
    });

    // Show message if no results
    let noResultsMsg = document.querySelector('.no-results-message');
    if (visibleCount === 0) {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.className = 'no-results-message';
            noResultsMsg.innerHTML = `
                <div style="text-align: center; padding: 2rem; grid-column: 1/-1;">
                    <p style="font-size: 1.2rem; color: var(--text-light);">
                        No meals match your filters. Try adjusting your preferences.
                    </p>
                </div>
            `;
            document.querySelector('.products-grid').appendChild(noResultsMsg);
        }
    } else if (noResultsMsg) {
        noResultsMsg.remove();
    }
}

// Initialize product cards
function initializeProductCards() {
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.addEventListener('click', handleAddToCart);
    });
}

// Handle add to cart
function handleAddToCart(e) {
    e.preventDefault();
    
    const card = e.target.closest('.product-card');
    const mealName = card.querySelector('h3')?.textContent || 'Meal';
    const priceText = card.querySelector('.price')?.textContent || '$0.00';
    const price = parseFloat(priceText.replace('$', ''));
    
    const item = {
        id: Date.now(),
        name: mealName,
        price: price
    };
    
    FreshBite.Cart.add(item);
    
    // Animate button
    const originalText = e.target.textContent;
    e.target.textContent = '✓ Added!';
    e.target.style.background = 'var(--success-color)';
    
    setTimeout(() => {
        e.target.textContent = originalText;
        e.target.style.background = '';
    }, 2000);
    
    FreshBite.Analytics.trackEvent('Cart', 'AddItem', mealName);
}

// Load meals from API
function loadMeals() {
    const meals = FreshBite.PricingAPI.getMeals();
    console.log('Loaded meals:', meals);
}

// Sort products
function sortProducts(sortBy) {
    const grid = document.querySelector('.products-grid');
    const cards = Array.from(document.querySelectorAll('.product-card'));
    
    cards.sort((a, b) => {
        const getPriceFromCard = (card) => {
            const priceText = card.querySelector('.price')?.textContent || '$0';
            return parseFloat(priceText.replace('$', ''));
        };

        const priceA = getPriceFromCard(a);
        const priceB = getPriceFromCard(b);
        
        switch(sortBy) {
            case 'price-low':
                return priceA - priceB;
            case 'price-high':
                return priceB - priceA;
            case 'name':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            default:
                return 0;
        }
    });
    
    cards.forEach(card => grid.appendChild(card));
}

console.log('Products.js loaded successfully!');
