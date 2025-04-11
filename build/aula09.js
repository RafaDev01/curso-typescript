"use strict";
var diasDaSemana;
(function (diasDaSemana) {
    diasDaSemana[diasDaSemana["domingo"] = 0] = "domingo";
    diasDaSemana[diasDaSemana["segunda"] = 1] = "segunda";
    diasDaSemana[diasDaSemana["terca"] = 2] = "terca";
    diasDaSemana[diasDaSemana["quarta"] = 3] = "quarta";
    diasDaSemana[diasDaSemana["quinta"] = 4] = "quinta";
    diasDaSemana[diasDaSemana["sexta"] = 5] = "sexta";
    diasDaSemana[diasDaSemana["sabado"] = 6] = "sabado";
})(diasDaSemana || (diasDaSemana = {}));
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#FFFFFF";
    cores["preto"] = "#000000";
    cores["azul"] = "#0000FF";
    cores["vermelho"] = "#FF0000";
    cores["verde"] = "#00FF00";
})(cores || (cores = {}));
console.log(cores.branco);
console.log(cores['branco']);
var tipoUser;
(function (tipoUser) {
    tipoUser[tipoUser["USER"] = 10] = "USER";
    tipoUser[tipoUser["ADMIN"] = 100] = "ADMIN";
    tipoUser[tipoUser["SUPERADMIN"] = 1000] = "SUPERADMIN";
})(tipoUser || (tipoUser = {}));
console.log(tipoUser[1000]);
const tp = 1000;
const tp2 = tipoUser.SUPERADMIN;
console.log(tp2);
