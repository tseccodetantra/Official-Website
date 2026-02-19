function Events() {
    return (
        <section className="events" id="events">
            <div className="events-container">
                <h2 className="section-title">Epic Events</h2>
                <div className="section-underline"></div>

                <p className="events-intro">
                    Choose your battle! From code wars to robot rumbles, we've got challenges
                    that'll push every tech warrior to their limits. 🔥
                </p>

                <div className="events-grid">
                    <div className="event-card">
                        <div className="event-caption">MAIN EVENT</div>
                        <div className="event-icon-wrapper">
                            <div className="event-icon">⚡</div>
                        </div>
                        <h3 className="event-title">HACKATHON</h3>
                        <div className="event-subtitle">24 Hours of Pure Code</div>
                        <p className="event-description">
                            The ultimate coding marathon where teams race against time to build
                            innovative solutions to real-world problems. No sleep, all code!
                        </p>
                        <div className="event-features">
                            <div className="event-feature">24 Hours Non-Stop</div>
                            <div className="event-feature">Team of 3-4</div>
                            <div className="event-feature">₹50,000 Prize</div>
                            <div className="event-feature">Industry Mentors</div>
                        </div>
                        <a href="#" className="event-cta">Register Now</a>
                    </div>

                    <div className="event-card">
                        <div className="event-caption">FUN ROUND</div>
                        <div className="event-icon-wrapper">
                            <div className="event-icon">🎯</div>
                        </div>
                        <h3 className="event-title">CODE HUNT</h3>
                        <div className="event-subtitle">Debug the Mystery</div>
                        <p className="event-description">
                            A thrilling scavenger hunt where clues are hidden in code snippets.
                            Decode, solve, and race to the finish line!
                        </p>
                        <div className="event-features">
                            <div className="event-feature">3 Hour Rounds</div>
                            <div className="event-feature">Solo or Pairs</div>
                            <div className="event-feature">₹20,000 Prize</div>
                            <div className="event-feature">All Languages</div>
                        </div>
                        <a href="#" className="event-cta">Register Now</a>
                    </div>

                    <div className="event-card">
                        <div className="event-caption">MEGA EVENT</div>
                        <div className="event-icon-wrapper">
                            <div className="event-icon">🤖</div>
                        </div>
                        <h3 className="event-title">ROBO WARS</h3>
                        <div className="event-subtitle">Battle of the Bots</div>
                        <p className="event-description">
                            Engineer your ultimate battle robot and crush the competition in
                            a spectacular arena of steel, sparks, and strategy!
                        </p>
                        <div className="event-features">
                            <div className="event-feature">Weight Classes</div>
                            <div className="event-feature">Team of 2-5</div>
                            <div className="event-feature">₹30,000 Prize</div>
                            <div className="event-feature">Open Arena</div>
                        </div>
                        <a href="#" className="event-cta">Register Now</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Events;
