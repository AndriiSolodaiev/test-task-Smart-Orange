import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainTasks } from "./components/MainTasks";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MainTasks />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
