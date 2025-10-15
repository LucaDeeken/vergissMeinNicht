import styles from "./CardContent.module.css";

function CardContent({ weekday }) {
  return (
    <>
      <h2 className={styles.weekdayTitle}> {weekday} </h2>
      <div className={styles.weekdayContent}>
        <div className={styles.cardContentLine}>
          <h3>Wetter:</h3>
          <span>12°C</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Gegenstand vergessen:</h3>
          <span>True</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Wie oft vergessen:</h3>
          <span>2</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Jacke von Nöten:</h3>
          <span>true</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Wie oft rausgegangen:</h3>
          <span>2</span>
        </div>
      </div>
    </>
  );
}

export default CardContent;
