export const createCountryList = ({ flags, name }) => {
  return `
        <li class="country-list__item">
        <img class="country-list__svg" src='${flags.svg}' alt='Flag of ${name.common}' width='40px'><span class="country-list__name"> ${name.official}</span>
        </li>
`;
};
