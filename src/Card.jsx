import "./Card.css";

function Card() {
  return (
    <div className="full-card">
      <div className="first-section">
        <h2>Join our community</h2>
        <div class="subtitle-1">30-day, hassle-free money back guarantee</div>
        <div className="subtitle">
          <p>
            Gain access to our full library of tutorials along with expert code
            reviews.
          </p>
          <p>
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>
      </div>
      <div className="second-section">
        <div className="card-1">
          <h3>Monthly Subscription</h3>
          <div class="subscription-price">
            $29 <span>per month</span>
          </div>
          <p className="">Full access for less than $1 a day</p>
          <a href="#">Sign Up</a>
        </div>
        <div class="card-2">
          <h3>Why Us</h3>
          <ul>
            <li>Tutorials by industry experts</li>
            <li>Peer &amp; expert code review</li>
            <li>Coding exercises</li>
            <li>Access to our GitHub repos</li>
            <li>Community forum</li>
            <li>Flashcard decks</li>
            <li>New videos every week</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
