




export function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [prenom, setPrenom] = useState('');

    const handleSubmit = () => {
        fetch('http://localhost:3000/users/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({firstName, username, password})
                }.then(response => response.json())
    )}
}