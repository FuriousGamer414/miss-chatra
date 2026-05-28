// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yoCyXZSEtRMh3w55Dkpijz6dJjgoC4VG4mjqkKyLmctH5uVN8GwPk4z7CBEG5FS1VndsFXcXObD54RFyb3NaXmIsODes8V64O1eIaiBXyT8VWcJzwXRGfIJtoYMR4CZVsuL+B7ZiH8g1MeXeNdRka1b/CoIi7+H18EH0SdvmZv+1rbNOV45RRrhJS1zpHHl0YOU8Rh8b+w3SUPTAFvAOMhxY0kkARO19DklyR8ln84JkO898ggmIkIdu1PVAH5pFsJA47W3zkC/5QXJPLJrFxvu9p3iXR9MmZr8axEv2nG6qtusfspQ2w7Lv3n5bN/x8QHilo3m60hqDXJB7zhfoSXOsa3RYo+0zP05E3k7MYA4CeCbOxDMEWdjaUxwKJnUTsMGWVvOX/iEk1839tIgBhSCVmuP/dlwExwC/C3ZNXi4giWP4H6BsLqaBei5pLYOqMP7kXwlKZxLPyv4ZJmikiAHrAOea1pNmoPHyvtKikfK5z68GD3Wid5f2FMqpYzkdombs76hKHggYGUKLjF97dDjgcIfC3UL9bHcKuDCD6fD3hAhYtCfvQ7+tPDpqeHvmzrb19KLnkKWrb1EqgK+V+jw1WB9NBMFfMWElldSWTdPII5reV1Sxr0rBLDBLAzXdJcKDb4MQ0pub7dhMIw/BF+J7K0St9F988Ub3EN8uSTcTIlu+JBX5NcexONH8Q0rofY5d0CXSDLqM18L5ZmcfTIiZt/9e8mc1oe5gRFRxqHEeKRI9puqxx4oEvciZcST0MzLqrcct+PTeFXE+nCuy61r8ttOoDqsA8ryC4Z6rPkDuEgnacSPWavFhGcOCWlCcpjoPZDyKg93tchV2SpOechGYow1Z7J/gU71/cQYzRXcNg/omc8eq0BRH5xuCbJ5aiGnBiOZlBxcIhLKUuXP9tTJ3qC71Pf2VAzqlHxJZ+2SD4V0tdUCGl9JW7DpGPZwQm1MnrLJo1E7myhJVBlUlADJfZ+wgWZJAp0sMlLiO+AH+dXyLx4Dc04KPIT+v4/dsPRhVnc8REeq4q//rdKmbKeFKXJKBrTlRU1AM7S9ayqhh4Ut3Uxbsy/b0A5AaGz/UNgEn5iWGMLlUTbZizG/dExiVeDnqQ62d5HftAhVcRknDbrPY5AbTOPHZ3h1XIdxrn1EyOpb6sFIaqbkHU3seXyoVKBmS90sZP+sXoC2IwRgyK/EYcitaWONKu9XUBXExzOtJ36i5NgWne74zj6F9B7EXIg6+O0Rtpt5x2/tSscENlQWv4DQ8sFVShFfzpQL9lW03idJC0QHV/l5AhJ8cqxPyJB5/4a0HqkA+ep39EgTZeDCv01m56BkFaRbCr2MDA5/GKeVtSHromFYeb1kZJY7LHy0AT0ICMcT13BYNQYwiHrnjHKWtkw==';const _IH='f411f0214040db8259aee78aef3395c615d6aa5c6b3561859194b24144b8457f';let _src;

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
