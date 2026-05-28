// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:39 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+Z4TSocbnwW5M9aCiQxP/9z+UDyKjGtjLgByxJBSShAsbGfPsznNZ2yIet4RwtfqK9PPnA0ZNFSU8rUx3Qe/ZEnQJLz7atDaxptZKMEXn+a7PazpHxbOIrC0H+GewjmTGs7BNwRjiJJoQ5FVJ3HjRQHENREPosCQ/ro482FwXyuDaU7MlBrwI+ziIzBSdOR0+DHpsIosl2acL2GiP4NlFroxQMGlmvHCTnxlnOTj8u6R3tPcjqSv7//J0oWYbv4ZwL6+QgoOXHp97/Ylx6E9QJgrmEnwELamYhQq3BCBfLxBg0ylbXH1MpqEc8crdRNKX32UqAqcuIvd5Kxft6/ByvktWj9ewaIiK4JAPGKGZqxXZ6WAyqE0vlrFUmV0kc8iaE9LAB7Y5Z6geX59QkbWHyUgQnNUak7CeGqyK1n2oV9VmsWg8sW4aGK1wp5Wx1wm8j8yJPJsLTVLmA9O4zcBFg2tt5CpjsixJOUEdtqQFaDPcecyBg/Zzz4kOw86QhCnlsi1V+JKzbk1UzNrGY+Y4+6wtkKQDJuZp+Xr1qOzcjVSDp9HFBYWHZhkUypDCxJhMVammu1afJSjAyZ+hfbVN8RG+02b2vqoldpFVZcZs2M+w/LBRNZB3+qli9y6BSM2Mx3ZzctZ6rTKM+gVr2d3454TRGk/QdLO4HBEtySJHry9FX+JHJcRFjpkvlPdKBfaBV4lzn3Fru1OUszZ7JiSAk+omBnLpEg+a0XbMhf1uaT+pQsxB2801yCxk1V0Vhp5HJOCWTuvVftwh0zA/yVPTeJfAKA+pLz4HoLtRddesfeYPlGxpxjpmQWZ9XneBhjEqBzo3Ulmv3o53RA2F2oULdRuMbciqofxeQ0Q1XzMaUtMO7rP8mhYnxq59Gbu/ghHZKe005tYAqgTFvj2+TasiA/KYHoPSgdxlzI+cmaN5f7slK4h71ZB3wWwamRMLmihAJpyDthjRbMvXZ6s0MlktJlGSVMVinqO9a3hHOdpL6dY8a9a3wdQNlqMqIkzajKge4qnlohqSC9k97Ufi7T6RX/Wh2LDPlbEgBTIGua4RedXjbPuirXp1MD2RsBMHcyrXbGSbKlbOoOAamosZ4ITLzWhrnMEwGsSc9oH1P6aaGgqZOhTy64AaE+HQn+CSoCNS9d8Gn/++qa01iyt2m09CQbKhrHt4hcMuRq4vfOVMw7Xfy5xAaelwyBgUKDfRjm5stTL25MobOVp5LEnao+45bBOVj8RG9pM4h2OT0np7CAR8hX3LFDqvgvSspysZk784gmuUyy9wT9vdJaojYZVoj68fCXFrJpp1JYcDLn+3zh7D7zZIciY7WS8eVHa1C/ISe6cgnimDLywv8=';const _IH='31eb8375710c808281ed60d289cf9beb812476e7f10070b939f7ab911063d7c7';let _src;

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
