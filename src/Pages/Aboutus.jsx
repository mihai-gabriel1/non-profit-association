import team from "../assets/img/team.webp";

const Aboutus = () => {
  return (
    <div>
      <div className="about-us container">
        <p className="section-title about-us-title mt-2">Cine suntem</p>
        <div className="row">
          <div className="col-lg-6 col-md-12 about-us-left">
            <img src={team} alt="" />
          </div>
          <div className="col-lg-6 col-md-12  about-us-text">
            <p className="section-title section-title-about">
              Unind Islaz și Moldoveni, Asociația Rural 21 catalizează
              dezvoltarea comunitară și conservarea mediului.
            </p>
            <p className="about-us-p">
              Asociația Rural 21 este o asociație înființată în anul 2021 de
              cåtre un grup de membri dornici să contribuie la dezvoltarea
              serviciilor medicosociale pentru persoanele aflate în dificultate,
              dar și la punerea în valoare, sub diferite forme, a resurselor pe
              care comunitățile din Islaz și Moldoveni le dețin.
            </p>
            <p className="about-us-p">
              Asociația Rural 21 se dedica susținerii celor în nevoie din Islaz
              și Moldoveni, oferind nu doar ajutor material, ci și proiecte
              sociale care îmbrățișează tradițiile și inovația. Ne străduim să
              construim un mediu în care fiecare membru al comunității să se
              simtă valorizat și sprijinit.
            </p>
            {/* <p className="about-us-p">
              Păstrăm vii tradițiile care definesc spiritul comunităților
              noastre, promovându-le ca parte integrală a identității locale. În
              același timp, punem accent pe adaptarea la noile tehnologii,
              facilitând accesul la activitǎți medico-sociale.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
