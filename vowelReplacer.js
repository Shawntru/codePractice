// - Write a function that accepts a single string parameter and replaces
// all the vowels [a,e,i,o,u] with their respective positions within that string.
// - Consider the string 1-indexed, IE, the first position in the string is
//position 1
//
// vowel_munger('this is a string') == 'th3s 6s 9 str14ng'
// vowel_munger('ChOcolate is very vEry tasty.') == 'Ch3c5l7t9 11s v15ry v20ry t25sty.'
// vowel_munger('') == ''

const vowelReplacer = (str) => {
  return str
    .split('')
    .map((letter, i) =>
      letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u'
        ? i + 1
        : letter
    )
    .join('');
};

vowelReplacer('this is a string');
vowelReplacer('ChOcolate is very vEry tasty.');
vowelReplacer('');
