function Experience(props) {
  return (
    <>
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
      <Experience role="Software Developer" company="Sigma Lab Sdn Bhd" />
    </>
  );
}

export default App;