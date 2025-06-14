function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        let number = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (number % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Непарних чисел:", oddCount);
    console.log("Відсоток парних до непарних:");
    console.log("  Парні: " + evenPercentage.toFixed(2) + "%");
    console.log("  Непарні: " + oddPercentage.toFixed(2) + "%");
}
