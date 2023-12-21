// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const reportUrl =
      'https://app.powerbi.com/view?r=eyJrIjoiMDRjMGYwNWQtNjlmMi00OWU5LWExOGYtMzMxZDQ2OWUxNjQyIiwidCI6IjM1OWRjMDhhLTYzMTgtNGJmNC1hYWExLTAwY2JiMGJjZjAwYSIsImMiOjl9';

    const iframe = document.createElement('iframe');
    iframe.src = reportUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.title = 'Power BI Report';
    iframe.allowfullscreen = true;
    iframe.frameborder = '0';

    const container = document.getElementById('powerbi-container');

    // Remova todos os filhos do contêiner antes de adicionar o iframe
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    container.appendChild(iframe);
  }, []);

  return (
    <div className="App">
      <div id="powerbi-container"></div>
    </div>
  );
}

export default App;
