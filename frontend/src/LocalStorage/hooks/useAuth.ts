import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { verifyWithLocalStorage } from '../../utils/api';

export const useAuthWithLocalStorage = () => {
   const navigate = useNavigate();
   const [authenticated, setAuthenticated] = useState(false);

   useEffect(() => {
      const getAuthenticated = async () => {
         const res = await verifyWithLocalStorage();

         if (!res.authenticated) {
            navigate('/local/login');
            return;
         }

         setAuthenticated(res.authenticated);
      };
      getAuthenticated();
   }, []);

   return { authenticated };
};
