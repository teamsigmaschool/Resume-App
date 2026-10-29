// Reusable component that receives role and company as props
function Experience(props) {
  return (
    <>
      {/* Display the values passed from App */}
      <h3>{props.role}</h3>
      <h4>{props.company}</h4>
    </>
  );
}

function App() {
  return (
    <>
      <h1>Haris Samingan</h1>
      <h2>Software developer</h2>

      {/* Pass different resume information into Experience */}
      <Experience role="Software Developer" company="Sigma Lab Sdn Bhd" />
    </>
  );
}

export default App;