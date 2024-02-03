<div class="team-area-wrapper">
    <div class="team-area container">
        <p class="section-title team-title">
            Hai sa facem cunoştințǎ
        </p>
        <div class="row team-inner">
            <div class="owl-carousel owl-theme">
                @foreach(config('team.members') as $member)
                    <div class="item">
                        <div class="team_item">
                            <div class="team_img">
                                <img class="card-img-top img-fluid" src="{{ asset($member['image']) }}" alt="team member">
                            </div>
                            <div class="team_name">
                                <p class="team-member-name">
                                    {{ $member['name'] }}
                                </p>
                                <p class="team-member-title">
                                    {{ $member['title'] }}
                                </p>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
