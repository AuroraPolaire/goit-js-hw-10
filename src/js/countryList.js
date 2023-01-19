export const createCountryList = ({ flags, name }) => {
  return `
        <li>
        <img src='${flags.svg}' alt='Flag of ${name.common}' width='60'><span> ${name.official}</span>
        </li>
`;
};
