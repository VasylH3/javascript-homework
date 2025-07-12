var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    }
];

var trustedEmails = [];
var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z0-9.-]+\.(com|net|org|ua|gov|edu)$/;

for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    if (regex.test(email) && !email.endsWith(".ru")) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails);
