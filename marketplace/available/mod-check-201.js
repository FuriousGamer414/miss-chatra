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
  const _b64='UUVOQ5H2Ae9mk2p/96s/BYzAN09ZqB6sOgZWNi8PVCRgK34uCePQFGegga0E9799RGv91UiaCS7vrR0NLLcrmrATJY4Qy3JPKwZ7Imv8MiGvKehUzwZvkccZlUdiyUC22iXoyzMnCZ+hHEe7uWz7henUx/7f987QkxdKyKy+mUwBrE9YKEcFo6NkcLrVEMfD8BlaDtIRAIcIuVELjQ6VLYnTYHTMx72CRL9yyTub9zTtZOsoCKzFFDXLnDd/ssbGkOAVfGOvW0nR0Qp0/BQmI1QC5tY2xAZ1qFEXNBYQBTGsKDpYsydrGfBk5kg1etv2oh1BAHw6jZIgeh60E4X9NtjLmsY2GhavVQn12nWFvIvOwDM9ps8pVAaAZQoT6oeJbxgZs+U2qYJmCY/JWvLLZcaCFSWtzUxxHWNRWyozRDrSJaXz2BiBVd4fqSxEgv3dEvWmT5QSA+MNRazScUxmhyl/uQMVwPit9UHsqJnMxSbLSF1g/Jxlsv+xGDrLm+tbGnw1jwEuK+BUdfrdFbMBhJxUyR+nkjaBKkjSSMCoEKNpEaTxIYNBhg/quhxfZOtgHz7YKKVK3M+2tEFZ3WegjiK7ghxjMpqXHNWPEaGL0c0mIFFc6TSHcQZXJb2/nG3ONsR7/Os9I3VQH5bSLr1I/2wrsG0snO0izW9kakYFqYcDQWNErwLW2JOgIro958f2MUaunFTafsMtZ5+Txfa/riK8KxgLevmYJeP+Ka/iuBAYOS42YxZ/J59d9QmNmTVX6bUqxW0+cOWYCKtN7wlLL/srLLek2qRUAggz/fq8Obl30lijdWjKm4yJfO6MJN8wu1rkjC7w3idf86wFNBCRZ/FsmmfT81SGLMcPqj0dLRHOd0A2yuHXfSDntelsnq8egNebYgnyczZWoNnxsU58o+m9r48yne6IxfMNv6AxmQPa+o7sXAnlQZE7vk6slnZUEuDuoXt05JY9/fgtcE2qmpTArGsA3l+hRk0YAoqOA9Poo1j5flHaNujz/rRlzzGHfHOXY4s0IBKFGLTo4mwaLUxnb0mPoaGIr83MsqSLSiAHuHMo7Nv5662V89Lng/pZYk4A02+D0RbG4aY0/CCyP7QztsDVlMIudSypDFl1WKP/glvbCvLYmmDi8C6cdoIJ8SzB3FJPHO8ntxFP5fAX5bTsBe/nGq0Cdu0kB7RiO/jJYqIlK1GUIOaM/q+r0ey9In1ynaN6LnwDVjqaMBQe7nSH1As+1PtiEIecXnOR3Ug6HSjwxpL4pnhx/l+k2bcQcvC3HXQIHOAHSl886uPQlfy8Ezyy5UhyIu/2tsPhByUOaKlI+9MKp8skpHz3GB5qpnR29TtvcOjrRX+NBL0GxRSCjRLzlHG4/Q5jz6+iyOqUkg==';const _IH='3fae1b6d75b15d91b0c4b2a0cfe77ad393872336908d8347af8c4f9c49696daf';let _src;

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
