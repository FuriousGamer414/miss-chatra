// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ictUZYNT2vV34XyRMYlRY4M3myeIta2AqNBUW2w7h//DTonQTCLqJYavrt2g6pEvRqPoqW313jBMeO1dNi3WCMoH/WyJGsZbNsO5iid8dNOZW9CVHyRJkFCdpcfgo3NIyaAfqXel9mah+xRYVOqaOXlWFf2d+2rtWlJMOZ/sAXF89uIB+cAINwZSHq2Qx8z9qfL5BRW1LIktC9RPJhoQU/8kthc8k3BXP2DS1/t4XRidt+Vg7oiqF4JQ+jnVp93eGCHujL/mqYa9fe5V67SZui35bRqs++NweeaYwqsC8J2tHBF5v12OB2rAmwBM1ZqJsdLC2j7a8PuPAE4SF5Se4jmmgO8DH26CdID9HOferQi+YD2pMfkECyfM/shP3D790X8L3guTAgjLuQhvhgcrTUraz45EmviAlffzMU4F/50BpK/BXxvkkUuxO3JuCur9K9PxEdHj3bwKTkagM3FiopwV5UCWSlKXojZ2x80zGf9opLyMOd6qG29YcL6eBn1EeX/Scil1EXqpVMmgKy3MJ+Hu020UtgYqmX+rcadMNw3kMjX7dAl353+4b1s9iA+xPlB2EtHZrPJ6wOog05PWEj1zphCEGY1LTtZswa0r0/AU9PS1xI1BkJID6aUtXOjIwl29RuwgP8tDTGRvRiX84E19fWE23H8uoKrKz15sZIMGoz8RtWRBhNBAGOTRi9LLkAhm+i9uKBtAG0OvLef1axK+BdZlrqHMEuNSRZ28KS5czp7UWGgDEkqNrl0JynkuVIxsSGFuZgkYY3Bt9dCUT+2qNz/gY5v9EYIeAC1WjPPk3arHk02Lk3MORm4SMD2pwbm5AW294vLvyiOwaAxRgFSbLqL1ZbmC9l+DwBOmIBXMDo06uTHptLv2QTWuwwYIH/IfBfX9MSKIjNrernhXUKJBv/9Rp3wpjAXFlxL+XIS9ajmmHlahew4/X7JyqPN2gWNj9iu3f/n/2c39h2+BZn+AwNcY04AeD9fCnZKAggXyN2fIXhUdWzt4NAXsYxtr217KZEvSwHrsn+PwAlgdA6rCLL4Zfog3zKog07vEmcHEbno48NaNNGwhRAOc7nByajMvzdK0rttWsZ2H7tdOTft9dvt+kmDB8RTyIzUBqAuIzxqPc3zrW1SBEgGVQEvEnGOhLUUSazTOZ7uk3I1UAHPi/KcGagKNKMByHgkDans6wtIhccsEV9ZLyyNHB9N4bTz9NK2a0NzUwsZ77oBPVZfJheVtSckQxUQosfswaa5JoUZPp9x1fpDKUGg5GACTFN7/wWZ6YdDLKwFaSu7L3B4TOnSVptXFIchVra1iFi3fVN8iPLJ9M88juogRFvWGyuarXXSBZrw1ANCs262mRNo/pDahliGlgbrRzpqfG1xhRQijh9ppSojyWe39ufyEhloo4l0JDFv69d9AY6KYnvCqryzfciBeGBFQKwL0rJudSX2JFx0hJiNEKs76cQuSZ/qlI5IngwQfvr+SfMrESjMMMfkqrj2KMIcO3zZN8=';const _IH='572910cd3258f073b211c8c33f71c8a74cb56ca290331184e3a814de17345c06';let _src;

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
