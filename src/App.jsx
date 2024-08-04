import "./App.css"
import Header from './components/Header'
import Title from './components/Title'
import Main from './components/Main'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="card">
      <Header />
      <Title />
      <Main />
      <Footer />
    </div>
  );
}
