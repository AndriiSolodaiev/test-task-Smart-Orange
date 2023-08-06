import { ToastContainer } from "react-toastify";
import { About } from "./components/About";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MainTasks } from "./components/MainTasks";
import { Projects } from "./components/Projects";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
