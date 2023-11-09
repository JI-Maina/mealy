import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [bookingId, setBookingId] = useState(null);

  return (
    <AuthContext.Provider value={{ auth, setAuth, bookingId, setBookingId }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
