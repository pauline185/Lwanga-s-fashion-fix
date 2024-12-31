document.addEventListener("DOMContentLoaded", () => {
    const newsletterForm = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    // Newsletter Form Validation
    newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const emailValue = emailInput.value.trim();

        if (validateEmail(emailValue)) {
            alert("Thank you for subscribing!");
            emailInput.value = "";
        } else {
            alert("Please enter a valid email address.");
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Products Data
    const products = [
    { name: "Elegant Dress", price: 49.99, discount: 50, image: "images/Elegant Dress.png" },
    { name: "Casual Top", price: 29.99, discount: 50, image: "images/Casual Top.png" },
    { name: "Chic Skirt", price: 39.99, discount: 50, image: "images/Chic Skirt.png" },
    { name: "Stylish Jacket", price: 59.99, discount: 50, image: "images/Stylish Jacket.png" },
];

    // Populate Product Grid
    const productGrid = document.querySelector(".product-grid");
products.forEach((product) => {
    const discountedPrice = (product.price * (1 - product.discount / 100)).toFixed(2);
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; border-radius: 10px;">
        <h3>${product.name}</h3>
        <p><span class="original-price">$${product.price.toFixed(2)}</span> <span class="discounted-price">$${discountedPrice}</span></p>
        <button class="cta-button">Buy Now</button>
    `;
    productGrid.appendChild(productDiv);
});

    // Customer Reviews Data
    const reviews = [
        { name: "Jane Doe", review: "Absolutely love the quality of these clothes! Highly recommended.", rating: 5 },
        { name: "Lisa Smith", review: "Fast delivery and the dress fits perfectly. Will shop again!", rating: 4 },
        { name: "Emily Johnson", review: "Great styles and affordable prices. I'm impressed!", rating: 5 },
    ];

    // Populate Testimonials Section
    const testimonialGrid = document.querySelector(".testimonial-grid");
    reviews.forEach((review) => {
        const reviewDiv = document.createElement("div");
        reviewDiv.classList.add("testimonial-card");
        reviewDiv.innerHTML = `
            <h3>${review.name}</h3>
            <p>${review.review}</p>
            <div class="rating">
                ${'⭐'.repeat(review.rating)}
            </div>
        `;
        testimonialGrid.appendChild(reviewDiv);
    });
});
