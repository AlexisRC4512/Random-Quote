export default async function printApi(ramdon){
    const $fetch=document.getElementById('fetch');
    const quote=document.getElementById('quote');
    const author=document.getElementById('author');
    
   
        fetch("https://type.fit/api/quotes")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((data) => {
           let i= Math.floor(Math.random()*1643);
            console.log(data)
            quote.innerHTML=`${data[i].text}`;
                  author.innerHTML=`${data[i].author}`;
            
          }) .catch((err) => {
            //console.log(err);
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
          })
          .finally(() => {
            //console.log("Esto se ejecutará independientemente del resultado de la Promesa Fetch")
          })
    ;
}
              
              
           
               
            
     
    