import './App.css'

function App() {
  const username = "pevaio";
  const note = "ah nao teodoro plmds"
  const postTime = new Date().toLocaleDateString();
  return (
    <main className="feed-container">
      <div className='vibe-container'>
      <h1>@{username}</h1>
      <h3>{note}</h3>
      <p>Postado às <b>{postTime}</b></p>
      </div>
      </main>
  )
}

export default App
