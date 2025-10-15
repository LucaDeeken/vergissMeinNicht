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
                {[
                  "Montag",
                  "Dienstag",
                  "Mittwoch",
                  "Donnerstag",
                  "Freitag",
                  "Samstag",
                  "Sonntag",
                ].some((day) =>
                  ["Tag", "Abend", "Nacht"].some(
                    (time) => object.days[day].jacke[time] === true
                  )
                )
                  ? "Ja"
                  : [
                        "Montag",
                        "Dienstag",
                        "Mittwoch",
                        "Donnerstag",
                        "Freitag",
                        "Samstag",
                        "Sonntag",
                      ].every((day) =>
                        ["Tag", "Abend", "Nacht"].every(
                          (time) =>
                            !object.days[day].jacke[time] &&
                            object.days[day].jacke[time] === ""
                        )
                      )
                    ? ""
                    : "Nein"}
              </span>
            </div>
          </section>
        </div>

        <div>
          <section className={styles.Jacke}>
            <h2>Gegenstände</h2>
            <div className={styles.cardContentLine}>
              <h3>Vergessen:</h3>
              <span>
                {" "}
                {object.days.Montag.gegenstaende.vergessen +
                  object.days.Dienstag.gegenstaende.vergessen +
                  object.days.Mittwoch.gegenstaende.vergessen +
                  object.days.Donnerstag.gegenstaende.vergessen +
                  object.days.Freitag.gegenstaende.vergessen +
                  object.days.Samstag.gegenstaende.vergessen +
                  object.days.Sonntag.gegenstaende.vergessen}
              </span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Nicht vergessen:</h3>
              <span>
                {object.days.Montag.gegenstaende.nichtVergessen +
                  object.days.Dienstag.gegenstaende.nichtVergessen +
                  object.days.Mittwoch.gegenstaende.nichtVergessen +
                  object.days.Donnerstag.gegenstaende.nichtVergessen +
                  object.days.Freitag.gegenstaende.nichtVergessen +
                  object.days.Samstag.gegenstaende.nichtVergessen +
                  object.days.Sonntag.gegenstaende.nichtVergessen}
              </span>
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
