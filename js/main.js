console.log('main!');

// teste() está dentro de window que é objeto global
// (objeto global===Browser)
// function teste() {
//     // omitir o var ,let ou const coloca a variavel no global
//     // msg='Hello'
//     var msg = 'Hello ';
//     if (true) {
//         // var vale para o escopo da função (toda função)
//         // let só vale par o escolpo ('{}') que está dentro
//         var opa= '!!!';
//         let eita= '??';
//     }
//     console.log(msg+'teste'+opa); //+eita);
// }

// namespace Main (semelhante ao Math.)

const Main = { // JSON: JAvaScript Object Notation
    teste: function() {
        console.log('main teste');
    }, // Main.teste() === 'main teste'
    outra: function() {
        console.log('outra');
    }, // Main.outra()=== 'outra'
    curso: 'INFO' // Main.curso=== 'INFO'
};

Main.nome= 'Marcio';

const Outro = {};
Outro.qualquerCoisa = 'qualquer';

console.log(Text.reverse('ifrs'));
