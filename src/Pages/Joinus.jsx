const Joinus = () => {
  return (
    <div>
      <div className="home-become-volunteer-wrapper">
        <div className="become-volunteer container">
          <p className="volunteer-title">Alǎturǎ-te echipei noastre</p>
          <p className="volunteer-text">
            Alătură-te Asociației Rural 21 și contribuie la dezvoltarea
            comunităților Islaz și Moldoveni. Haide să construim un viitor mai
            bun, impreunǎ!
          </p>
          <a href="{{ route('joinus-forms') }}" className="volunteer-join-us">
            Sǎ trecem la treabǎ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
