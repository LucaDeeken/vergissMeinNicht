import styles from "./CardContent.module.css";

function CardContent({ weekday, object }) {
  return (
    <>
      <h2 className={styles.weekdayTitle}> {weekday} </h2>
      <div className={styles.weekdayContent}>
        <h2></h2>
        <div className={styles.cardContentLine}>
          <h3>Avg-Temperatur:</h3>
          <span>{object.wetter.Temperatur}°C</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Avg-Luftfeuchtigkeit:</h3>
          <span>{object.luftfeuchtigkeit.Luftfeuchtigkeit}%</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Rausgegangen:</h3>
          <span>{object.rausgegangen}x</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Jacke von Nöten:</h3>
        <span>
        {(object.jacke.Tag || object.jacke.Abend || object.jacke.Nacht) ? "Ja" : "Nein"}
        </span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Gegenstand vergessen:</h3>
          <span>{object.gegenstaende.vergessen}</span>
        </div>
        <div className={styles.cardContentLine}>
          <h3>Gegenstand dabei:</h3>
          <span>{object.gegenstaende.nichtVergessen}</span>
        </div>
      </div>
    </>
  );
}

export default CardContent;
