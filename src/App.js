import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>What are you looking for? </h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a href="https://frosty-gates-0d210d.netlify.app/"> Mari Kubota</a>.
            Open Source on {""}
            <a href="https://github.com/Rilakkumari/dictionary-project">
              Github
            </a>
            .
          </small>
        </footer>
      </div>
    </div>
  );
}
