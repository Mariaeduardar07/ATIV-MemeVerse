import CreatorsCard from '../creatorsCard';
import styles from './creatorsSection.module.css';


const CreatorsSection = ({topCreators}) => { 
    return (
<section className={styles.creatorsSection}>
            <h2 className={styles.sectionTitle}>Criadores em Destaque</h2>
            <div className={styles.creatorsGrid}>
              {topCreators.map((creator) => (
                // COMPONENTE: CreatorCard
               <CreatorsCard id={creator.id} creator={creator} />
                // FIM COMPONENTE: CreatorCard
              ))}
            </div>
          </section>
    )
}

export default CreatorsSection;