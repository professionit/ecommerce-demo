document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Render Flash Deals
    const dealsGrid = document.getElementById('deals-grid');
    const flashDeals = Array.from({ length: 4 }).map((_, i) => ({
        price: (Math.random() * 20 + 5).toFixed(2),
        sold: Math.floor(Math.random() * 500) + 50,
        discount: Math.floor(Math.random() * 40) + 10
    }));

    flashDeals.forEach(deal => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-img" style="background-color: hsl(${Math.random() * 360}, 70%, 80%)"></div>
            <div class="card-info">
                <div class="price">$${deal.price} <span class="old-price">$${(deal.price * 1.5).toFixed(2)}</span></div>
                <div class="sales-count">${deal.sold} sold</div>
            </div>
        `;
        dealsGrid.appendChild(card);
    });

    // 2. Render Infinite Product Grid
    const productGrid = document.getElementById('product-grid');
    const products = Array.from({ length: 24 }).map((_, i) => ({
        title: `Product Item ${i + 1} Description goes here...`,
        price: (Math.random() * 100 + 10).toFixed(2),
        sold: Math.floor(Math.random() * 2000)
    }));

    products.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        const hue = Math.floor(Math.random() * 360);
        card.innerHTML = `
            <div class="card-img" style="background-color: hsl(${hue}, 60%, 90%)"></div>
            <div class="card-info">
                <div class="title" style="font-size: 13px; margin-bottom: 5px; height: 36px; overflow: hidden;">${prod.title}</div>
                <div class="price">$${prod.price}</div>
                <div class="sales-count">${prod.sold} sold</div>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // 3. Simple Search Logic (Console Log)
    const searchBtn = document.querySelector('.search-bar button');
    searchBtn.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value;
        if(query) alert(`Searching for: ${query}`);
    });

    // 4. Countdown Timer Logic
    const timerEl = document.querySelector('.timer');
    let time = 46000; // arbitrary seconds

    setInterval(() => {
        time--;
        const h = Math.floor(time / 3600);
        const m = Math.floor((time % 3600) / 60);
        const s = time % 60;
        timerEl.textContent = `Ends in: ${h}:${m < 10 ? '0'+m : m}:${s < 10 ? '0'+s : s}`;
    }, 1000);
});