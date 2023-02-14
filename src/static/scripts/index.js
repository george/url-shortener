document.getElementById('shorten').addEventListener('click', () => {
    const url = document.getElementById('url').value;

    if (!url.includes('http://') && !url.includes('https://')) {
        return
    }

    fetch('/create', {
        method: 'POST',
        body: JSON.stringify({
            url: url
        })
    }).then(response => response.json())
      .then(response => {
          document.getElementById('url').value = window.location + 'url/' + response['shortened_url']
      })
});