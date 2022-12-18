let sizeInMeters=1.7;
//Les conversions du systemes métrique au systeme impérial
const cmPerFoot = 30.48;
const cmPerInch = 2.54;
let sizeInCm = sizeInMeters *100;
let sizeInFeet = parseInt(sizeInCm/cmPerFoot);
let remains = sizeInCm % cmPerFoot;
let sizeInInches = parseInt(remains / cmPerInch);
console.log(`${sizeInFeet} pieds et ${sizeInInches} pouces`);
