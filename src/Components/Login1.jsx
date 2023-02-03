import "./Login1.css"
import React, { useState } from 'react';
import "./Login1.css"
import Footer from "./Footes";
const credentials = {
username: 'Thehindu',
password: '1234',
};
function Login() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const [isLoggedIn, setIsLoggedIn] = useState(false);

const handleSubmit = (event) => {
event.preventDefault();
if (username === credentials.username && password === credentials.password) {
localStorage.setItem('token', 'your-token');
setIsLoggedIn(true);
alert("Login Succesfull!")
} else {
setError('Username or password is incorrect');
}
};

const handleLogout = () => {
localStorage.removeItem('token');
setIsLoggedIn(false);
alert("Logout Succesfull!")
}

return (
<div>
{isLoggedIn ? (
<div className="loggedIn">
<button onClick={handleLogout}>{username}</button>
</div>
) : (
<form onSubmit={handleSubmit}>
<h1>Login Page</h1>
<label>
Username: "Thehindu"
<input
type="text"
value={username}
onChange={(event) => setUsername(event.target.value)}
/>
</label>
<br />
<label>
Password: "1234"
<input
type="password"
value={password}
onChange={(event) => setPassword(event.target.value)}
/>
</label>
<br />
<button type="submit">Login</button>
{error && <p>{error}</p>}
</form>
)}
<br />
<br />
<br />
<h2>For Logout Click On "Thehindu"</h2>
<br />
<br />
<Footer/>
</div>
);
}

export default Login;