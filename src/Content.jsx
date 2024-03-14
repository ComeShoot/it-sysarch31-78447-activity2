import React from "react";
import Student from "./Student";
import "./index.css";

const students = [
  { photo: "https://orig00.deviantart.net/a9fa/f/2014/139/7/e/sandara_park___dara___png_by_shinming-d7j1025.png", name: "Sandara Park", email: "@sandara" },
  { photo: "https://vignette.wikia.nocookie.net/kpop/images/3/3c/TWICE_Nayeon_TWICE3_concept_photo.png/revision/latest?cb=20200716185007", name: "Nayeon", email: "@nayeon" },
  { photo: "http://orig01.deviantart.net/663b/f/2013/321/8/4/png_iu_by_rumxddh-d6uke7j.png", name: "IU", email: "@UI" },
  { photo: "https://preview.redd.it/hori-chans-adorable-smile-v0-4f16nn176l4b1.jpg?width=640&crop=smart&auto=webp&s=e74117b6965eca03f0682ee5402e361f01f3cf0f", name: "Horicahn", email: "@HoriUIU" },
  { photo: "https://millionsofcelebs.com/wp-content/uploads/2020/07/16c25f19aa5e5919ba38bcf63a04e01b_xl-1180x1180.jpg", name: "BeetleJuice", email: "@juiceB" },
  { photo: "https://showbizhouse.com/wp-content/uploads/2021/06/Rae-Lil-Black-Wiki-1-819x1024.jpg", name: "Rae Yakuzxa", email: "@LilRae" },
  { photo: "https://wikifid.com/wp-content/uploads/2021/05/Lana-Rhoades-Bio-Wiki-Age-Net-Worth-Figure-Height-2.jpg", name: "Lahna Rhoade", email: "@roadesLahana" },
  { photo: "https://vignette.wikia.nocookie.net/brooklynnine-nine/images/8/88/S7_Andy_Samberg_-_Jake_Peralta.png/revision/latest?cb=20200312165943", name: "Jake Peralta", email: "@JakeBrooklyn" }
];

const StudentList = () => {
  return (
    <div className="student-list">
      {students.map((student, index) => (
        <Student key={index} photo={student.photo} name={student.name} email={student.email} />
      ))}
    </div>
  );
};

export default StudentList;