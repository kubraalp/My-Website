import { Provider } from "react-redux";
import store from "./store/store";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Skills />
        <Profile />
        <Projects />
      </div>
    </Provider>
  );
}

export default App;
