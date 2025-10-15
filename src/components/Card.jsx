import styles from "./Card.module.css";

function Card({ cardContent, onClick }) {
  return (
    <>
      <section className={styles.card} onClick={onClick}>
        <p className={`${styles.cardContent} ${styles.kalenderWoche}`}>
          {cardContent.week}
        </p>
        <p className={styles.cardContent}>
          {" "}
          Rausgegangen: {cardContent.insgesamt.rausgegangen}{" "}
        </p>
        <p className={styles.cardContent}>
          {" "}
          Vergess-Quote: {cardContent.insgesamt.vergessRate}{" "}
        </p>
        <p className={styles.cardContent}>
          {" "}
          Jacken-Quote: {cardContent.insgesamt.jackenRate}{" "}
        </p>
        <p className={styles.cardContent}>
          {" "}
          Avg-Temperatur: {cardContent.insgesamt.avgTemperatur}{" "}
        </p>
      </section>
    </>
  );
}

export default Card;
