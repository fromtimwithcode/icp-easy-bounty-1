import { useState } from 'react'
import { icp_easy_bounty_1_backend } from 'declarations/icp-easy-bounty-1-backend'

function App() {
  const [greeting, setGreeting] = useState('')
  const [names, setNames] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const name = event.target.elements.name.value
    icp_easy_bounty_1_backend.greet(name).then((greeting) => {
      setGreeting(greeting)
    })
    return
  }

  async function getNames() {
    try {
      const names = await icp_easy_bounty_1_backend.getSubmittedNames()
      setNames(names)
    } catch (e) {
      console.error(e)
    }
    return
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section>
      <hr />
      <button type="button" onClick={getNames}>
        Display all submissions
      </button>
      {names.length > 0 &&
        names.map((name, index) => <div key={`${name}${index}`}>{name}</div>)}
    </main>
  )
}

export default App
