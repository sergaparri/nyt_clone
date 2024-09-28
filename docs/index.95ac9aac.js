const e="home.json";async function t(e){let t=document.querySelector(".news-sections");t.innerHTML="<p>Loading ...</p>";try{let n=await fetch(e);if(!n.ok)throw Error(`Network response was not ok (status: ${n.status})`);let a=await n.json();a.results&&a.results.length>0?setTimeout(()=>{!function(e){let t=document.querySelector(".news-sections"),n="";e.slice(0,24).forEach(e=>{let t=e.multimedia&&e.multimedia.length>0?e.multimedia[0].url:"https://via.placeholder.com/400x300";n+=`
      <article>
        <img src="${t}" alt="${e.title}">
        <h4>${e.title}</h4>
        <p>${e.abstract}</p>
        <a href="${e.url}" target="_blank">Read more</a>
      </article>
    `}),t.innerHTML=n}(a.results)},1e3):t.innerHTML="<p>No news available.</p>"}catch(e){console.error("Error fetching data:",e),t.innerHTML="<p>Failed to load news. Please try again.</p>"}}document.getElementById("loadNewsBtn").addEventListener("click",()=>t(e)),document.getElementById("loadSportsBtn").addEventListener("click",()=>t("sports.json")),document.getElementById("loadArtsBtn").addEventListener("click",()=>t("arts.json")),t(e);
//# sourceMappingURL=index.95ac9aac.js.map
