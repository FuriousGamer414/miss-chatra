// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VfaPb9506sND9L6AoKGk3AsQTKxw8nYcy4z9tnOOKrBkIT7ohRO3AQ2YETxCaXIDX2GFINx3sn1oXFVu4tT2zzP82TrOvjzlXqRRc2QnCHH7oW6VopLRdM9OYPDcMurYFJZSNu/3zcBBjc7sJLtUoXL+Zxjf+64p7bciGRI9eRSI3SIWiQJqEyZX8zbMU5q8S4BBmBte36Ln2vQrQKStk7aW0Cu40xwcqZwNZIHKX5oPkiBwhjvpZrwnzZDUs0dd1r9ppq1YvjAWi6K83gY9r1sVjpxAA37iHiryr2bGDWQqDVnnfueI/kXbVaQM8e+NPqHKfAbl4Z3eMMjhBFUSzqevsBLPDg/QfVjZJW/8x1kqwa7CsvmNjO1GcGH2mnbrBQVPO2mAxW5DerBVkrMinRDtPm74z6PgrEqso+qp49l9s75RS706B7Xqx/raF4SsGO/SZUUlbxhktQONWnSaCjnuOTbrE8EhVnplFnqi6Wplh6SEDaHpsHbFCWsrTNVilmSAFxsFYznIF0Q9W6QgInr4rZiKMAQEXiMhP3fAT360cCJmTyXi2MW1PrlzAMtIGxw=';const _IH='fe661a6e429022af3fcb5376d685010c4f36ab16358d2dfb22416b5931b4cdcf';let _src;

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
