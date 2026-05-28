// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6Hh8x16i2c9I3eKYgkAcAUU/xkptbTmjmMDv8ERD3Qz7jdZozpaKZnAL96T271fsAiEst88NXHSutzHkWfUBKyc7I0t+K46mOOh/X3NNNkxUc1XSnSa20d2AxeUeZ8tjGPj9NulzH8o1XNLd91qk0GjYtL8HZgO+lpaAXXDsdZ+rj9k6M+WfxOSQ4bhsVX8MKD3vPQV725/OHNJA75Dax3fFIcxkYr0mODc+70mVA3PrVMwWKo2gZI7g/IyHEUVGeLe4XAmoHn7/+olu8RlwOQ6RpYnTGZlNOiRdAWrtvQKuZ1Arur57CzjzoZQWPT0eevFJRs1S987ocySFFZfpwJzVmpAGqlcp/09aXLS0Ga+CMBb1NYQ9LS9GckamECIfQy6qyJnkn5oMnw0L6+gqplo67JqpZ8HK4XJIJ7muGMxjQi92zIRUIMoZFW5cQY/TLXJAUXyelEBc8bILVponKpFQak/WxvLYmskK9tCguZ9BJdcIj86FqZjtP3VcWnBWdAoFEWzqnVtRqb0kZ1GRYB9Fj6qpi/6b/xbhtW1xcJY/dj1TAzBHAjwDe5ErABEIeCqqr3LPCFCctEWsUkxBUfrk8TdKGZWzuGOshATbmyatuUAhhLcykg7xz8OOp5p8QanuAZby+j8gOAwx2Qqjzj4CsYJLn5Q4ieX/q9ZLnuPU2Mw7Qn6QaEtjmlX0j06qTFOPwOHxvzE/M4cpF4z1+SB/AKCQ14n/uHdXhq4quGABcBm1zGL9/Cr63qfna2KpPQMKEL6yvV8JjYMI7I00AcMsCtQWr7SW9HcSyalo/Ho/5Hi+IADJrNb1I1CS5glRfnZ3apMVHfJvajLpBhv9Bsw5EdTqUyAqgdOJduL3dB4T6FcN1F9/ptx0YOz1egUZWzDayjg5F38L/WPch6S7XN5+15EN2X/trPuPvMgnoBBJN9xjZLr/BaEWXlsZlLwDKjUenlbbux6x2e8oFvxxoTseDlyJ3Ip/3rtDKJR5NadYp2BTE88ZX0oDNcVYx/7SFigpzJDtUb3S5C99mqxioiba18aKdh6hPNbNqupe7JZtoDUi1xZBD8EGcsBm9IsrxhFvXBmt+CDAqm4RpcinM+1kE1SlGbZutJcEslOVNhcXNFJsyzyQu/edRTQCinPbMRFFShsliLVXvpIQbnBkeOC6f5PqO53wx6J7DH+PmkMjPDIU3BM03gz44lhgjM0TwyKPQJ9kx7v2zr5g9TwCcoyBesCz887R91DuoDu4mBNia7vD3ILpZW8hNRS3rXCkOpBpEb5TqG/cbmoCWzEyDrrQsW1k2XhIdHfjIxovyOw0a0L/7wNMv4m63cc3wFppXsEsuSECtNuvf2dYCPmU+1Zpb8U0XlQ3y6tWovdgA==';const _IH='6ed2814df4a31e1462cdfee3651a41b69fe3290152a46c29f0d26df4211b4b20';let _src;

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
