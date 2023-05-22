import Router from "./Routes/Router"
import GlobalState from "./contexts/GlobalState";

function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  )
}
export default App;
