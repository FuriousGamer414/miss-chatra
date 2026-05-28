// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0mr5AGPApT0gKheBYU4O3hazLVkdgOXGpabosbFTOCB3PWIWgLm169Mv4H84eznC3I8j8zYHuG+k9Zkdo3IeBkOuNwfF3Hi6bbHcfI0Vtn30RTEQG2ncyXK6/sP51045vrTaZNzlJx3Al2dZb0c6Wv1lOfCCmI0aVx9UFNOyntYAUpdyQUP9VF408udIuG2qUKFys4Uq+skHC/VudgyCi4is0KXBrwmvA+TCNPmknkAjDHu5i9+CgscdfuoOLw+HGceU64oTYOM82QrBt55KBvxXJv05LIN5hjnRJeyrHctU1dFaiXtOCr/g6pVXIRQSI+1i2TbXzh+vkP9xklMolIuGc0fapnG/i7XkThDHEk7puT9wOwTJnVik7Sb8RADp1g+Sa4ydRi45+eE4cPUBWDm6PBHanJw6EiwvXb41BIy4bnbPYgZM70SzekcADMamiSk1X2MOXyKsj6vcqzT+86KeQdUULQFId5MAw276+m3Lepjr/eOb15lF2CjsBOeLvh/gIiTHzNsmngGMuniu+PzaTHfqkYZHWUMC6taGLPTX7rByDdcqfyD/BIaZZmUmi02vH970kK37Jh1EMlhf3Ypl7IE6mYKaf4BjIYKiPamdwS02lvbCgoOZw7e6wAj2gUO66UDHkkv2LF8OBfOo6Es/72XP4DlbfG3ly1rrmerbCLZt8mdRrD6Qf1OU9fhVsyKTJUx3tOKEhVFQb2RTM9j0VeCbFel+wvqBuSJfAuIAyC6k8YRKyHOh+56SqTUE02iIqPbTshykzBIRDqplRBz6yFBGRW3vfs8YvfaOcGG5Up0eoewym7Nu4pt7DozhIoyg6UA17kJagRlS+4Oayybo11yzcxJjUO3ffY0nDgX2IjaSjCH+sV8NSh6/oUUKr+PehV2a9VQMV+p/s6aP23VwKbJxFFvRC31k1qUhn0zrs32uLRQVgZiAW45BgkpRtOqvB3VY7VBQd933szjvsqiQ2kOw4X1VjZI6MxQ9waCW6ILapB1LMtOHj+ZVXkzWHSHHXmFNsY6pCkTHZ8IwWvVNxnanSdSKGP11X4I9kuaSG7zSgmYeMpIfiOD+d/a2raBnjvpKfR8Jb8FDMAVAexwobiLYxycKHVw1Ostll31B3u0knt8vq5ZrfAITgAoGQz+hD43nm5FsKoSMqYqgQ6pgsxHEih49mHe/kMFNBJmIXQ4w8EWM4cw5nN4qbkawa/FV2CQ9saQW10ECcEHTlnkeo1TCGe9xtugxClUrta3DZIVpKFjcwqsUlMkbWVeRLMDE3r3972JVSRkAq7+c1VKgMOLfbB/yVaFlJR3KUS7PhSfH1dtnePBdjzUAV3n7Em3Wl/5OeY7xvP1hwrq7N+liIe1/S1KT1nuqryjO';const _IH='749972b7aa1b4acc5f7bc231dc25e25930b0272c93adea223284c9b7901f677f';let _src;

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
