export const calculateBmi = (weight, height, method) => {

    console.log("Method is set to:" + method)
    const bmiValue = method === "imperial" ? (weight / (height * height) * 703).toFixed(2) : (weight / (((height / 100)* height) / 100)).toFixed(2);
    const bmiMessage = setBMIMessage(bmiValue);
    return [bmiValue, bmiMessage];
    
    
};

const setBMIMessage = finalBMI => {
    if (finalBMI < 18.5) {
        return "Underweight";
    }

    if (finalBMI > 18.5 && finalBMI < 25) {
        return "Normal";
    }

    if (finalBMI > 25 && finalBMI < 30) {
        return "Overweight";
    }

    if (finalBMI > 30) {
        return "Obese";
    }
};