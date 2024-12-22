const apiKey = 'pub_63021ea2da065c9da50358f89ecbc0ce775c2'; // Verify this key

async function fetchNews() {
    try {
        const response = await fetch(`https://newsdata.io/api/1/news?apikey=${apiKey}&q=weather`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const result = await response.json();
        displayNews(result.results); // Use 'results' array
        console.log(result);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function extractImportantInfo(article) {
    return {
        title: article.title,
        description: article.description,
        url: article.link,
        imageUrl: article.image_url,
        sourceName: article.source_name,
        pubDate: article.pubDate
    };
}

function displayNews(articles) {
    const newsSection = document.getElementById('newsSection');
    newsSection.innerHTML = ''; // Clear previous content
    if (articles) {
        articles.forEach(article => {
            const info = extractImportantInfo(article);
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card mb-4';
            newsCard.style.display = 'flex';
            newsCard.style.alignItems = 'center';
            newsCard.style.cursor = 'pointer';
            newsCard.style.borderBottom = '1px solid #ccc';
            newsCard.style.paddingBottom = '10px';
            newsCard.style.marginBottom = '10px';
            newsCard.onclick = () => window.open(info.url || '#', '_blank');

            const newsContent = document.createElement('div');
            newsContent.style.flex = '1';
            newsContent.style.paddingRight = '10px';

            const newsTitle = document.createElement('h2');
            newsTitle.style.fontFamily = "'Times New Roman', serif";
            newsTitle.style.fontSize = '1.5em';
            newsTitle.style.fontWeight = 'bold';
            newsTitle.textContent = info.title || 'No title';

            const newsDescription = document.createElement('p');
            newsDescription.textContent = info.description || 'No description available.';

            const newsSource = document.createElement('p');
            newsSource.style.fontStyle = 'italic';
            newsSource.textContent = `Source: ${info.sourceName}`;

            const newsDate = document.createElement('p');
            newsDate.style.fontStyle = 'italic';
            newsDate.textContent = `Published on: ${new Date(info.pubDate).toLocaleString()}`;

            newsContent.appendChild(newsTitle);
            newsContent.appendChild(newsDescription);
            newsContent.appendChild(newsSource);
            newsContent.appendChild(newsDate);
            newsCard.appendChild(newsContent);

            if (info.imageUrl) {
                const newsImage = document.createElement('img');
                newsImage.src = info.imageUrl;
                newsImage.alt = 'News Image';
                newsImage.style.width = '150px'; // Increased width
                newsImage.style.height = '150px'; // Increased height
                newsImage.style.objectFit = 'cover';
                newsImage.style.marginLeft = '10px';
                newsCard.appendChild(newsImage);
            }

            newsSection.appendChild(newsCard);
        });
    } else {
        newsSection.innerHTML = '<p>No news articles found.</p>';
    }
}

// Fetch news when the page loads
document.addEventListener('DOMContentLoaded', fetchNews);
