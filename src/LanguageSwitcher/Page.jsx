import LanguageSwitcher from "./LanguageSwitcher";
import { useState } from "react";

export default function Page() {
    const [lang, setlang] = useState('AR');
    const displayLang = ()=>{
        if (lang === 'AR') {
            return <div>السلام عليكم</div>
          }else if(lang ==='FR'){
            return <div> bonjour</div>
          }else if (lang === 'EN') {
            return <div>Hello</div>
          }else{
            return <div> Hola</div>
          }
    }
   
  return (
    <>   
      <LanguageSwitcher
        handelClickLanguage={(data) => setlang(data)}
      />
      <hr/>
      {lang}
      <hr/>
      
      {displayLang()}
    </>
  );
}
