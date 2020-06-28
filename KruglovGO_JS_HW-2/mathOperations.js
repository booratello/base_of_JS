function doSum(var_1, var_2) {
    return (var_1 + var_2).toFixed(2);
}

function doDiff(var_1, var_2) {
    return (var_1 - var_2).toFixed(2);
}

function doMult(var_1, var_2) {
    return (var_1 * var_2).toFixed(2);
}

function doDiv(var_1, var_2) {
    if (var_2 == 0) {
        return "делить на нуль в принципе можно, но оставим это вышмату.";
    }
    return (var_1 / var_2).toFixed(2);
}
