function UserInput({ userInput, onChangeInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">Inital Investment</label>
          <input
            type="number"
            onChange={(event) => {
              onChangeInput("initialInvestment", event.target.value);
            }}
            value={userInput.initialInvestment}
            required
          />
          <label>{userInput.initialInvestment}</label>
        </p>
        <p>
          <label htmlFor="">Annual Investment</label>
          <input
            type="number"
            onChange={(event) => {
              onChangeInput("annualInvestment", event.target.value);
            }}
            value={userInput.annualInvestment}
            required
          />
          <label>{userInput.annualInvestment}</label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            onChange={(event) => {
              onChangeInput("expectedReturn", event.target.value);
            }}
            value={userInput.expectedReturn}
            required
          />
          <label>{userInput.expectedReturn}</label>
        </p>
        <p>
          <label htmlFor="">Duration</label>
          <input
            type="number"
            onChange={(event) => {
              onChangeInput("duration", event.target.value);
            }}
            value={userInput.duration}
            required
          />
          <label>{userInput.duration}</label>
        </p>
      </div>
    </section>
  );
}

export default UserInput;
