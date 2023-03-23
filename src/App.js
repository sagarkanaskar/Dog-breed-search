import * as React from "react";
import  PuppyGrid from "./components/PuppyGrid";

export default function App() {
  return (
    <div>
      <header>
        <h1>Puppy List</h1>
      </header>
      <main>
        <PuppyGrid />        
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
}
