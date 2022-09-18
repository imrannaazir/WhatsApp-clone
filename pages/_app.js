import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import Login from '../components/Login';
import Loading from '../components/Loading';


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  if (loading) return <Loading />
  if (!user) return <Login />

  return <Component  {...pageProps} />
}

export default MyApp
