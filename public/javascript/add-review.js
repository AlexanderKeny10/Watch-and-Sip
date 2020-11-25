async function reviewFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const review_text = document.querySelector('input[name="post-review_text"]').value;
  
    console.log(title)
    console.log()
    const response = await fetch(`/api/review`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        review_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', reviewFormHandler);
  