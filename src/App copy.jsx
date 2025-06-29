const App = () => {

  const name = 'John Doe';
  const x = 10;
  const y = 20;
  const names = ['Mike', 'Nick', 'Jack'];
  const loggedIn = true;

  const styles = {
    color: 'red',
    fontSize: '2rem'
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Hello, {name}</h1>
      <p>Sum of {x} and {y} is {x + y}</p>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

      {loggedIn ? <h1 style={{ color: 'green', fontSize: '2rem' }}>Hello Member</h1> : <h1>Hello Guest</h1>}

      <p style={styles}>App</p>
    </div>
  )
}

export default App