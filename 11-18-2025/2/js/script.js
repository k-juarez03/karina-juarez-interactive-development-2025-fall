function CalculateSum(number1, number2){
    let Sum = number1 + number2;
    return Sum;
};

$("#calculate-button").on("click", function(){
    let input1Value = Number($("#input1").val());
    let input2Value = Number($("#input2").val());
    let calculationResult = CalculateSum(input1Value , input2Value);
    $("#result").html("The result of the calculation is " + calculationResult + "." )

})