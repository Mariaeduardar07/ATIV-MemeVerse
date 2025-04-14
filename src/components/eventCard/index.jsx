import styles from "./eventCard.module.css";

const EventCard = ({  id, title, date, participants }) => {
  return (
    <div key={id} className={styles.eventCard}>
      <h4 className={styles.eventTitle}>{title}</h4>
      <p className={styles.eventDate}>{date}</p>
      <p className={styles.eventParticipants}>
        {participants} participantes
      </p>
      <button className={styles.eventButton}>Participar</button>
    </div>
  );
};

export default EventCard;