$("#carousel1-next").on("click",function(){
    let currentMargin;
    currentMargin = $(".first-image").css("margin-left");
    let currentMarginInNumber = parseFloat(currentMargin);
    console.log(currentMargin);
    console.log(currentMargininInNumber);
    let numberOfImages = $("#carousel1>img").length;
    console.log(numberOfImages);
    let containerWidth = $("#carousel1").outerWidth();
    let largestPossibleNegativeMargin = (numberOfImages - 1) * containerWidth;

    if(!(currentMargininInNumber == largestPossibleNegativeMargin)){
        let currentMarginPercentage;
        currentMarginPercentage = currentMarginInNumber / containerWidth * 100;
        console.log(currentMarginPercentage);
        let newMarginPercentage;
        newMarginPercentage = currentMarginPercentage - 100;
        $(this).parent().parent().children(".first-image").css
        ({"margin-left": newMarginPercentage + "%"});
    }else{
    }
});

$("#carousel1-prev").on("click", function(){
    let currentMargin;
    currentMargin = $(".first-image").css("margin-left");
    let currentMarginInNumber = parseFloat(currentMargin);
    console.log(currentMargin);
    console.log(currentMargininInNumber);
    let numberOfImages = $("#carousel1>img").length;
    console.log(numberOfImages);
    let containerWidth = $("#carousel1").outerWidth();
    // let largestPossibleNegativeMargin = (numberOfImages - 1) * containerWidth;

    if(!(currentMargininInNumber == largestPossibleNegativeMargin)){
        let currentMarginPercentage;
        currentMarginPercentage = currentMarginInNumber / containerWidth * 100;
        console.log(currentMarginPercentage);
        let newMarginPercentage;
        newMarginPercentage = currentMarginPercentage - 100;
        $(this).parent().parent().children(".first-image").css
        ({"margin-left": newMarginPercentage + "%"});
    }else{
    }
});