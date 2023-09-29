let dernier = 0;
let nombreAleatoire = 0;


















function genererNombreAleatoire(max){
    return Math.floor(Math.random() * Math.floor(max));
}

do{

    nombreAleatoire = genererNombreAleatoire(citations.length);

}while(nombreAleatoire == dernier)

let citation = citations[nombreAleatoire][0] + ", " + citations[nombreAleatoire][1];
dernier      = nombreAleatoire;
