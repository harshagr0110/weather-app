const url = 'https://google-api31.p.rapidapi.com/';
const options = {
    method: 'POST',
    headers: {
        'x-rapidapi-key': '7cc9136ademshadd6b39264aac6bp17d871jsnfa9b5fe1221c',
        'x-rapidapi-host': 'google-api31.p.rapidapi.com',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        text: 'Europe',
        region: 'wt-wt',
        max_results: 25
    })
};

async function fetchNews() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        displayNews(result);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function displayNews(news) {
    const newsSection = document.getElementById('newsSection');
    newsSection.innerHTML = ''; // Clear previous content

    if (news.news) {
        news.news.forEach(article => {
            const newsCard = document.createElement('div');
            newsCard.className = 'col-md-4 mb-4';
            newsCard.innerHTML = `
                <div class="card">
                    <img src="${article.image}" class="card-img-top" alt="${article.title}">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" class="btn btn-primary" target="_blank">Read More</a>
                    </div>
                </div>
            `;
            newsSection.appendChild(newsCard);
        });
    } else {
        newsSection.innerHTML = '<p>No news articles found.</p>';
    }
}

fetchNews();