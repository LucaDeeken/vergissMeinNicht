import styles from './Card.module.css';


function Card({cardContent}) {

  return (
    <>
    <section className={styles.card}>
        <p className={`${styles.cardContent} ${styles.kalenderWoche}`}>{cardContent.week}</p>
        <p className={styles.cardContent}> Jacken-Quote: {cardContent.jackenRate} </p>
        <p className={styles.cardContent}> Vergess-Quote: {cardContent.vergessRate} </p>


    </section>
    </>
  )
}

export default Card;