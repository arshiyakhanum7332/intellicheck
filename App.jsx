import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">

      <aside className="sidebar">
        <div className="logo">
          ◈ IntelliCheck
        </div>

        <nav>
          <button className="active">⌂ Dashboard</button>
          <button>⚖ Compare Documents</button>
          <button>◉ Analytics</button>
          <button>◷ History</button>
          <button>▣ Reports</button>
          <button>☷ Questionnaire</button>
        </nav>

        <div className="sidebar-bottom">
          <button>⚙ Settings</button>
          <button>♙ Profile</button>
        </div>
      </aside>

      <main className="main">

        <header className="topbar">
          <div>
            <h1>Good morning 👋</h1>
            <p>Here's your plagiarism analysis overview.</p>
          </div>

          <div className="profile">IC</div>
        </header>

        <Dashboard />

      </main>

    </div>
  );
}

export default App;