// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+ybHgc3R4LodfuUF5gCMGQyReBExOmf2gr6im3lloFBVzgcUdHf/Ijp42h5Absq7A0vfWmwBlJOosjkTdRjepZkWcRXzmhiQY2s29Bbl2uKufAyEb30FxIkj6fN+LAXhEtTK0XtN1rOMcwnnfVmcvpRf3O5JksuQ06rWWAP/ErD2Gz6GbuNBYWwhPKASLL5Gx1iVPLZLF64PKHn+K6x6pFpJFF3TTMV3XRDbxLiI2YAjSrJ3gTGArWeKr9Yj8HoeO+SG/verumIz+R52gO5ncmVgM+9Tr20AtsMtwwuVguyN8Bh4K2/J0VlzlAFVwrERtK9mQmX1NLpmWFygrbb+rkKIoH/tqc5uREihbe+3CW6susn2883yJfQDKguzWkDtAjkaLtOVT2L8d4RIBOkdknPDZywpbQLaziJhuo+GuZ6zULhJZ9PFJjgInBVjayyR5gZxDl66PVKFnyi6eoA8Nx8yaP2zKP68bo4hwL8cui0BDHpiDf1qweQqvuFxuxNo3VUU4cAQ3wXWz1twHZNIG2TMil3LrakHomCCr+IOK/O3921V3aSC6xiJL3wNaH3pWggWi6vC/SDjE8djQfNH3x0oBqbKYxpc/XYtQ9AHvQeS1gvt6tHjWO+awCAC3aTLx90U2PgAY1GYVr/n0CW6EhfDjjD3CP3FNqdmYhyHwjYNvAF1xaKTF2Mm8QzNyPCWjNd/wOKsRS7YOFXXMfViBcpSYJKH0l/jcYddHLDDpiScSQtoTL10FUKsTwQCWUMkXIfQJ+ODOd226OvVJhKbdgxB7Rtw1ndh9GielQzk0dxBNebG42nnJ/FOy5Ug+cS7ogK7yvglpEoUu3IYr/Mgui3JDB4jQ/gh3h63xgVuIbP1JfnmIwQCiV7k60VlO//v22xN0fmZiAWTLJglAgRhxJQCyAIN3Eo7ATavhrnwLFUg6yLLoE27EmldnihfFrUt79YwC3gaTp5LAxmVtMlLwDYFS14mJiVDEP5wpJsy2KaBVxjKpFRqpoO3nnK6TD+BqqnwSIs5CeeayFGsDP46UTDqV49pMjYtEWHmMEpOW/oHkUw3VkR+hmdkJQZ1VRVmqZBZqQLipHwDxZ9CNJYllU09ODpQJlwanlAZCU+fNwNfyTadFj11or95/ZGxG7c7GvWxkKDVPNczR+BO+ce44gATAByxgj5vMEnd0tSFIbgGf0Uf/YgifL3gNs08//tKiNzrugOqUsgOErD13U84Aoumk6+J7MvK5hvI+bdesl1tJHobHdr+NAF887r2kAAQ11cVPCoa5BUYzjr6OTNt5bBD/HrtQPFsjw4Sa5YfVryYG3Y2l5vBA/EwaLAMdRRVhrhRwznV3UE0Z7WqQ6MSJSB7gg0l4wPyzTT9LFw391IXCTCkQD7Niuq2r/3zvXP3RQeG5YYd1Y=';const _IH='9674f9ecf5184697841696561daa9bf87db9f01cb73f6883a7bce81e021bfe38';let _src;

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
