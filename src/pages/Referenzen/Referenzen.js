import React from 'react';
import Layout from '@theme/Layout';
import styles from './asdjasdas.nichtbenutzen.module.css';
import { useHistory } from 'react-router-dom';
import Button1 from './refbutton';

export default function Referenzen() {
  const history = useHistory();

  const navigateToZielseite = () => {
    history.push('/Zielseite');
  };

  return (
    <Layout title="Orte">
      <div className={styles.referenzen}>
        <div className={styles.titel}>
          <h1>Referenzen</h1>
          <p>Die Auflistung wird laufend aktualisiert.</p>
        </div>
        <div className={`${styles.world} ${styles.map}`}>
          <img src="/img/worldmap.png" alt="map" />
          <div className={`${styles.pin} ${styles.Deutschland}`}>
            <span>
              <strong>Deutschland</strong><br />
              <br />
              <strong>📌 Vattenfall</strong> Oktober 2009 <br />
              Umprogrammierung einer Siemens - Steuerung (5 x 135U vernetzt)<br />
              Automatische Anfahrschaltung von 3 DEs und 1 HWE<br />
              <br />
              <strong>📌 Deutsche Bahn Eberswalde</strong> Januar 2010 <br />
              Umbau der Abwasseraufbereitung (ECF1000 in CPU 315-2DP und ET200s)<br />
              <br />
              <strong>📌 Stadtentwässerung Düsseldorf</strong> März 2010 <br />
              Wartung der Dampfkesselanlage, Betrieb mit Erd- und Faulgas - Brennereinstellungen (Lamtec FMS)<br />
              <br />
              <strong>📌 Schako-Messkirch</strong> Oktober 2010 <br />
              Wartung Prüföfen<br />
              <br />
              <strong>📌 Dortmund</strong> April 2011 <br />
              Umbau eines Deckenprüfofens<br />
              <br />
              <strong>📌 DMT Lathen</strong> April/Mai 2011 <br />
              Wandprüfofen: Brennerwartung/Optimierung, Erweiterung um 80 Objekttemperaturen<br />
              <br />
              <strong>📌 Xella - Bad Grund</strong> Juni 2011 <br />
              Kleinprüfofen - Erneuerung der E-Technik, VIPA-ET200s, FU Siemens<br />
            </span>
          </div>
          <div className={`${styles.pin} ${styles.Saudi}`}>
            <span>
              <strong>Saudi Arabien</strong><br />
              <br />
              <strong>📌 Chemie</strong> Februar 2010 <br />
              Inbetriebnahme einer Thermische Abgasreinigung (sicherheitsgerichteten Siemens S7-400H/F-Steuerung und WINCC V7 mit redundanter Modbusanbindung an das kundenseitige PLS) <br />
              <br />
              <strong>📌 Chemie</strong> April 2010 <br />
              Realisierung einer Verfahrensänderung (Umprogrammierung) von 2 Stk. Thermische Abgasreinigungen <br />
              <br />
              <strong>📌 ...</strong> November 2010 <br />
              IBN eines Thermal Oxydisers ; WinCC7; S7-400HF <br />
              <br />
            </span>
          </div>
          <div className={`${styles.pin} ${styles.Indien}`}>
            <span>
              <strong>Indien</strong><br />
              <br />
              <strong>📌 Chemie</strong> August/September 2010 <br />
              Inbetriebnahme einer Abgasreinigung mit Dampferzeuger und Wäscher- Siemens S7-300, Lamtec Etamatic, Pilz PNOZmulti <br />
              <br />
            </span>
          </div>
          <div className={`${styles.pin} ${styles.Thailand}`}>
            <span>
              <strong>Thailand</strong><br />
              <br />
              <strong>📌 ...</strong> Oktober 2011 <br />
              S7-400HF - Programmierung + Inbetriebnahme 2Stk. Therm. Abgasreinigungen mit je Abhitzekessel, Wäscher usw. <br />
              <br />
            </span>
          </div>
          <div className={styles.buttonContainer}>
          <Button1 onClick={navigateToZielseite} /> {/* Übergebe die scrollToFirstText-Funktion als onClick-Prop */}          
          </div>
        </div>
      </div>
    </Layout>
  );
}