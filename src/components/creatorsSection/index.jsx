import CreatorsCard from '../creatorsCard';
import styles from './creatorsSection.module.css';


const CreatorsSection = () => { 
  const topCreators = [
    {
      id: 1,
      name: "MemeQueen",
      avatar: "https://i.pravatar.cc/150?img=23",
      followers: "245K",
      bio: "Criando memes que fazem seu dia melhor!",
    },
    {
      id: 2,
      name: "FunnyGuy42",
      avatar: "https://i.pravatar.cc/150?img=24",
      followers: "189K",
      bio: "Especialista em memes de programação e gatos",
    },
    {
      id: 3,
      name: "LaughFactory",
      avatar: "https://i.pravatar.cc/150?img=25",
      followers: "327K",
      bio: "Se não te fizer rir, devolvo seu tempo!",
    },
  ];
    return (
<section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
              {topCreators.map((creator) => (
                // COMPONENTE: CreatorCard
               <CreatorsCard key={creator.id} creator={creator} />
                // FIM COMPONENTE: CreatorCard
              ))}
            </div>
          </section>
    )
}

export default CreatorsSection;