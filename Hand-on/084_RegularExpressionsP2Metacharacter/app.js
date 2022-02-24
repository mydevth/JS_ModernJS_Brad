let re;
// Literal Characters
re = /hello/;
re = /hello/i;           // i case not sensitive

// Metacharacter Symbols
re = /^h/i;              // ^ = Must start with
re = /world$/i;          // $ = Must ends with
re = /^hello$/i;         // Must begin and end with hello
re = /h.llo/i;           // Matches any ONE character
re = /h*llo/i;           // Matches any character 0 or mare times
re = /gre?a?y/i;         // Optional character
re = /gre?a?y\?/i;       // Escape character

// Brackets [] - Character Sets
re = /gr[ae]y/i;          // Must be an a or e
re = /[GF]ray/i;          // Must be an G or F
re = /[^GF]ray/i;         // Match anything except a G or F
re = /[A-Z]ray/;          // Match anything uppercase letter
re = /[a-z]ray/;          // Match anything lowercase letter
re = /[A-Za-z]ray/;       // Match any letter and any case
re = /[0-9]ray/;          // Match any digit
re = /[0-9][0-9]ray/;     // Match any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i;          // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;        // Must occur least {m} time (2-4 letter)

// Paretheses () - Grouping
re = /^([0-9]x){3}$/      // 3x3x3x

// Shorthand Character Classes
re = /\w/;                   // Word character - alphanumeric or _
re = /\w+/;                  // + = one or more
re = /\W/;                  // Non-Word character
re = /\d/;                  // Mathc any digit
re = /\d+/;                  // Mathc any digit 0 or mare times
re = /\D/;                  // Mathc any Non-digit 0 or mare times
re = /\D+/;                  // Mathc any Non-digit 0 or mare times
re = /\s+/;                  // Mathc non whitespace
re = /\S/;                  // Mathc non whitespace char
re = /Hell\b/i;             // Word boundary

// Assertions
re = /x(?=y)/;              // Match x only if followed by y
re = /x(?!y)/;              // Match x only if NOT followed by y


// String to match
const str = 'ggggxysssss';

// Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);

  } else {
    console.log(`${str} does NOT matche ${re.source}`);
  }
}

reTest(re, str);