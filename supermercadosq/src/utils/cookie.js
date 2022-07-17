import Cookies from "js-cookie";
import { isAfter } from "date-fns";

export const authCookie = () => {
  const expires = new Date(parseInt(Cookies.get("expires"), 10));
  if (isAfter(new Date(), expires)) {
  }
};
