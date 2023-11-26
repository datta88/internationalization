import langConfig from './lang.json';

const I18n = (keyword, placeholder, value) => {
    const lang = localStorage.getItem("lang") || "en";

    const text = langConfig[lang][keyword];

    if(placeholder && value){
        return text.replace(placeholder, value)
    } 

    return text
    //return langConfig[lang][keyword];
}
export default I18n;
