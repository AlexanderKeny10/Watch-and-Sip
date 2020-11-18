async function deleteFormHandler(event) {
    event.preventDefault();

    // const id = document.querySelector('input[name="id"]').value;

    const review_text = document.querySelector('input[name="review-text"]').value;
  
    const response = await fetch(`/api/reviews/${review_text}`, {
      method: 'DELETE',
      body: JSON.stringify({}),
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
  
  document.querySelector('.delete-review-btn').addEventListener('click', deleteFormHandler);