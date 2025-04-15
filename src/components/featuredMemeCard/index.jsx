import styles from "./featuredMemeCard.module.css";

const FeaturedMemeCard = ({ meme }) => {
    const featuredMemes = [
        {
          id: 8,
          title: "O código em produção",
          image: "https://i.imgur.com/aVy8tFB.jpg",
          author: "DevHumor",
          category: "Programação",
          trending: true,
        },
        {
          id: 9,
          title: "Modo escuro vs Modo claro",
          image: "https://i.imgur.com/YnGsVzS.jpg",
          author: "UIDesigner",
          category: "Tecnologia",
          trending: true,
        },
        {
          id: 10,
          title: "POV: Aula online",
          image: "https://i.imgur.com/4MigGYQ.jpg",
          author: "ZoomExpert",
          category: "Escola",
          trending: false,
        },
      ];
  
    return (
    <div key={meme.id} className={styles.featuredCard}>
      <div className={styles.featuredImageContainer}>
        <img
          src={meme.image}
          alt={meme.title}
          className={styles.featuredImage}
        />
        {meme.trending && (
          <span className={styles.trendingBadge}>🔥 Trending</span>
        )}
      </div>
      <div className={styles.featuredContent}>
        <h3 className={styles.featuredTitle}>{meme.title}</h3>
        <div className={styles.featuredInfo}>
          <span className={styles.featuredAuthor}>Por {meme.author}</span>
          <span className={styles.featuredCategory}>{meme.category}</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedMemeCard;
