import styles from "./featuredMemesSection.module.css";
import FeaturedMemesCard from "../featuredMemeCard";

const FeaturedMemesSection = ({ meme }) => {
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
    <section className={styles.featuredSection}>
      <h2 className={styles.sectionTitle}>Memes em Destaque</h2>
      <div className={styles.featuredGrid}>
        {featuredMemes.map((meme) => (
          // COMPONENTE: FeaturedMemeCard
          <FeaturedMemesCard key={meme.id} meme={meme} />
          // FIM COMPONENTE: FeaturedMemeCard
        ))}
      </div>
    </section>
  );
};

export default FeaturedMemesSection;
