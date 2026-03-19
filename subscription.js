/* ================================================
   FRESHBITE - Subscription Page JavaScript
   Plan selection, billing options, and comparisons
   ================================================ */

document.addEventListener('DOMContentLoaded', function() {
    initializeBillingToggle();
    initializePlanSelection();
});

// Current billing period
let currentBilling = 'monthly';

// Initialize billing toggle
function initializeBillingToggle() {
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', handleBillingChange);
    });
}

// Handle billing change
function handleBillingChange(e) {
    // Update active state
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    currentBilling = e.target.dataset.billing;
    updatePrices(currentBilling);
}

// Update prices based on billing period
function updatePrices(billingPeriod) {
    document.querySelectorAll('.amount').forEach(priceElement => {
        const monthlyPrice = parseFloat(priceElement.dataset.monthly);
        let newPrice;

        switch(billingPeriod) {
            case 'quarterly':
                newPrice = parseFloat(priceElement.dataset.quarterly).toFixed(2);
                break;
            case 'yearly':
                newPrice = parseFloat(priceElement.dataset.yearly).toFixed(2);
                break;
            default:
                newPrice = monthlyPrice;
        }

        // Animate price change
        priceElement.style.transition = 'opacity 0.3s ease';
        priceElement.style.opacity = '0.5';
        
        setTimeout(() => {
            priceElement.textContent = newPrice;
            priceElement.style.opacity = '1';
        }, 150);
    });
}

// Initialize plan selection
function initializePlanSelection() {
    document.querySelectorAll('.plan-card .btn').forEach(btn => {
        btn.addEventListener('click', handlePlanSelection);
    });
}

// Handle plan selection
function handlePlanSelection(e) {
    e.preventDefault();
    
    const planCard = e.target.closest('.plan-card');
    const planName = planCard.querySelector('h3')?.textContent || 'Plan';
    const price = planCard.querySelector('.amount')?.textContent || '0';
    
    FreshBite.Storage.set('selectedPlan', {
        name: planName,
        price: price,
        billing: currentBilling,
        timestamp: new Date()
    });
    
    FreshBite.Analytics.trackEvent('Subscription', 'PlanSelected', planName);
    
    // Show confirmation
    FreshBite.showToast(`${planName} plan selected! Proceeding to checkout...`);
    
    // Simulate redirect to checkout
    setTimeout(() => {
        window.location.href = 'account.html';
    }, 1500);
}

// Feature comparison
function compareFeatures(feature) {
    const featureRows = document.querySelectorAll(`tr:has(td:first-child:contains("${feature}"))`);
    featureRows.forEach(row => {
        row.style.background = '#fff5f1';
    });
}

// FAQ functionality
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
        const answer = this.querySelector('p:last-of-type');
        if (answer) {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        }
    });
});

// Plan recommendation
function getRecommendedPlan(preferences) {
    const { meals, budget, lifestyle } = preferences;
    
    if (meals > 6 || (budget > 140 && lifestyle === 'busy')) {
        return 'elite';
    } else if (meals > 3 || (budget > 90 && lifestyle === 'active')) {
        return 'premium';
    } else {
        return 'casual';
    }
}

// Update plan recommendation based on user input
function updateRecommendation() {
    const meals = document.querySelector('input[name="meals"]')?.value || 0;
    const budget = document.querySelector('input[name="budget"]')?.value || 0;
    const lifestyle = document.querySelector('select[name="lifestyle"]')?.value || 'casual';
    
    const recommended = getRecommendedPlan({
        meals: parseInt(meals),
        budget: parseInt(budget),
        lifestyle: lifestyle
    });
    
    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.classList.remove('recommended');
    });
    
    const recommendedCard = document.querySelector(`[data-plan="${recommended}"]`);
    if (recommendedCard) {
        recommendedCard.classList.add('recommended');
        FreshBite.showToast(`We recommend the ${recommended} plan for you!`);
    }
}

// Track pricing analytics
setInterval(() => {
    const selectedBilling = document.querySelector('.toggle-btn.active')?.dataset.billing;
    if (selectedBilling) {
        FreshBite.Analytics.trackEvent('Subscription', 'BillingView', selectedBilling);
    }
}, 30000);

console.log('Subscription.js loaded successfully!');
