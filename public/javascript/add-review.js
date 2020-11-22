async function reviewFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const review_text = document.querySelector('input[name="review_text"]').value;
  
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
  
  document.querySelector('add-review').addEventListener('submit', reviewFormHandler);
  