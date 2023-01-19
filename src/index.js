import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';
import { createCountryList } from './js/countryList';
import { createCountryCard } from './js/createCountyCard';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

function onInputGetContry(e) {
  let country = e.target.value.trim();

  if (country === '') {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(country)
    .then(data => {
      if (data.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }

      if (data.length < 10 && data.length > 2) {
        const countryListMarkup = data
          .map(country => {
            return createCountryList(country);
          })
          .join('');

        countryInfo.innerHTML = '';
        countryList.innerHTML = countryListMarkup;
      }

      if (data.length === 1) {
        const countryMarkup = data
          .map(country => {
            return createCountryCard(country);
          })
          .join('');

        countryList.innerHTML = '';
        countryInfo.innerHTML = countryMarkup;
      }
    })
    .catch(error => {
      if (error.message === '404') {
        Notify.failure('Oops, there is no country with that name');
      }
      countryInfo.innerHTML = '';
      countryList.innerHTML = '';
    });
}

input.addEventListener('input', debounce(onInputGetContry, DEBOUNCE_DELAY));
