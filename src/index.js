import './styles.css';
import getRefs from './js-files/refs.js';
import countriesCardTemplate from './templates/countries-card.hbs';
import countriesListTemplate from './templates/countries-list.hbs'
import API from './js-files/fetchCountries.js';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');

const refs = getRefs();

refs.searchForm.addEventListener('input', debounce(onSearch, 500));

function onSearch({ target }) {
    const input = target.value;

    API.fetchCountries(input)
        .then(selectCountriesRender)        
}

function selectCountriesRender(arr) {
    if (arr.length === 1) {
        clearSelect()
        renderCountriesCard(arr);
        return
    }
    if (arr.length >= 2 && arr.length <= 10) {
        clearSelect()
        renderCountriesList(arr)
        return
    }
    if (arr.length > 10) {
        clearSelect();
        alert({ text: 'Too many matches found. Please enter a more specific query!' })
        return
    }
}

function renderCountriesCard(countries) {
    const markup = countriesCardTemplate(countries);
    refs.cardContainer.innerHTML = markup;
}

function renderCountriesList(countries) {
    const markup = countriesListTemplate(countries);
    refs.cardContainer.innerHTML = markup;    
}

function clearSelect() {
    refs.cardContainer.innerHTML = " ";
}
