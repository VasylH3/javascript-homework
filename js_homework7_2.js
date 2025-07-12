const text = "Wonderful Joyful Happiness Time Task Apple";
const pattern = /\b(?=\w{6,})(?!\w*[Aa])\w+\b/g;

const matches = text.match(pattern);
console.log(matches);
