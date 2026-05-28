// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xEaKmI25R8VAnhQNr9vZy6OTeFwep8zB+Q9ocZX+PTVmPB0fo6HieYU2FSsf/hH4AFmXv3fhdO6Ls60xk0jHaZ2aJqR8+qfQSYXrKcEgy53Lxx0DaVzJBbPQILWVoXMIhZlPiDigPQ5QipXXQigFC1q7BxeO5mdsEC8KwVjuFrt91HR/qhdnzat9tmarpLvb+tefiHdZBkr/xjuRSdqS3oVu/phXs5Zu3Z8tdztHO0+ntU3L9PoGeOW/nAK7l6ok3bWP6j/tptLEmSniHAC3g/+7akAXuSLlSM1Phbkpfg104EZ24yjNRhfRwZoXJGLHJbwZF3rZwyF/ek4Lup31HjHBL7jirCLzTEHbnpcuhe2JZoerkrUhPh+Q4rId29cGXB3fBx0zgKwk+QJoQfvpyvy252UdMqiFsBpG5zM06sU3GMDqHZ0B7mKDl/4pv+KmwpuQRAsjFOOGl86hh7jTmhymGhRIP9lmxtoOSWnJqYLiS/beWg1qGB5IHWU4YM3lZRX6NE7Xmi5Nmo40dmq8rXlwmgCWl0KEs300wqwCPM2IeUF82n2zn5l4EFDoBBsdXYTKeHkSS9FMIE0L5kMln4uR+PYRf+eISNehLpIvGMrGvCWQZRORPfZlJbJy7O5iWsw64uWoOU4Fx5T3HGD0k4fwhN3jS8/Awq97wZZPrPK+3RWMf4kdR7DuypdwTqbbu11LvfqhSPfMRkT4EazoCj9Hh71C2djRKTMDzM97FfAKWXx6FaEL6W0tC/NArGMwEwmEhqpCT5ZaSN7sjFQ/cD+TRSqHC0Rph9BYIJzMMneRtJCqrtDcavBkIUBv+4O+kFDXstBJtN16Jn9FmEqWn7fmzUhKxBloZv5I5xGem2KcL2f4MG+KBxNFAjwUobMSN4hDBldKiBWLqkciG4QXburpigy5diYv5r549EfayvQ6aBWUJfzbMreQ31vyEDh7M/q7oPu8y1GApBxBeaIDjWn8xQpu9YhDXY2pyWlC1hio0zS0yHJ0uIzdHxFE2LYkRJavjb0MK+PVzI9B2mX8LqtjQD3hL99TX0gIFeL0GrNMu6tzoote9Ne0wzqYlba0IbwLbZ2rCVXIQDyZfcqkF8Ftxw27BnFoX8za4vZylrvbZCD1mX3zdrmd5q/FvT5zAlXZkNdvmJA3bcNC5xlpyjPlW6TCWh+LTseXJ2pbzJiWWErNbmmwRpOdix0+81EfBGXsNQMiBWN8csgzupyKjH78Q0Ws5+2n5lYwi2QeZf4vwsNb9qSgjsxRgcqEAk8PZ2ZUwGI1tDFhUe1CyaJDtmbgmKJHiPPJ0JE8UfBpVVM94P+zoURj0Pbp95nDKi27HlHRpaSJaduHSbMCIQOOWtBmQGxibejLUA==';const _IH='c7c34812638285918d21e26233d05dad791963fa4a3c8841df099a34f608a50a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
