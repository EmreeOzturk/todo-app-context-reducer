import { TodoProvider } from "../context/TodoContext";
export default function App({ Component, pageProps }) {
  return (
    <TodoProvider>
      <Component {...pageProps} />
    </TodoProvider>
  );
}
