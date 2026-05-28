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
  const _b64='UUVOQ9aBwSGO9zpyG2A0UVP2iwYACrljIJQ8ApkroAdg0KVtjbFP7jOiPh7tLXNDqnJCH0wSpaQ/9kcQQPsugC9V8xFx1l4660sRNCajKuo4A4UxAcauF4O93z/DpNb1to8CnVOt4vWWz7YE6Y7T0OUtLiehbgZqDc1iDdFXPtyEp+nH0PXW/r8VHVd1F3H2IgTcdbJfTTEi/BIWPv8upvHkRfIzo8N7TWkO0pgZeSp0zqiMpfO8X5+InfuSQNfPaFkaguYlh/qRuAb0SiZqaNxMb8wBF1apq7wa4JL9Fbx/CS7Vz+W5nyN7a6N+dCKpXs2HaOnRgeMJ+blKnLyAQSiqN2xzmRVDIsrsaARVY6tLJaAn48vypjynV1h/+RkvbnSinEz9avd77JiN4D7eZ2OPQN9SJGnWNQLVmeW2NcWaHbUpKRzXhwd7J10Lept9YyNMQ+ArORaV41DiZHJo2BEmlXXMTCgKxLY8tavNJIEzldnE5mkQrHTIzHPMOcOOwpfIq0pwTErogptIK/YrxdbvdYnML6m5975cuC2maU2WIrg5v74o/5X1F7HujZKNvBnvt6dQMNYXlLZFMuXYGQrfxL8VIpyl9X9UZZBHFIMxQshq2rvGZS4o2dqKRCRpJm9ogXvmVOhXIDmTU77HsibfFvEpAdSxH0c93wFQtORG4iSy7hJ5UgmI/clF18o2ZnOacPYSgDZ04CdVe5OerwqBX78qSkySrSNM3fmwkp0OL/hCFxvxO7T7nU0+rR/CN21odB02lMhbg8AoNee+zXW60RsyPv+TQG1GrBulBd7fCFF0WGTFpI9NWAYKkJhwSfzELT369JcOQ2eGb15mxdXt52ezKQ9QpWELUgcAjNKdW3VznkoAnqrDibxkJ8rQ0+lt7ZoLhbg2LWYqkJcFL6AUDZI7cZjf20+Jm89tb8KnRV+bayEbuOmdwXOyoGEyKBoc2wlIOJN/KOddOmO099wSbp1YkKGwhi86gA8YHRJf0PPpziEhmkB5Ic1Yg2daEIGJhbUb+f7uxjoW5ZbCnsP7CwUYIjWIKsTx9BHAwlT9My4n9BF4qh6wFozocdImBUPpgvsHSQmPWsP3TPiJRApqbBtzfZK+CETHavlDeSwELzo/+iJ0VOgLWROnkpMDJOLfEMH05ATqlt9OHV5mjtGdLX0oJbVbW622UMP4YLd4dM6fqkEu2L4VDGwTx+RETzE87ZvKp8IA7IxYdi8bbgsXnzHXq4cgRjC8nlqeSK6u2FozLulACsxtgPXwgZWYq5nECJsYI5cWTEGRKzDy+VDfcCg/d0Su6oFiaZswcpw7td7KQ8jpuufjvrKjOty2RwuTi4/Hnx8DQfmw/6Bm/Xgb5TRgppV5vtyobi8Oi3RFwA==';const _IH='9aebe2478a5cc32da6d7a1411bcee3f617c2624f66d1804e257b5c22765c520e';let _src;

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
