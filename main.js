let nomedoheroi = "Clark" 
let xp = 8850
let niveldoheroi 

if (xp <= 1000) {
    niveldoheroi = "Ferro"
} else if (xp >= 1001 && xp <= 2000){
    niveldoheroi = "Bronze"
} else if (xp >= 2001 && xp <= 5000){
    niveldoheroi = "Prata"
} else if (xp >= 6001 && xp <= 7000){
    niveldoheroi = "Ouro"
} else if (xp >= 7001 && xp <= 8000){
    niveldoheroi = "Platina"
} else if (xp >= 8001 && xp <= 9000){
    niveldoheroi = "Ascendente"
} else if (xp >= 9001 && xp <= 10000){
    niveldoheroi = "Imortal"
} else { 
    niveldoheroi = "Radiante"
}



console.log ("O Herói de nome " +nomedoheroi+ " está no nível " +niveldoheroi)