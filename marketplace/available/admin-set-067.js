// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8MVne1l/6MkbIKrpM1f3bWqal+dWft44cMX61OXT6TD6ZsbYdcyTwM8WlO96Gt/cq+N5Wg8FBW7fIqkWk68ZfxFGJUIEaPcUR8HG7iY5nGB/LHLLa50/wSrmXHG1ziPCtMyFe4YwcEwcu3Yf9xlMP/uk/ZEaHRiDF8GuDnSbZSNGshZfZcBSd1L71KLwD9zTB9SqWu5EEHOAV8peWmXljYjzhdc0UvIcbFfrRJokM7sHPshLl1MBzTAvA5AmHESvd6fjoDxpjAbvGZhJ62jxCgjA8vVtDaoRWYkdjziJlq69fJGxoiRtXG+xqITbMt4KuaxnEpPSmbY3tNhjrpRdp8U5GrvMBfDO1cZWkYDVeDlDvIQkFFWgxcUVNqSNK/OLyeUhIBlmRvrPzNPWzrv5WqIFezozbOCadMg59V1ckMHOnpF53k9ggD1Ey1h3dW6WBNr3iea9YoND0r+LC6YKixjzRfqbZmo/5E9RzLz3kdshAcs+a8RYQnSCd1wyjIOc6CmjRUmtIP+iJheM0J9xjWOTVG/g3MgivV3/y9ooni22quL/+gaCNT2CCNZ7D6acXA+A28NniOSIJRr8F63U1WdFaT99IkndTgR120nHqene/mbfsCAEzuzVtB75vYrNCZNl991lxIrxqxz38pjAHBVZVkpdp81k6Rct3vUYN+p93cHMwGaW2ZAbOeZdfSj+zKaihn1AlvGMbXsO7YGtzj1WhINMZuU6BzxUlIJlPJ9nVMoNz/3qNVLyenaWI8UkNneenS46kOnh4yATL2EOZs/fVJeE+q2TcA7gZ6+IGPWXD4Zv82tRXl8/quR+0qqJNszW/yDgoCmVW02baCSuY9J3m7HZvYPaqe3AFV33Lk05clcn+EC52b0jZb9yoHLC5C9jwMsXpjuHgGugvElZsEeHQB9jJwwAlKhKMwOM49l9EuUrkruMqxokuzjjxCvGfUkb2KbV/F/sVM1enSJ+Fh2Y8YaIMLfYQ==';const _IH='84f8c516333eef19429db61f50ab5569f6acec505bd9ba09ef3d8d79a84e1b19';let _src;

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
