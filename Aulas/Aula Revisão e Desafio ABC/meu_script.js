var a = 10;

var b = 20;

var c = null;

document.write("A: " + a + " B: " + b + " C: " +c);
document.write("</br>");

c = a;
a = b;
b = c;
c= null;

document.write("A: " + a + " B: " + b + " C: " +c);