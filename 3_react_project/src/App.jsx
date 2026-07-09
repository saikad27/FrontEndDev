
const welcome = {
  greeting : "Hey",
  title : "React"
};
function getTitle(){
  return 'React';
}
function App() {
  return (
    <div>
      <h1>{welcome.greeting} {getTitle()}</h1>
      <label htmlFor="search">Search : </label>
      <input id="search" type="text" />
    </div>
  );
}

export default App
