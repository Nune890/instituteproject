import React, { useEffect, useState } from "react";
import styles from "./MasterOfProfessional.module.css";
import ProfessionsItem from "../../../sharedComponents/items/profesionsItem/ProfessionsItem";
import { professionsItemData } from "../../../services/professionsItemData";
import ProfessionsInfoItem from "../../../sharedComponents/items/professionsInfoItem/ProfessionsInfoItem";
import { professionsInfo } from "../../../services/professionsItemData";

const MasterOfProfessioanal = () => {
  const [profId, setProfId] = useState(1);
  const [profData, setProfData] = useState(professionsInfo[0].expension);

  const getProfessionId = (id) => {
    setProfId(id);
    let data = professionsInfo.find((el) => el.id == id);
    setProfData(data.expension);
  };


  return (
    <div className={styles.mainBox}>
      <div className={styles.mainTopBox}>
        <h1>
          BACHELOR OF <br />
          PROFESSIONAL STUDIES (BPS/BS)
        </h1>
        <div className={styles.professionsBox}>
          {professionsItemData.map((elem) => {
            return (
              <ProfessionsItem
                item={elem}
                key={elem.id}
                professionId={getProfessionId}
                checked={elem.id == profId ? true : false}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.mainMiddleBox}>
        {profData.map((elem) => {
          return <ProfessionsInfoItem key={elem.id} item={elem} />;
        })}
      </div>
      <div className={styles.mainBottomBox}>
        <div className={styles.bottomMiddleBox}>
          <h1>HOW TO APPLY</h1>
          <p>
            Candidates should contact{" "}
            <a href="mail">CIHE.AdmissionOffice@Counsellor.com</a>
            at first point of contact. It is encouraged to send all personal and
            professional documents for better assessment by concerned
            department.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MasterOfProfessioanal;
