import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
import Layout from '../components/layout/layout';
import { MoralisContextProvider } from '../context';


function MyApp({ Component, pageProps }) {
  
  return (
    <>
  <MoralisProvider serverUrl={process.env.NEXT_PUBLIC_ENV_LOCAL_MORALIS_SERVER_URL} appId={process.env.NEXT_PUBLIC_ENV_LOCAL_MORALIS_APPLICATION_ID} masterKey={process.env.NEXT_PUBLIC_ENV_LOCAL_moralisMasterKey}>
  <MoralisContextProvider>
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </MoralisContextProvider>
  </MoralisProvider>
    <footer className='text-xl text-center text-purple-600'>© {new Date().getFullYear()} Degenalysis.</footer>
  </>
  )
}

export default MyApp;
