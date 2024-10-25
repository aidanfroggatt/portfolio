import { useNavigate, useLocation } from '@remix-run/react';
import { useEffect, useRef } from 'react';

function usePreviousRoute() {
  const navigate = useNavigate();
  const location = useLocation();
  const previousRoute = useRef(location.pathname); // Store the initial route

  useEffect(() => {
    // Update the previous route before each navigation
    const unlisten = navigate.listen(({ location }) => {
      previousRoute.current = location.pathname;
    });

    // Clean up the listener
    return () => {
      unlisten();
    };
  }, [navigate]);

  return previousRoute.current;
}

export default usePreviousRoute;
