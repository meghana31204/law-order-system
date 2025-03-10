import React, { useEffect, useState } from "react";

const PublicNoticesAlerts = () => {
  const [lawOrderNews, setLawOrderNews] = useState([]);
  const [generalNews, setGeneralNews] = useState([]);
  const [jobsNews, setJobsNews] = useState([]);
  const [weatherNews, setWeatherNews] = useState([]);
  const [internationalNews, setInternationalNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryNews = async (query, setNewsState) => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&apiKey=62daa66e1941483fb9642c22c3b570bc`
        );
        const data = await response.json();
        if (data.status === "ok" && Array.isArray(data.articles)) {
          setNewsState(data.articles.slice(0, 10)); // Display only latest 20
        } else {
          throw new Error(data.message || "Failed to fetch news");
        }
      } catch (error) {
        console.error(`Error fetching ${query} news:`, error);
        setError("No news available. Please try again later.");
      }
    };

    // Fetching law and order related news first
    fetchCategoryNews("theft OR assault OR rape OR fraud crime India", setLawOrderNews);
    fetchCategoryNews("India", setGeneralNews);
    fetchCategoryNews("jobs in India", setJobsNews);
    fetchCategoryNews("weather India", setWeatherNews);
    fetchCategoryNews("international news", setInternationalNews);
  }, []);

  return (
    <>
      <nav style={styles.navbar}>
        <div style={styles.navbarLogo}>
          <img
            src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-rule-of-law-vector-png-image_11399282.png"
            alt="Logo"
            className="logo"
            style={styles.logo}
          />
          <h2 style={styles.navTitle}>Law & Order System</h2>
        </div>
        <ul style={styles.navList}>
          <li>
            <a href="/report-crime" style={styles.navLink}>Report a Crime</a>
          </li>
          <li>
            <a href="/license-permit" style={styles.navLink}>Apply for Licenses & Permits</a>
          </li>
          <li>
            <a href="/public-notices" style={styles.navLink}>View Public Notices & Alerts</a>
          </li>
        </ul>
      </nav>

      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Public Notices & Alerts</h1>
        </header>

        {/* Law & Order Related News */}
        <NewsSection title="Public Safety Alerts" newsList={lawOrderNews} error={error} />

        {/* General News */}
        <NewsSection title="General News" newsList={generalNews} error={error} />

        {/* Categorized News */}
        <NewsSection title="Jobs" newsList={jobsNews} error={error} />
        <NewsSection title="Weather" newsList={weatherNews} error={error} />
        <NewsSection title="International" newsList={internationalNews} error={error} />
      </div>
    </>
  );
};

const NewsSection = ({ title, newsList, error }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    {error ? (
      <p>{error}</p>
    ) : newsList.length > 0 ? (
      <ul style={styles.list}>
        {newsList.map((article, index) => (
          <li key={index}>
            <strong>{article.title}</strong>
            <br />
            {article.description || "No description available."}
            <br />
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading {title.toLowerCase()}...</p>
    )}
  </div>
);

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: "50px",
    height: "50px",
    marginRight: "10px",
  },
  navTitle: {
    color: "#fff",
    margin: 0,
    fontSize: "20px",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 15px",
    display: "block",
    marginLeft: "15px",
  },
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f8f9fa",
  },
  header: {
    backgroundColor: "#dc2626",
    color: "#fff",
    padding: "15px",
    textAlign: "center",
    borderRadius: "8px",
  },
  title: {
    margin: 0,
    fontSize: "24px",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  sectionTitle: {
    color: "#dc2626",
    fontSize: "20px",
    marginBottom: "10px",
  },
  list: {
    paddingLeft: "20px",
    lineHeight: "1.6",
  },
};

export default PublicNoticesAlerts;