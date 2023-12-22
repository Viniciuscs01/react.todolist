import List from './components/List'
import Form from './components/Form'
import { ItemsContextProvider } from './context/items-context'

function App() {
  return (
    <>
      <ItemsContextProvider>
        <Form />
        <List />
      </ItemsContextProvider>
    </>
  )
}

export default App
