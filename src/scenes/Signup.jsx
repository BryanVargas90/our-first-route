export default function Signup ({setUser}) {
    return (
      <section style={{background: "#ff000030"}}>
        <h1>Signup</h1>
        <button onClick={() => setUser('Returning User')}>
          Signup</button>
      </section>
    )
  }