async function newReviewHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector('input[name="review-text"]').value;
  
    const response = await fetch(`/api/reviews`, {
      method: 'POST',
      body: JSON.stringify({
       review_text: review_text
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
  
  document.querySelector('.new-review-form').addEventListener('submit', newReviewHandler);
  