// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2bBmfrSoSrRCBOavCDVRAN5NcOJXEeTgOAgNXZLZ5/4XEqAEPvmSqftOR0lLmFNmTGYQSxqMva/mEn371LgRnfhq5v8KjveyWHJwYZihC8HPvIjc0N25aJf9YrLXhVh1FRUDUielzXEdi3UNfvwZC7lZ3KeS03Sn+EhYXnCCDFeBeA13Q5FCBI+hkcDfAfc+ZtPHMldHzLKtxZLYuOvJaOVpgHW9i4NSTWQkWNnDOZj8aPwQ6CZeedRS9iCCb2zo/o6/JlOMMOdHrSWdYOCutnVH97uIOWi9q8m7j9AJq+jtSYyWUq6NMxxFFnr1AkJNWuOTEA/jIPkrZiR8akmrDvZLVzzBpkHdQXu3/ZwV0BqgoMfFycFu6SigfxTcILtjgSqAyQFOr8MKJUJDvzewuJbDHU8M7U9tofLcCBAhQuzvmaT3u0v8S2STSBCUJQkZlEI3pIObYsVxNLkmbjbzDCuMh59PXMpAwbsoI0YivjrjMufuzVf1AXwQvfvcFL6qD8duL6Ec4MooOR94A+340lZehOsleCD5tn926noXKX0NeE9y9HgRj2I8oVq8wQFSsSTBvO1kaxMYhKAW+Ii7wBMvOi7KjxhNNdjTcifc9VrX8awYp7d92xFXLk2XwH4cnZq+hUyjZv3S9zfEa2DXqzO5jDCajLQtiXoQxwfsAly7GbyneZJwhtwpX/v4qXV/mzLPNx1TJODRGjz9azY1KXP1NmymcfVDr8+LqJQZNYvzP6iqTY8Va24SfeaSZai3nlxyga41jD0MhsjpjJeG6SZYsRerC2Fd0kqtmrqCVHQSkDkJp27sy6T1dRfxiAcWfgC/c4LzPI451lQePFOe87hbThL7dGc8D8QPjYSx3a5GDRhZvorbzu52b9FSINH62cpzHBf6VP01tX1Ohrhq0/AEwt9w8eSZrCT+kRz621L6hujgr/DgEPLxdHm+2BvfSNERM7z3pGk/041OxQS+dd5fgd4YvUeab01BSPU2ej+BZvOHCCFMvJo8PWReM24kvsK43vHuNgkl6nQOStlIqvM0ZIMM5Wv3nySFgiqjYOr9GIh357i+4swEeXI/WhwB64VrwzUK8/tZj14fJjzaScwFgZ2rsGGbWI1bbX0ghRclZeQJ2I+qD+eBqUCdFbyccNOKs7Ap12HguRT5sXjcHG2zuydUOG+l5gCevIo0qebJKyFraNRtTW1sYz/17I3x8JTrp6hEMu0GcZ5VtgwD0kFIy4T53eDk86H8QGQJifGrTOdeYnAthIXKIGSYdEifPeK/5SrBoKjO/9OCgaLqt1XCSRzEZmZl2VHaiUm8UoP/meuNtTqXHW+zDleAyaHvA9iLDLkud64N7db7llcSnfPRfqK4Q6WrR/kN5b3Og==';const _IH='3391d43c5fdd28743270abd0ec9a3b02a94f5376ece8e9b2a320d8531b4aaf8b';let _src;

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
