export const defineClass = (
  defClass: string,
  mobClass: string,
  isMobile: boolean
) => {
  return `${defClass} ${isMobile ? mobClass : ""}`;
};
