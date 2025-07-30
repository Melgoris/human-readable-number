module.exports = function toReadable(number) {
  const oneMass = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teenMass = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const hundredMass = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const [hundreds, remainder] = [Math.floor(number / 100), number % 100];
  const [ten, one] = [Math.floor(remainder / 10), remainder % 10];
  const finalPart = [];
  if (hundreds) finalPart.push(`${oneMass[hundreds]} hundred`);
  if (remainder) {
    if (remainder < 10) {
      finalPart.push(oneMass[remainder]);
    } else if (remainder < 20) {
      finalPart.push(teenMass[remainder - 10]);
    } else {
      finalPart.push(hundredMass[ten] + (one ? ` ${oneMass[one]}` : ''));
    }
  }
  if (!number) return 'zero';

  return finalPart.join(' ');
};
