import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"

export default function App() {
  return (
    <div className="main">
      <h1>Nook Phone</h1>
      <div className="phone">
        <Header />
        <Card />
      </div>
    </div>
  );
}
