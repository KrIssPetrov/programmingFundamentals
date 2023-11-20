function matchFullNames(names){

   let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    
   let validNames = names.match(pattern);
    

   console.log(validNames.join(' '));

}
matchFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov" )