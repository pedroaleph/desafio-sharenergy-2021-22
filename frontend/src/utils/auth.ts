import jwtDecode from "jwt-decode";

type AccessToken = {
    _id: number,
    email: string,
    name: string,
    exp: number
  }

export const saveSessionData = (token: string) => {
    localStorage.setItem('access_token', token);
}

export const getSessionData = () => {
    const sessionData = localStorage.getItem('access_token') ?? '';

    return sessionData;
}

export const getAccessTokenDecoded = () => {
    const sessionData = getSessionData();
    try {
      const tokenDecoded = jwtDecode(sessionData);
      return tokenDecoded as AccessToken;
    } catch (error) {
      return {} as AccessToken;
    }
}

export const isTokenValid = () => {
    const { exp } = getAccessTokenDecoded();
    const expirationTime = Date.now() <= exp * 1000;
    if (!expirationTime) {
        alert("Sua sessão foi expirada, logue novamente para continuar");
        logout();
      }
    return expirationTime;
  }
  
  export const isAuthenticated = () => {
    const sessionData  = getSessionData();
    return sessionData && isTokenValid();
  }
  
  export const logout = () => {
    localStorage.removeItem('access_token');
  }
