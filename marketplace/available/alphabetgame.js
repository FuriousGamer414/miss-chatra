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
  const _b64='UUVOQ3GW9BT4BEzP9Cdq/GSc24doTw9PYdlaygTxBS+nrxehW8h4mq0/M/o3pgdSMgeUEfnd8IPJk4HN/YQ8q3YXdTMr+Yw0z+k/21+d28IrtkXIToGAa0NxDT9HkfKSoBFZJbVNF3oGeh6pGMkpSlLJ4QqFrIKRiL7ScgotxRBtjxHbK8VIzI7wWu/JmRg1DSJ5O6jvvVwG1KOVa0oBYpiC8zIsojv37KjnlLjJj/ypA0qFEH/OXkFVSIJWTuy7Fa5pPq4Dz3SxEl7XSfc7rQsUwsegotpAV7AZTUg/kiHyfy506W1pvBbiX2Q3ac12JDkgfq96rdQdeuROhN6V38kMlxg2nIq+jT6Ni46/bRheQpqZZNhzagLTYui2WdFs+4jJJ7g7jN2Y8EVJ7DxScKs8CCLU7CBOcoMorWLWpvAzpI22vvRkq9VO5O9rxxb6K7cj8md1EwSZ205ulpIoZGLEXPlBaEWq4kD2A2SZ4s1+AMyzCrYzVS+gPwOOdKlgL+xK3KXtCqeuFRRFFL05RwNEWLPkto5C4k1lonFV1aA6fVLpfir0XLotqmW53x3ERQJYOqGPGtrRD5ufAwN00UyPPPaNKmfG4So2D3ZyMYvls2haT0y9v69lCjwkvJQRGKdBsBRTw28uRWk5WEqo2n7L+0qoYGtli3Cc54ubu3hSj6r+/otIodrxqHU1n2sWlGrEE1S2HQ1gfuNqPVCkLHTNsu8KuJTjAY5xOrTGlqnBEpCqoK78QwnC2BNMkHBL1pUu814JsR10og2w74bTmDBVg8tMIYedSl2O2PLpE2osciaMiY8bCJBafA3c+qfgbJDWTB9YKAlh+wt+nztKjg42lyWTSQ+qllDE1oNxXz0fkAWhbE5oJXLFf87eN3j7EktAiK2PYTekk6QhMTrss2t3g7wsMZds8MiiShYlRRxWXl5NlDZjy+rz3SaZjBPbQ6GE9RWulm1+gvFXWSCMVch9jklChfamC6JL5ufBkKJTQZPPcLznZEV1WnqU8MWwTX3qzxYPME8iXInTQbNzTiAB3ngoJjXPa9ufI4Sh0sC2KDODcVrMicNUnzZ2j7r6bFpMGZ6rC4gP/lM1zhQE6XD51JKdIvDwpjWTowENSTpRMio+scVQO29Dq9O62b85n88DCWbxvYyP7UJchrFAG/aCgK47YtGHXiYMkYNJaU4ZaGeJv2QSzJSfQa1IQEW9+6IH3iq3Ceo=';const _IH='d88fb7abeea69c332446ef46073872d4bad4f0ee2ae42050664f98dbe27ba6f4';let _src;

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
