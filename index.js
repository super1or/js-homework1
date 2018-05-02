function solve(a, b, c) {
var d = b * b - (4 * a * c); 
if (d > 0) {
var result1 = (-1 * b + Math.sqrt(d)) / (2 * a);
var result2 = (-1 * b - Math.sqrt(d)) / (2 * a);
return result1 + "<br>" + result2;
    
}
else if (d === 0) {
var result3 = (-b) / (2 * a);
return result3;
    
}
else if (d < 0) {
return "D < 0, then the quadratic equation has no real solutions(it has 2 complex solutions).";
    
}

}
document.write(solve(1, 3, -4));


