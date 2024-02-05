const Team = () => {
  return (
    <div>
      <div className="team-area-wrapper">
        <div className="team-area container" />
        <p className="section-title team-title">Hai sa facem cunoştințǎ</p>
        <div className="row team-inner">
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/raul.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Raul Gheorghina</p>
                <p className="team-member-title">Preşedinte</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/ali.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Ali Cranta</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/valentin.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Valentin Uba</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/cornelia.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Cornelia Popescu</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/cristina.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Cristina Gabriela</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/dana.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Dana Iordan</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/nineta.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Nineta Cranta</p>
                <p className="team-member-title">Membru</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/adelina.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Adelina Naidin</p>
                <p className="team-member-title">Voluntar</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team_item">
              <div className="team_img">
                <img
                  className="card-img-top img-fluid"
                  src="{{ asset('assets/team/luiza.jpeg') }}"
                  alt="team member"
                />
              </div>
              <div className="team_name">
                <p className="team-member-name">Luiza Ciucu</p>
                <p className="team-member-title">Voluntar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
