        // Articles data
        const articles = [
            {
               
                title: "Call for Proposal - Local Transition and Media Projects",
                date: "15.01.2025 / 10:30",
                preview: "The Embassy of the Czech Republic in New Delhi announces a call for proposals for the Local Transition and Media Projects...",
                link: "article1.html"
            },
            {
                title: "Appointments for Long-term Visas/Residence Permits",
                date: "14.01.2025 / 12:00",
                preview: "Only applicants for long-term visas and residence permits can apply for the appointment date via this booking system...",
                link: "article2.html"
            },
            {
                title: "Renewal of short-term visas processing",
                date: "13.01.2025 / 09:15",
                preview: "The Czech Embassy in New Delhi informs that the new concession agreement for the processing of short-term visa applications...",
                link: "article3.html"
            }
        ];

        // Render articles
        const articlesContent = document.getElementById('articles-content');
        articles.forEach(article => {
            articlesContent.innerHTML += `
                <article class="article">
                    <a href="${article.link}" class="article-title">${article.title}</a>
                       <div class="article-date">${article.date}</div>
                    <p class="article-preview">${article.preview}  <a href="${article.link}" class="more">more</a></p>
                   
                </article>
            `;
        });