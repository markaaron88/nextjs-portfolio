import "./../styles/style.scss";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="className">
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
