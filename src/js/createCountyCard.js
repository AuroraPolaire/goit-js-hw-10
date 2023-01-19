export const createCountryCard = ({
  languages,
  flags,
  name,
  capital,
  population,
}) => {
  const values = Object.values(languages);
  return `
    <table>
        <thead>
            <tr>
                <th><img src='${flags.svg}' alt='Flag of ${name.common}' width='60'></th>
                <th>${name.common}</th>
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
            <td>${values}</td>
        </tr>
    </tbody>
    
     </table>`;
};
