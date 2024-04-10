// localStorage
const users = [
    { username: 'juan ', email: 'juan@icbc.com', password: 'password1' },
    { username: 'pedro', email: 'pedro2@icbc.com', password: 'password2' },
    { username: 'pablo', email: 'pablo3@icbc.com', password: 'password3' },
    { username: 'laura', email: 'laura@icbc.com', password: 'password4' },
    { username: 'mabel', email: 'mabel@icbc.com', password: 'password5' },
    { username: 'flor ', email: 'flor@icbc.com', password: 'password6' }
];

// 
function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // accedo a localStorage
    const user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        //  página de bienvenida
        window.location.href = 'https://i.gifer.com/Xuw0.gif';
    } else {
        document.getElementById('errorMessage').innerText = 'Credenciales incorrectA';
        window.location.href = 'https://i.gifer.com/22B.gif';
    }
}

//
document.getElementById('loginForm').addEventListener('submit', login);
