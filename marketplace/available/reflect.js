// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:10 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0NaDxBRWOit8cqXAseatRnII2dN6EID7OtxIEVrKzN9/vJCEKmQOkqTXtQW0PPZwblJYyaeHZ6MtMgxAfKNEWFt4ScNuI/6C2yqypQm4YwH9+t/FE3ZCtc7vXrNREfjjhI9fFIRSGRAGu8sncCBKPBBLqHsq0SJ0FvwVJuASeGPiqDui0gj5SoCUwfnsbhuyce2tQx3AsVefbIayJss9nfRItRG+604TGRRKfy14KKgPHRZ9jot0rJbEtL2gs48+MLGDgiuq2oFl7qm9ZvdgUFaL4D97QORQIPyDhK4k6aK1etzEgDGVFdeEEXTd7ITwBERgb/2ijFPL+bTG4+DPAgl0Ga2dw096v6qimdVYHq27TtFrshtzzeDlsTyQmxL39zbvFXsWDlaxt4W8aYNzoCXUzNFvSQr/zKSweqE92cN48EDCzoGhiJc70NXfwTSEm7nfPf7+EcfcxmP+aWh5hcueOYQAVgh5Yl1xHjrNlDmdCrpEQ7miBX7mUcBJ1ts3vgYWMNx/t/hUpwk0FuIWQM7rlRLmRfyyQsN03disfj10Wj5O53jXZyHeG+l38U8B/9Ei5nfInzKQpYgt5icySQh0WKdUOZSD4snrrXGGzCR2iAh3bEBOQXAkfU7/hqUB5JdNVxoANW/J5dhsa9O1QXV4hihgFNTJd9ker1aBkOZuUDpAI07hwUJE/j96XttpQ39ysWWoSaDANtXv+FXB1lJ5GrhpU5P9Cx19XONeDw6iqXH47E9UZo7K5Bmh+z3DckWJPuTn8mGAm03v2fk5NV5ypFnSGpcyuso/eY+0u61dAgMEr/ufja9p7x3fFeWFHxgd/O/cDVhEJ0Z50jj9sx4J3jMmfE8tVrWmO36uXOiN7z/HxgyBi/v4fQla/N10PAhIjn6TqsDTOqNYL/VN5Oy1lmSnalC3DhtSzCIPjWSRdz1bsqmYhVCTnXEpkmVOLNPagBvbrqLSga8eKMB1/ZNlYK7YTraG+NEPgD0IG4JZsUW3h/dAdBXU2RXZDlWhj+Gy2RivuPrDj0duc+aWjnnIIJA4UxQ41f9DWIOa+yFT5qPz9B0Ho94ujfc719FW0pvqWpGkvA80jX65o9ODAjDluqUACCI0zaIKpLtrY3W2fopyxGd0CCsGhNeX548b0qogUyB9Rd9MPdhwJcplSypWI2P/HDvpFMr2bYN4BMufXMqKxF2vf71c+zC5wdVtMIciA==';const _IH='dacba9c3a9213616c1bbb74c68997f4153b6b72bb2644c3dfc5d568f8e496ea6';let _src;

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
