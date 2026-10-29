// Тимчасовий тестовий функціонал (bad_feature)

function brokenCalculate(a, b) {
    console.log("Запуск експериментальної функції...");
    // Навмисно некоректна логіка для демонстрації відкату змін у Git
    return a - b + 999;
}

const testResult = brokenCalculate(10, 5);
console.log("Результат:", testResult);
