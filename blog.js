const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
        imgSrc: "./magyk.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan, featuring Norse mythology.",
        imgSrc: "./sword_of_summer.jpg",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods leaves the World divided into five kingdoms...",
        imgSrc: "./pawn_of_prophecy.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function renderArticles(filteredArticles) {
    const articlesContainer = document.querySelector("#articles");
    articlesContainer.innerHTML = '';  // Clear previous content

    filteredArticles.forEach(item => {
        const article = document.createElement("article");
        article.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <h2>${item.title}</h2>
            <p class="details">Date: ${item.date} | Ages: ${item.ages} | Genre: ${item.genre}</p>
            <p>${item.description}</p>
            <p class="rating">${item.stars}</p>
        `;
        articlesContainer.appendChild(article);
    });
}

function filterArticles() {
    const sortValue = document.getElementById("sort").value;
    const ageValue = document.getElementById("age").value;
    const genreValue = document.getElementById("genre").value;
    const ratingValue = document.getElementById("rating").value;

    let filteredArticles = [...articles];

    // Filtering logic
    if (ageValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.ages === ageValue);
    }
    if (genreValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.genre.toLowerCase() === genreValue);
    }
    if (ratingValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.stars.length === parseInt(ratingValue));
    }

    // Sorting logic
    if (sortValue === 'rating') {
        filteredArticles.sort((a, b) => b.stars.length - a.stars.length);
    } else if (sortValue === 'date') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderArticles(filteredArticles);
}

// Initial load
renderArticles(articles);

// Listen for filter changes
document.getElementById("filterForm").addEventListener("change", filterArticles);
