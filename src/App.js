import Login from './components/Login/Login';
import LogoutButton from './components/Logout/Logout'
import Profile from './components/Profile/Profile'
import { useAuth0 } from "@auth0/auth0-react";

function App() {

  const { isLoading, error, isAuthenticated } = useAuth0();

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isAuthenticated) {
    return (
      <>
        <LogoutButton />
        <br/>
        <Profile />
      </>
    )
  }
  
  return <Login />;
}

export default App;
