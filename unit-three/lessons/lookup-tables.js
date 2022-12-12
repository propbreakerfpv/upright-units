function getStateAbbrevation(state) {
    const stateNames = {
        Alabama: "al",
        Alaska: "ak",
        Arizona: "az",
        Arkansas: "ar",
    }
    return stateNames[state];
}


console.log(getStateAbbrevation("Alabama"));
