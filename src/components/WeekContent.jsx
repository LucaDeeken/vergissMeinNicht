import styles from "./WeekContent.module.css";

function WeekContent({ weekday }) {
  return (
    <>
      <div className={styles.moduleWochenAnsicht}>
        <div>
          <section className={styles.Jacke}>
            <h2>Rausgegangen:</h2>
            <div className={styles.cardContentLine}>
              <h3>Summe:</h3>
              <span>60</span>
            </div>
          </section>
        </div>
        <div>
          <section className={styles.Jacke}>
            <h2>Wetter:</h2>
            <div className={styles.cardContentLine}>
              <h3>Mindest-Temperatur:</h3>
              <span>60</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Höchst-Temperatur:</h3>
              <span>60</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Durchschnitts-Temperatur:</h3>
              <span>60</span>
            </div>
          </section>
        </div>
        <div>
          <section className={styles.Jacke}>
            <h2>Jacke</h2>
            <div className={styles.cardContentLine}>
              <h3>Gebraucht:</h3>
              <span>8</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Nicht gebraucht:</h3>
              <span>8</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Von Nöten:</h3>
              <span>75%</span>
            </div>
          </section>
        </div>

        <div>
          <section className={styles.Jacke}>
            <h2>Gegenstände</h2>
            <div className={styles.cardContentLine}>
              <h3>Vergessen:</h3>
              <span>8</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Nicht vergessen:</h3>
              <span>8</span>
            </div>
            <div className={styles.cardContentLine}>
              <h3>Vergessens-Quote:</h3>
              <span>75%</span>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default WeekContent;
