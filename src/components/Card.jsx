import styles from './Card.module.css';


function Card({cardContent}) {

  return (
    <>
    <section className={styles.card}>
        <p className={styles.cardContent}> {cardContent.label} </p>
        <p className={styles.cardContent}> {cardContent.id} </p>
        <p className={styles.cardContent}> {cardContent.value} </p>


    </section>
    </>
  )
}

export default Card;