import './App.css';
import { useEffect } from "react";
import {
  useAuth,
  useLoginWithRedirect,
  AdminPortal,
  useTenantsState
} from "@frontegg/react";
import {ContextHolder} from "@frontegg/rest-api";


function App() {
  const { user, isAuthenticated } = useAuth();
  const tenantsState = useTenantsState();
  const loginWithRedirect = useLoginWithRedirect();

  console.log('user - ', user);
  console.log('isAuthenticated - ', isAuthenticated);
  console.log('user - ', user);
  console.log('tenants - ', tenantsState?.tenants);

  useEffect(() => {
    if (!isAuthenticated) {
      console.log('user is not logged-on. going to loginWithRedirect')
      loginWithRedirect();
    }
  }, [isAuthenticated, loginWithRedirect]);

  const logout = () => {
    const baseUrl = ContextHolder.getContext().baseUrl;
    window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <div>
          <div>
            <img src={user?.profilePictureUrl} alt={user?.name} />
          </div>
          <div>
            <span>Logged in as: {user?.name}</span>
          </div>
          <div>
            <button onClick={() => alert(user.accessToken)}>What is my access token?</button>
          </div>
          <div>
            <button onClick={() => AdminPortal.show()}>Open admin portal</button>
          </div>
          <div>
            <button onClick={() => logout()}>Click to logout</button>
          </div>
        </div>
      ) : (
        <div>
          <button onClick={() => loginWithRedirect()}>Click me to login</button>
        </div>
      )}
    </div>
  );
}

export default App;
