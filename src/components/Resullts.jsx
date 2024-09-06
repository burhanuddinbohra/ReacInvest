import { calculateInvestmentResults, formatter } from "../util/investment";

function Results({ input }) {
  const annualData = calculateInvestmentResults(input);
  //calculateInvestmentResults fn() returns a annual data Array with following fields
  // year: number;
  // interest: number;
  // valueEndOfYear: any;
  // annualInvestment: any;
  console.log(annualData);
  const initialInvest =
    annualData[0].valueEndOfYear -
    annualData[0].interest -
    annualData[0].annualInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Intrest (Year)</th>
          <th>Total Investment</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((yearData) => {
          const totalIntrest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvest;

          const totalAmmountInvested = yearData.valueEndOfYear - totalIntrest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalIntrest)}</td>
              <td>{formatter.format(totalAmmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Results;
