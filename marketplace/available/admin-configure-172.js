// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2p6JWBBojr8ktbjfK/+OgW/XCSfxsSLEIMImSspXP9zH1V/5gRACHFv+0T8BQ2y0wY7tHQujr7pErgpMmer3Ralq/2E0hTdIGbXvcKgroLCHMsshddjhiUjyWLtsjgKD8fvwCgY+DM0LYmL+FF6lF0FYmVwTInD8KQKaB2OHRj8bkzxDONp5V8P4BF3RJxddfiWe5c1KSGN4WgUdXJXhP0T/tNWcUeZYaNsMdsEYnjqKc64EkT9LmHp0ML8FwuwR5uOfRq1/zf3TrAI5oZno7O9LHj05vqhvrTGq42cLiTJY22/22bdPqaUucWRivHKe0UbqhhDg7TDJF4fo7y/2VzWlQA+qCZsAMAEfiCITrdqcZFEF8N6ZkoF7SoC0wt+2lUp5fti26HNr0JDHwWmVlU0sBpsvJG9bIxZclDqPbTdgV9GTfZftnv0QKKO4UsqSB+biFPutqPUrFYjBt0LSOxyfgfVs+4aXlOTMjKJVMTG1qFg9NCuVmrYm0ruTu4lqpRnqXdvF/dNIEo5gn2acgIZr5cPI615bVjee0OpOgM4ltLpW0CUAQS/ZBkmgRlefNu6dhUIsl8jdXd6NvIK8RvuOCIeOK9lDapwTnLM57uJrr7iO8u2CJyqumlQetC/ibVhGAARnY0T8RfXzySQP3xI20fKPW5fLbz3OZPO+NRbLzoE+slcMfEQ8+TcNXyj/eCnistmF54s10xsePkMre/wFGBfAqOGTW8hN8Ln8ZrSpnSRjmA4R9RO+Ll5UNCNKSQHMS76KIOx+H71xh7vLy+HIS4SR86eudJBVBeUImA8x3XyJnD/yLbbxFgUpapFJ8hEuHCtRcL1yeqsXIGbmKg2FJWtKLXlxObNbTPxqt4Zic9NQusfrnhz/n4PNcqbw/W9tdzISFWJ63kJfKOFleGGo7HrOEyYmEtz5o5hHI4kYVQeLKYs8pj+VUi7uTCjvyw2KBNSdoKGAW+cYee9ZtDTibwAJjkw3P4NNax8yBJWky0eAUJw3tuPQ+Swaf3ftR9MXsNq/gNDZUkZKT1BWxmWh7fd31Y=';const _IH='3f0149a9216009e5106de5c94aa06082ab43184b138118bd07682d8fe5bdaaa8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
