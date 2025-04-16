import CreatorsCard from "../creatorsCard";
import styles from "./creatorsSection.module.css";

const CreatorsSection = ({ topCreators }) => {
  return (
    <section className={styles.creatorsSection}>
      <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
      <div className={styles.creatorsGrid}>
        {topCreators.map((creator) => (
          <CreatorsCard id={creator.id} creator={creator} />
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;
