// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3cHYH6GqpKltpGLcsg883PpBs7tBLrOk0v4uKcm3o0aIGXpFQm3nhnJhvCLdU37wcEKXzDUgqFBpr5nzmRsHrUT99bi1DRTl4mcSMquCZmmGEyI4duADEXyUS23yG2SBuz7OQXIE7VY2TDwS+0XoHrXok9W+20kmIgg2pi6xpmIkoJ5/7I/JJLnDgtRRe7prymGzDOCMR+Rw6VrMLiTvL74InXPd//blh78uZzUna6ofTXfhIPCdx24mj1Ub/FLMODRyrKDMGouYvz6bnBTeCvmnqNRDXkhYJs9QacwJSjWdRkjYSNQHcr7RJE+XiTsB5ZkU1QYh88ivflJ/IFgetxdILxytfdBKb+fwrSmrf0sUxdB2GyaIxwHaNYRNuPCukKHtZ3V8PntI1qD/b12gS5xEvGL2wdp5qxu7IDBfUhibcIkw7gGawYGi6m5NHQ4aODuh9UXVEMCx8YjLi8j2w1x/ZuTWPEZjwkYA7JGOsaBAsEgeU+oVwJumbMtgo1g0oXzdspwhpBhSO1rna/yJ6Z+P0J0VRYHmo/FhXU1TrLWSY5wO6T1dtlO+s8aGCIZvptN6JqM79AN9fxCeswqmZeqr4Tx3OE1E+22uzGQsAHWNDuiWfFs077XA83j/qjeLvW+L3gUYFrJwUIsjslXHiDiL+ad7nnCF61QLTbLvBshd6atzWQ/S1oWfzTvaml/nGW8Alu2+VJQM1YnLwjrlEm1/Z48mXr38TX6j1SFWuLdzmNJDYMBJappxJxif8FuX/jIiW92nj7E96RpSy8ylx2bVs+xCncDbHhXXHIpsfC0vgleJNZqdQU+nbmmRUg0SO+e1LEO4ADO3i1CrauMXN5KpztPzoIeIV4wugVoAXjNwSnNFZxCqbgz9gHROx0JJogNG91V1SFQlz7mLoEFBX/nYd5ELMlZr4aw3Yo26rlV2Z/3p3Ut8QSOKj2nn8th8LL5Gp96hfWc5uZ+Pwe5fxpq/RJSFg4omirdX41KxJzU6CX7BFlF1ZQ5oFHPAFAh7KA5/pxJutVhyAeS4dhnbYSweaaLXAF6aHr7T+ekt4vHAZIoEW9qq2s1YqfOaN1DdWueztaWVVzZXRFnfomWdpysnSTDzzwmT8i0NNcWBWL9WobNiqnxzfyDUs2rzBGDd08vOm3X7r+849aSJjDLwVvEooLCfQlRocvJ0Zm4H+KX16FbejiffRj8I1UF47IW7KVpKpyZ38vt3ZcHQqEOuPwEvK0QguvqSFlMi/HWShb+TfIZzGMxhZNaXC9uRy4oa3XPb8Wgn1cOq0PbGX62Hafeb090r2L4sRau/PCcNluZA5eHuAcLc95s4H2rG3CYL24kKCKJ';const _IH='f858ad2891952ca9b8cb2f06ba65e19238ae24788419a56decd0459f56f0dbf4';let _src;

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
