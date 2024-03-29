async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#user-login').value;
    const password = document.querySelector('#password-login').value;
    if (username && password) {
      const response = await fetch('/api/user/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
