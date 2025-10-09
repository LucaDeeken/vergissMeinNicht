import styles from './Dashboard.module.css';
import Card from "../components/Card";
import { useState, useEffect } from 'react';

function Dashboard() {

  let [cardObjectList, setObjectList] = useState([]);

  useEffect(() => {
    setObjectList([
      { id: crypto.randomUUID(), label: "Jacke", value: false },
      { id: crypto.randomUUID(), label: "Geldbeutel", value: true },
      { id: crypto.randomUUID(), label: "Schlüssel", value: true },
      { id: crypto.randomUUID(), label: "Wetter", value: "cold" },
            { id: crypto.randomUUID(), label: "Jacke", value: false },
      { id: crypto.randomUUID(), label: "Geldbeutel", value: true },
      { id: crypto.randomUUID(), label: "Schlüssel", value: true },
      { id: crypto.randomUUID(), label: "Wetter", value: "cold" },
    ]);
  }, []);


  return (
    <>
    <main>
        <div className={styles.cardArea}>
 
          {cardObjectList.map((object) => (
            <div
              key={object.id}
              className="card"
            >
              <Card cardContent = {object} />
            </div>
          ))}
     
        </div>
    </main>
    </>
  )
}

export default Dashboard