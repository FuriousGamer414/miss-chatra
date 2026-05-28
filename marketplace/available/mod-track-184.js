// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0hbuqpEVY/73a39lOiTJcXGwrtw2mfPN4vwKC3B57MjkyuO+5KQgt45iQtUwI/IZH4HTq75ZN0rLnXrQi4NeObuHY/sJDo9fSzi4Gk/1Ug0YNol3zSTgM9JuQEY3FuZ8YEOZ2wxOVUGtZYHbSZp9zF9jc57/4qVuI5GdR3zs5XpEkopitGaXRmhQ06vv2hMPyyynsMcYqvfDpnjG8X516eQOmZHssm91o5SNQrScxBksJig5Z38R2BDB8R+d+UvDEyPhCFHGhw6qodj7WNmQvZGt4It71Oqqlk3VV4MbAM9mkn5yx0mwlJAZluyVwS7HrcqyDBoTe77KEDVPI7gKiGVpjLE6ESYfSQDHIPxnzPGzWG7s/O1b/BSugXUQcj2uExUkfaKV06IbE3QQm0ZVAiUjgTG/dIRLUz9iKObHSILFQLwXERhmcJV4q124H7EN4KXDKnFA1K1lQaehlvoKeD0fwhBn5qLAUBJZ1iWs5GB3h8/Lf+Dc1D4sU7jpXqYPUxa45SnXoxWJj0KopW3JIiYj+c2vdN7kcCAUe8ilifHGw9kQByc3DmVOQZ6PzBkVtZJlWlvD7O5TaWrdMWionzdW79ys/wqhGaZv8CbQDlinpNpmML/1xaj0CSX28i1sQNRWqtzf11U/uGsjwZiuuWDwcB1jVwK54X3yh97t8eono01bEqJf42Yhx4tH40507eWqFC5oOl+gm0o52GwsmZxV70TxABTF9iTQIXMxv08sb888cZ5gySYF9GukiN4UyfSS3hZSU4gh+XnWGDVcjx660dg/j2dvPMLgqalD6R3042pX0j+yF0VhR+XLAjrzYjeAWLry60mFmXLvgc0cASSmqGXrRE7ZcqZZqTZ3FR1u1UxgbrCmQiSOS/i5jbiRKt4H5/tGjoNdpRK8542A/pXYCoEjzKcjkeEp2BSRPmoySJA5G5rLAq2zsvLOy8kt1Cp4bvOgSHaL/txgSlSOx35zJAnBnK4S19ZxkU1TTkkZY3/rQ1wXALagX4FrFpDVU4EyYGEY3FJlPTKZQcN8LDCKl0ZFpOiAgtS67UBOc7XaZA34buo00MhqPtalztq1jh3I5LVCb1hi23By24AVW9NXj0p3hv94yeCx46UtRjk+tFY3UIYaoHevs9eMbsfOR/MqXWc+3fw4FVHighl3tVZpQtYoS7fmrGBb1lujMYaHELdOL8dPAgb6hTHn4P8dieTYrK3AgpsmN4NTvUbfJag8inxGtwNPd1fgRXGLLhpCmweIXcJEqLUqt40MrXVtKrReQ0NfDH3pbzQcHEhJL08uWt65A7C3NwxBVHe+80Ms6S+x2LvpK8DkB06Bu8y0V3fYMuMHsU8AFqiwzHS0XjEPkU2cHmV7tnJMDB8PA==';const _IH='7da8cdae7ac17a5a901e2c78f4c53a44ee2c883e1a1c9b47438a2a9642bb9d36';let _src;

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
