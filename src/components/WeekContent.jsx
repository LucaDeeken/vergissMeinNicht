import styles from "./WeekContent.module.css";

function WeekContent({ weekday, object }) {
  return (
    <>
      <div className={styles.moduleWochenAnsicht}>
        <div>
          <section className={styles.Jacke}>
            <h2>Rausgegangen:</h2>
            <div className={styles.cardContentLine}>
              <h3>Insgesamt:</h3>
              <span>{object.insgesamt.rausgegangen}</span>
            </div>
          </section>
        </div>
        <div>
          <section className={styles.Jacke}>
            <h2>Wetter:</h2>
            <div className={styles.cardContentLine}>
              <h3>Ø Temperatur:</h3>
              <span> {object.insgesamt.avgTemperatur} </span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Ø Luftfeuchtigkeit:</h3>
              <span>{object.insgesamt.avgLuftfeuchtigkeit}</span>
            </div>
          </section>
        </div>
        <div>
          <section className={styles.Jacke}>
            <h2>Jacke</h2>
            <div className={styles.cardContentLine}>
              <h3>Von Nöten:</h3>
              <span>

              {(object.days.Montag.jacke.Tag || object.days.Montag.jacke.Abend || object.days.Montag.jacke.Nacht || object.days.Dienstag.jacke.Tag || object.days.Dienstag.jacke.Abend || object.days.Dienstag.jacke.Nacht || object.days.Mittwoch.jacke.Tag || object.days.Mittwoch.jacke.Abend || object.days.Mittwoch.jacke.Nacht || object.days.Donnerstag.jacke.Tag || object.days.Donnerstag.jacke.Abend || object.days.Donnerstag.jacke.Nacht || object.days.Freitag.jacke.Tag || object.days.Freitag.jacke.Abend || object.days.Freitag.jacke.Nacht || object.days.Samstag.jacke.Tag || object.days.Samstag.jacke.Abend || object.days.Samstag.jacke.Nacht || object.days.Sonntag.jacke.Tag || object.days.Sonntag.jacke.Abend || object.days.Sonntag.jacke.Nacht) ? "Ja" : "Nein"}

              </span>
            </div>
          </section>
        </div>

        <div>
          <section className={styles.Jacke}>
            <h2>Gegenstände</h2>
            <div className={styles.cardContentLine}>
              <h3>Vergessen:</h3>
              <span>  {
    object.days.Montag.gegenstaende.vergessen +
    object.days.Dienstag.gegenstaende.vergessen +
    object.days.Mittwoch.gegenstaende.vergessen +
    object.days.Donnerstag.gegenstaende.vergessen +
    object.days.Freitag.gegenstaende.vergessen +
    object.days.Samstag.gegenstaende.vergessen +
    object.days.Sonntag.gegenstaende.vergessen
  }</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Nicht vergessen:</h3>
              <span>{
    object.days.Montag.gegenstaende.nichtVergessen +
    object.days.Dienstag.gegenstaende.nichtVergessen +
    object.days.Mittwoch.gegenstaende.nichtVergessen +
    object.days.Donnerstag.gegenstaende.nichtVergessen +
    object.days.Freitag.gegenstaende.nichtVergessen +
    object.days.Samstag.gegenstaende.nichtVergessen +
    object.days.Sonntag.gegenstaende.nichtVergessen
  }</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Vergessens-Quote:</h3>
              <span>{object.insgesamt.vergessRate}%</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WeekContent;
