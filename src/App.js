import './App.css';
// color for background: #611818
// relative path to background picture: ./trees.png
function App() {
  return (
    <div className="app">
      <div className="titles-container">
        <h1 classname="titles"><b>Explore</b></h1>
        <svg id="plus" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 43 43"><g><g><path fill="#fff" d="M29.295 22.139h-6.833v7.17h-1.934v-7.17h-6.833v-1.815h6.833v-7.11h1.934v7.11h6.833zM21.5 0C9.626 0 0 9.626 0 21.5S9.626 43 21.5 43 43 33.374 43 21.5A21.5 21.5 0 0 0 21.5 0z" /></g></g></svg>
        <h6 className="titles">More Details</h6>
      </div>
      <div className="cover"></div>
    </div>
  );
}

export default App;