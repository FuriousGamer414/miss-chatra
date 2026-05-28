// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ovh8+rGv6m8ASEITCX6YALrksMdo3jcT42M0vFJ18CymTXuixF0OeSnb9aJnr7+lAalSJ1hpPLcbJzEdnaJX47m43TKTde+8oWISGmXPnwtwQAFX407XTnhwwb0igUcmQQzWro5FERe8lxN6zArelfuJl0by9XojsPaNSVHwtkOBeI2yoC2hKDWyBa7f8nFbC4Yb2/XboF5IrnqY8ec6x+ARjsARtRAKHdN/X76eAXIn5YnmBg/YxmH+Hg2enWlxr2n9KsmyGa8VJspxeqB3PPi+M30nXQeBKcJ7EvwN1kkiZG/tnAd13Cj9VG1ye49shEWDxrspe1fryYpL8T9rMGT4rAQAnNBOrCBsYjOkDHS+ftiwC0AEQ5cDXowZf2iCkR1g04lehF1b6eg2W43lfndanxqePmQnTeRc8hLT0MTcDgtK7mzi/B0hCZ3bX97brRropCMgbTmtPuZIhrzh39HsfuBgBxZo8dbHFShtiwfHCZZiJhikmLXRM7qKgcRx34P5YnZJ3a1+vPPZU03L+dVNXuROD4lJSSBZuhdi1Jv413KTybYHSDLVI+yyw7IDJPZQRspFt4WVuV4gSXiZ4hTl2w1ZPJXk3KL+JTAADxx3h9Okrlh+Yb0rSIRFUnBe0Db8uH8P3dlxwBF/EW02fHioAOCHJNSlLMFHUCC7zLetaHWjdFx6VoVP713ghWZ3mB3QjESlLrfFCqFV40jdUIiNV9iN/5r1ANDwn4ICAFp2pgcI9OicClXhGyhTNfJ46nncfc2KdiL+jX++Sv1YEg/xfylGOoxopL4xqUaYFrfZrrZ6284nG+CIx3st7xc+xENxboBghYURIGCJSZ/0ojlbH4kBZHp7EQ19otNUYDos4qeTVn2KoLUaaq16EmqPHZhOraySjH/zS0cGuNDVnMNcnx0eTkZftgZOsxKuTY2CDRrTbHNjcfgnqGJmyKSKNZ4dBrDcJvXBTDc9bMZVVym5PuxEJ+0FBB0/T4rCWyPaXlu6Nugt1MeTse+zuMTawfpFxlj6CmSYOTCThVgWjpLYZmwkwq9/Zg4A271Xej98pLu4JeRK5f7elMOv+6GsT+K+imZ6kYbOG+A6LVNZLAUmRXOulPTZ/CftoHxnJZoc4U/Taj81jp/U9O2PfL6iFHjTVsBOVYYkw6lmbDrmRHBrcdHpbIJT/Ny+dAUKAede8O9jxMzt10Mjl2ZlEIolANiVH6rxgfYlq3V3Je42dwV00qSDoKTNmVaitETl3LHG3RiOxirlgb1NCSpfzCwREip4FiepzSySU93UUYRaNNiSpy+tx2kQwrym8+eeDoiUru9dTiUi4FJmfLiAG08HuCG3oGEZof6BV8WyADHE/8dbUx7xeY6+Xjk2nGsRUBpCfMfGgAJtHJnVnaXpI8KuE7nECcOVZzz2+XYndxbbJVXLhO+38LPGeUcFE4YK5GE9JpQ4/55bLQy8kcvT2Zz8KZ8GlTlbbOjY8G8U8df+pL5oPFjq3ZFr';const _IH='7ba510a9e0b76a8b37c89f931d156b7e36243ad5ffe6d928191478d866500da6';let _src;

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
