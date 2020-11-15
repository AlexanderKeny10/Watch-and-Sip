async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#user-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      const response = await fetch('/api/users/login', {
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
        `<div>

        
        </div>`
      }
    } else {
        // redirect user to refresh page. 
        // message user "password/username incorect" red text below.
    }
  }
  
  async function signupFormHandler(event) {
    event.preventDefault();
    
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
            username,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
            console.log('success');
            document.location.replace('/login')
        } else {
            alert(response.statusText);
        }
    }
}
  
  
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
  