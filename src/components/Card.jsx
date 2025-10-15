import styles from "./Card.module.css";

function Card({ cardContent, onClick }) {
  return (
    <>
        <section className={styles.card} onClick={onClick}>
        <p className={`${styles.cardContent} ${styles.kalenderWoche}`}>
            {cardContent.week}
        </p>
        <p className={styles.cardContent}>
            Rausgegangen: <span>{cardContent.insgesamt.rausgegangen}x</span>
        </p>
        <p className={styles.cardContent}>
            Vergess-Quote: <span>{cardContent.insgesamt.vergessRate}%</span>
        </p>
        <p className={styles.cardContent}>
            Avg-Luftfeuchtigkeit: <span>{cardContent.insgesamt.avgLuftfeuchtigkeit}%</span>
        </p>
        <p className={styles.cardContent}>
            Avg-Temperatur: <span>{cardContent.insgesamt.avgTemperatur}°C</span>
        </p>
        </section>
    </>
  );
}

export default Card;
