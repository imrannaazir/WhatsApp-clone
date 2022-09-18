import '../styles/globals.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase.init';
import Login from '../components/Login';


function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (!user) {
    return <Login />
  }
  else {
    return <Component {...pageProps} />
  }
}

export default MyApp
