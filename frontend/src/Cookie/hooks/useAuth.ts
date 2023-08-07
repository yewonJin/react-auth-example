import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { verifyWithCookie } from '../../utils/api';

export const useAuth = () => {
   const navigate = useNavigate();
   const [authenticated, setAuthenticated] = useState(false);

   useEffect(() => {
      const getAuthenticated = async () => {
         const res = await verifyWithCookie();

         if (!res.authenticated) {
            navigate('/cookie/login');
            return;
         }

         setAuthenticated(res.authenticated);
      };
      getAuthenticated();
   }, []);

   return { authenticated };
};
