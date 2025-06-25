import { useEffect } from 'react';

function GistEmbed({ gistId }) {
  useEffect(() => {
    const gistScript = document.createElement('script');
    gistScript.src = `https://gist.github.com/${gistId}.js`;
    gistScript.async = true;

    const gistContainer = document.getElementById(gistId);
    if (gistContainer && !gistContainer.hasChildNodes()) {
      gistContainer.appendChild(gistScript);
    }
  }, [gistId]);

  return <div id={gistId}></div>;
}

export default GistEmbed;
