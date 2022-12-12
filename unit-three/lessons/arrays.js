let grades = [56, 78, 96, 41, 22, 7, 15, 10, 89];
console.log(grades)

grades.forEach((item, i, arr) => {
    item < 90 ? arr[i] = item + 15 : null
})

console.log(grades)
