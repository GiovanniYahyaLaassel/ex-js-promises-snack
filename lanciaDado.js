function lanciaDado() {
   return new Promise((resolve, reject) => {
        const bloccoDado = Math.random();

        console.log('Lancio in corso...')

        setTimeout(()=> {

           if( bloccoDado < 0.2) {
             reject(`il dado si è incastrato`);

           } else {

             const risultato = Math.floor(Math.random() * 6) + 1;
             resolve(risultato)
            } 
            
        }, 3000);
    });
}

lanciaDado()
.then(nun => console.log("Numero uscito:", nun))
.catch(err => console.error("Errore:", err));

