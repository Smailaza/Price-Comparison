async function searchProduct() {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');
    
    // Clear previous results
    resultsDiv.innerHTML = '';

    if (query.trim() === '') {
        alert('Please enter a product name.');
        return;
    }

    // Example data: In a real application, you would fetch this data from an API
    const exampleData = [
        {
            name: 'Product 1',
            price: '$10',
            store: 'Store A',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 2',
            price: '$12',
            store: 'Store B',
            image: 'https://via.placeholder.com/150'
        },
        {
            name: 'Product 3',
            price: '$8',
            store: 'Store C',
            image: 'https://via.placeholder.com/150'
        }
    ];

    // Filter data based on query
    const filteredData = exampleData.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );

    if (filteredData.length === 0) {
        resultsDiv.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Display results
    filteredData.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'result-item';
        
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p><strong>${product.name}</strong></p>
            <p>Price: ${product.price}</p>
            <p>Store: ${product.store}</p>
        `;
        
        resultsDiv.appendChild(productDiv);
    });
}