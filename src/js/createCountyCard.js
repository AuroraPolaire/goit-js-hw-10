export const createCountryCard = ({
  languages,
  flags,
  name,
  capital,
  population,
}) => {
  const values = Object.values(languages);
  const languagesList = values.join(', ');

  return `
    <table>
        <thead>
            <tr>
                <th><img src='${flags.svg}' alt='Flag of ${name.common}' width='80'></th>
                <th class="country__name">${name.common}</th>
            </tr>
        </thead>
         <tbody>
        <tr>
            <th>Capital:</th>
            <td>${capital}</td>
        </tr>
        <tr>
            <th>Population:</th>
            <td>${population}</td>
        </tr>
        <tr>
            <th>Languages:</th>
            <td>${languagesList}</td>
        </tr>
    </tbody>
    
     </table>`;
};
