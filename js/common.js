function calcPairScore(values) {
    var frequencies = createFrequencyTable(values);
    for (var diceValue = 6; diceValue >= 1; diceValue--) {
        if (frequencies[diceValue] > 1) {
            return diceValue * 2;
        }
    }
    return 0;
}

function createFrequencyTable(values) {
    var frequencies = [0, 0, 0, 0, 0, 0, 0];
    for (var value of values) {
        frequencies[value]++;
    }
    return frequencies;
}