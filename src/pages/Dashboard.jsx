import styles from './Dashboard.module.css';
import Card from "../components/Card";
import { useState, useEffect } from 'react';

function Dashboard() {

  let [cardObjectList, setObjectList] = useState([]);

useEffect(() => {
  setObjectList([
    {
      id: crypto.randomUUID(),
      week: "KW 42",
      days: {
        Montag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "cold" },
        Dienstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "warm" },
        Mittwoch: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "rainy" },
        Donnerstag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "sunny" },
        Freitag: { Jacke: false, Geldbeutel: false, Schlüssel: true, Wetter: "cloudy" },
        Samstag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "cold" },
        Sonntag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "warm" },
      },
      jackenRate: 42.86,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 43",
      days: {
        Montag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Dienstag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cold" },
        Mittwoch: { Jacke: false, Geldbeutel: false, Schlüssel: true, Wetter: "rainy" },
        Donnerstag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "sunny" },
        Freitag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "cloudy" },
        Samstag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cold" },
        Sonntag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
      },
      jackenRate: 71.43,
      vergessRate: 21.43,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 44",
      days: {
        Montag: { Jacke: false, Geldbeutel: false, Schlüssel: true, Wetter: "rainy" },
        Dienstag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "cloudy" },
        Mittwoch: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "sunny" },
        Donnerstag: { Jacke: true, Geldbeutel: false, Schlüssel: false, Wetter: "cold" },
        Freitag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Samstag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "cold" },
        Sonntag: { Jacke: true, Geldbeutel: false, Schlüssel: false, Wetter: "rainy" },
      },
      jackenRate: 57.14,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 45",
      days: {
        Montag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "sunny" },
        Dienstag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Mittwoch: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "cloudy" },
        Donnerstag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "cold" },
        Freitag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "rainy" },
        Samstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "sunny" },
        Sonntag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "warm" },
      },
      jackenRate: 71.43,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 46",
      days: {
        Montag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "cloudy" },
        Dienstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "cold" },
        Mittwoch: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "rainy" },
        Donnerstag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Freitag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "sunny" },
        Samstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "cold" },
        Sonntag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "rainy" },
      },
      jackenRate: 57.14,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 47",
      days: {
        Montag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Dienstag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "cloudy" },
        Mittwoch: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "cold" },
        Donnerstag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "rainy" },
        Freitag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "sunny" },
        Samstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "warm" },
        Sonntag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cold" },
      },
      jackenRate: 71.43,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 48",
      days: {
        Montag: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "rainy" },
        Dienstag: { Jacke: true, Geldbeutel: false, Schlüssel: false, Wetter: "cold" },
        Mittwoch: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
        Donnerstag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cloudy" },
        Freitag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "sunny" },
        Samstag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "cold" },
        Sonntag: { Jacke: true, Geldbeutel: true, Schlüssel: true, Wetter: "warm" },
      },
      jackenRate: 57.14,
      vergessRate: 28.57,
    },
    {
      id: crypto.randomUUID(),
      week: "KW 49",
      days: {
        Montag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cloudy" },
        Dienstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "rainy" },
        Mittwoch: { Jacke: false, Geldbeutel: true, Schlüssel: true, Wetter: "cold" },
        Donnerstag: { Jacke: true, Geldbeutel: false, Schlüssel: true, Wetter: "warm" },
        Freitag: { Jacke: false, Geldbeutel: true, Schlüssel: false, Wetter: "sunny" },
        Samstag: { Jacke: true, Geldbeutel: true, Schlüssel: false, Wetter: "cloudy" },
        Sonntag: { Jacke: false, Geldbeutel: false, Schlüssel: true, Wetter: "warm" },
      },
      jackenRate: 57.14,
      vergessRate: 42.86,
    },
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