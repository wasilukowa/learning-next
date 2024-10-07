import { useCallback, useEffect } from "react";
import { stringifyCookieDetails } from "../../utils";

import { TCookieOptions, TUseCookies, AvailablePasswordTypes } from "./types";

// export const useCookie: TUseCookies = (cookieName, initialValue: AvailablePasswordTypes = 'password') => {
// export const useCookie: TUseCookies = () => {
export const useCookie = () => {

  const defaultOptions: TCookieOptions = {
    // expires: new Date(),
    maxAge: 60*60*24*7 // maximum age of the cookie in seconds. Set for 1 week (7 days)
  }

  let cookieValue = '';

  const saveCookie = useCallback((cookieName: string, value: string, options = defaultOptions) => {

    const isDocumentDefined = typeof document !== 'undefined';
    if (!isDocumentDefined) return;

    const cookieDetails = stringifyCookieDetails(cookieName, value, options);
    document.cookie = cookieDetails;

  }, []);

  const getCookieValue = useCallback((cookieName: string): string => {

    const isDocumentDefined = typeof document !== 'undefined';
    if (!isDocumentDefined) return '';
    
    const cookiesString = document.cookie;
    
    const isCookiesStringDefined = cookiesString !== undefined;
    if (!isCookiesStringDefined) return '';

    const regexToGetCookieNameAndValue = `${cookieName}=(?<pole>[^; $]+)`;
    
    const cookieDetails = cookiesString.match(regexToGetCookieNameAndValue);

    const areCookieDetailsFound = cookieDetails !== null;
    if (!areCookieDetailsFound) return '';

    const potentialCookieValue = cookieDetails[1];
    const isPotentialCookieValueAvailable = typeof potentialCookieValue === 'string';

    if (!isPotentialCookieValueAvailable) return '';
    
    return potentialCookieValue;
  }, []);


  const deleteCookie = useCallback((cookieName: string) => {

    const isDocumentDefined = typeof document !== 'undefined';
    if (!isDocumentDefined) return;

    const newExpiryDate = new Date();
    const deletionCookieDetails = stringifyCookieDetails(cookieName, cookieValue, {expires: newExpiryDate});

    document.cookie = deletionCookieDetails;
  }, []);

  return {
    cookieValue,
    saveCookie,
    deleteCookie,
    getCookieValue
  }
}
