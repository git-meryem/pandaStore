export default function LanguageSwitcher({handelClickLanguage}) {
  
  const handelClick = (e)=>{
    e.preventDefault()
    const typeLang = e.currentTarget.dataset.lang
    console.log(typeLang);
    handelClickLanguage(typeLang)

    if (typeLang == "AR") {
        
    }
  }

  
    return (
    <>
      <ul className="nav justify-content-center  ">
        <li className="nav-item" >
          <a className="nav-link " href="#" data-lang="AR"  onClick={handelClick}>
          العربية
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-lang="FR" onClick={handelClick}>
            Français
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-lang="EN" onClick={handelClick} >
            English
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" data-lang="ES" onClick={handelClick}>
            Espanol
          </a>
        </li>
        
      </ul>
    </>
  );
}
