import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { verifyWithSessionStorage } from '../../utils/api';

export const useAuthWithLocalStorage = () => {
   const navigate = useNavigate();
   const [authenticated, setAuthenticated] = useState(false);

   useEffect(() => {
      const getAuthenticated = async () => {
         const res = await verifyWithSessionStorage();

         if (!res.authenticated) {
            navigate('/session/login');
            return;
         }

         setAuthenticated(res.authenticated);
      };
      getAuthenticated();
   }, []);

   return { authenticated };
};
