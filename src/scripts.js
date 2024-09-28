const apiKey = 'ymeXpUdgQZpE4vmYrXOHREYx7ipQ5Eaj';
const url = 'home.json';
const sportsUrl = 'sports.json';
const artsUrl = 'arts.json';

document.getElementById('loadNewsBtn').addEventListener('click', () => loadNews(url));
document.getElementById('loadSportsBtn').addEventListener('click', () => loadNews(sportsUrl));
document.getElementById('loadArtsBtn').addEventListener('click', () => loadNews(artsUrl));

async function loadNews(url) {
  const newsSection = document.querySelector('.news-sections');
  newsSection.innerHTML = '<p>Loading ...</p>';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok (status: ${response.status})`);
    }

    const data = await response.json(); 
    if (data.results && data.results.length > 0) {
      setTimeout(() => {
        displayArticles(data.results);
      }, 1000);
    } else {
      newsSection.innerHTML = '<p>No news available.</p>';
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    newsSection.innerHTML = '<p>Failed to load news. Please try again.</p>';
  }
}

function displayArticles(articles) {
  const newsContainer = document.querySelector('.news-sections');
  let articlesHTML = '';

  articles.slice(0, 24).forEach(article => {
    const multimedia = article.multimedia && article.multimedia.length > 0 ? article.multimedia[0].url : 'https://via.placeholder.com/400x300';

    articlesHTML += `
      <article>
        <img src="${multimedia}" alt="${article.title}">
        <h4>${article.title}</h4>
        <p>${article.abstract}</p>
        <a href="${article.url}" target="_blank">Read more</a>
      </article>
    `;
  });

  newsContainer.innerHTML = articlesHTML;
}
loadNews(url);
