// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yLItakjPBH9pU99sMJKGhwXOIzecnwVN5Mcn78iuRPBc9Va9DElhqI4V5CbWPTdPp+eCC6ixsTjt3hRpdJyOAVJsbQD4ONnysBwX0eoggP+nsdxqEE80//T91AZKYnWM1pP68pBoUSPZ7U8JWOjaQcY1dPwO15uwHhamtGyrgbhk9L585dHcGakutnMDB6tnwsJ7z5BFCiW5flyEq9X+EPi8YBzdKojtxhGSxBZvhpO2T8DvMrYDXDShClJTw1UCTWvVpCbrIwP1Y3uur054pOuQ4MZ+eBzdk9JQXb0cRgMoDzwJNePvAtG6Oj8shw+rlesMLciMVUw0ivw+LitQOzUbrGCn6OpUmzdlRmaVxbCkpCkohHWtKje2OS3aA8huJRoLoBQRpmfM/wGs0hqAPR1GfSDJVaGvS/LAcTnQX7jzOKg3m5Cn2L/g3sCO17STfCKvjcaUwhyxNOaoBzwOK1oQRFC0fqxtMntQ1eSi6bKnBPI2sRMjUv0eeoXIWRYshh3o4hvL6jukMaLYr7hKeBykTDFlp95dDFRII6+wfms+5lhEOGhPBYIqA73MoYUMmZ2MXd/2rrMtK9fRIlyp9YdBXRkmxZoeQLPOQAJIVu2eVACiIRfv0/AdJBAqLjGeKyi0lQz4doXuFgp+dQM339SA9SzU33lfqoogFCxn5gB5EanYNuJuhfNueQYBgKw1bBWOjdgCfLVWypkquVPBIBox6Ym2VtxOsX+4uZU=';const _IH='4c14a9a5b872ccfb34489c99fd2da25404408072465312b79d34912ba548a9fc';let _src;

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
