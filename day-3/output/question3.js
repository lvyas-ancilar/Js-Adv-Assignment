// deined the result type with two status either true either false
function safeDivide(a, b) {
    if (b === 0) {
        return { ok: false, error: "Cannot divide by zero" };
    }
    else {
        return { ok: true, value: a / b };
    }
}
const result1 = safeDivide(10, 2);
const result2 = safeDivide(10, 0);
if (result1.ok) {
    console.log(" Division result:", result1.value);
}
else {
    console.log(" Error:", result1.error);
}
if (result2.ok) {
    console.log(" Division result:", result2.value);
}
else {
    console.log("Error:", result2.error);
}
export {};
