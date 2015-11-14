var a = 1, b = 4, c = 1;

var discriminant = function (a, b, c) {
            return (b*b - 4*a*c);
}

var root1 = (-b - Math.sqrt(discriminant(a,b,c)))/(2*a);

var root2 = (-b + Math.sqrt(discriminant(a,b,c)))/(2*a);

console.log("Roots are "+root1 + "  " + root2);
