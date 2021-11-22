class calculations
{
    constructor(sum)
    {
        this.sum = sum;
        this.memory = null;
    }

    addition(i, j)
    {
        sum = i + j;
        return sum;
    }
    subtraction(i, j)
    {
        sum = i - j;
        return sum;
    }
    division(i, j)
    {
        sum = i / j;
        return sum;
    }
    multiplication(i, j)
    {
        sum = i * j;
        return sum;
    }
    memorySave(i)
    {
        let memory = i;
    }
    memoryRecall()
    {
        return this.memory;
    }
}

const calculate = new calculations();

module.exports =
{
    calculations,
    calculate
}