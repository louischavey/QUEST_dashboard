import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <h1>script dashboard</h1>
      <form action="/upload" method="post" encType="multipart/form-data">
        <input type="file" name="file" />
        <input type="submit" defaultValue="Upload" />
      </form>
      <form action="/run" method="post" encType="multipart/form-data">
        <input type="text" name="script_filename" />
        <input type="submit" defaultValue="write text" />
      </form>
    </div>
  );
}

export default App;

