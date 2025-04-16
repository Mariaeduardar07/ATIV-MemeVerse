import styles from "./interactionBar.module.css";

const InteractionBar = ({ likes, comments }) => {

  return (
    <div className={styles.interactionBar}>
      <div className={styles.interactionButton}>
        <span>👍{likes}</span>
      </div>
      <div className={styles.interactionButton}>
        <span>💬 {comments}</span>
      </div>
      <div className={styles.interactionButton}>
        <span>🔄</span>
        <span>Share</span>
      </div>
      <div className={styles.interactionButton}>
        <span>🔖</span>
        <span>Save</span>
      </div>
    </div>
  );
};

export default InteractionBar;
