import styles from './Card.module.css';


function Card({cardContent, onClick}) {

  return (
    <>
    <section className={styles.card} onClick = {onClick}>
        <p className={`${styles.cardContent} ${styles.kalenderWoche}`}>{cardContent.week}</p>
        <p className={styles.cardContent}> Jacken-Quote: {cardContent.jackenRate} </p>
        <p className={styles.cardContent}> Vergess-Quote: {cardContent.vergessRate} </p>


    </section>
    </>
  )
}

export default Card;