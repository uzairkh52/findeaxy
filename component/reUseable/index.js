export const numFormatter = (num) => {
   if (num > 999 && num < 1000000) {
     return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
   } else if (num > 1000000) {
     return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
   } else if (num < 900) {
     return num; // if value < 1000, nothing to do
   }
 };
 
 export const numberWithCommas = (x) => {
   return parseInt(Math.ceil(x))
     .toString()
     .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 };
 
 export function isEmpty(value) {
   return value === undefined || value === null || value === "";
 }
 export function TimmerDate() {}
 