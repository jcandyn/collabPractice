import './App.css'

// Create the Sunset component
function Sunset() {
  return (
    <div className="sunset-section">
      <h2>The sunset is beautiful</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Anatomy_of_a_Sunset-2.jpg/1200px-Anatomy_of_a_Sunset-2.jpg"
        alt="Sunset"
        className="sunset-image"
      />
    </div>
  )
}

function App() {
  return (
    <div>
      {/* Only render the Sunset component */}
      <Sunset />
    </div>
  )
}

export default App
