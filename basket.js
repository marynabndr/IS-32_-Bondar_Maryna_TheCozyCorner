document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        // Отримуємо дані про товар
        const productName = button.dataset.name;
        const productPrice = button.dataset.price;
        const productImage = button.dataset.image;

        // Отримуємо поточний кошик із localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Додаємо товар у кошик
        cart.push({
            name: productName,
            price: productPrice,
            image: productImage
        });

        // Оновлюємо кошик у localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productName} додано до кошика!`);
    });
});
