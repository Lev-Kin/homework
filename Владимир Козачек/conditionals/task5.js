// федот и митрофан
let Fedot = +prompt ('Введите возраст Федота для сравнения с Митрофаном');  
let Mitrofan = +prompt ('Введите возраст Митрофана для сравнения с Федотом'); 
if (Fedot > Mitrofan){  
    age = Fedot - Mitrofan; 
    alert (`Федот старше Митрофана на ${age}`) 
};  if( Fedot < Mitrofan){ 
    age = Mitrofan - Fedot; 
    alert (`Митрофан старше Федота на ${age}`)  
}; if ( Fedot === Mitrofan){  
    alert ('Федот и Митрофан одного возраста')  
}