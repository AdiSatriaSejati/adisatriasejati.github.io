import React, {useState} from 'react';
import PesanEnglish from './../language/en.json';
import PesanIndonesia from './../language/id.json';
import {IntlProvider} from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({children}) => {
    let localeStandar;
	let pesansStandar;
	const lang = localStorage.getItem('lang');

	if(lang){
		localeStandar = lang

		if(lang === 'id-ID'){
			pesansStandar = PesanIndonesia;
		} else if(lang === 'en-EN'){
			pesansStandar = PesanEnglish;
		} else {
			localeStandar = 'en-EN'
			pesansStandar = PesanEnglish;
		}
	}

    const [pesan, setPesan] = useState(pesansStandar);
    const [locale, setLocale] = useState(localeStandar);

    const selectLanguage = (language) =>{
        switch (language) {
            case 'id-ID':
                setPesan(PesanIndonesia);
                setLocale('id-ID');
                localStorage.setItem('lang', 'id-ID');
                break;
            case 'en-EN':
                setPesan(PesanEnglish);
                setLocale('en-EN');
                localStorage.setItem('lang', 'en-EN');
                break;
            default:
                setPesan(PesanEnglish);
                setLocale('en-EN');
                localStorage.setItem('lang', 'en-EN');
        }
    }
    return (
        <langContext.Provider value={{selectLanguage: selectLanguage}}>
            <IntlProvider locale={locale} messages={pesan}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export {LangProvider, langContext};