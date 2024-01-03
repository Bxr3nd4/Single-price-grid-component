import "./Card.css";

function Card() {
  return (
    <div className="full-card">
      <div className="first-section">
        <h1>Join our community</h1>
        <p>30-day, hassle-free money back guarantee</p>
        <p>
          Gain access to our full library of tutorials along with expert code
          reviews.
          <br />
          Perfect for any developers who are serious about honing their skills.
        </p>
      </div>
      <div className="second-section">
        <div className="card-1">
          <h1>Monthly Subscription</h1>
          <p>
            <strong>$29</strong>per month
          </p>
          <p>Full access for less than $1 a day</p>
          <button>Sign Up</button>
        </div>
        <div className="card-2">
          <h1>Why Us</h1>
          <p>
            Tutorials by industry experts
            <br />
            Peer & expert code review
            <br />
            Coding excercises
            <br />
            Access to our GitHub repos
            <br />
            Community forum
            <br />
            Flashcard decks
            <br />
            New videos every week
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
