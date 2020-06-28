function doValidation(name_var) {
    let some_var = Number(prompt("Введите число " + name_var + " (Отмена = 0):"));
    if (isNaN(some_var)) {
        alert("Вы ввели значение, не являющееся числом, попробуйте снова.");
        some_var = doValidation(name_var);
    }
    return some_var;
}
