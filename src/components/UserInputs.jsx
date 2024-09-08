function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Inital Investment</label>
          <input
            className="no-arrows"
            type="number"
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
            value={userInput.initialInvestment}
            required
          />
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            className="no-arrows"
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
            value={userInput.annualInvestment}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            className="no-arrows"
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
            value={userInput.expectedReturn}
            required
          />
        </p>
        <p>
          <label htmlFor="">Duration (Years)</label>
          <input
            type="number"
            className="no-arrows"
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
            value={userInput.duration}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
