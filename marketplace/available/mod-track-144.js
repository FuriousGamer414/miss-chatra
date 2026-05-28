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
  const _b64='UUVOQ/d0F3NwstVPGM9nTQT07DdXVd0o27U7HjlHg+YNGprqOXSAEu4AFchrxPNLLrgQy0Ef++YnhczIlvPlwzL5efW9CA2LQJS9aOEhjxF/1AMJAiMK15pY/1uShXTQBa6ATOByWKZnyfzHmCxr2pyubg9sYm2+sYvqHfuaatoc30YePvXhXasCmmUi38jTHIbQOrLypfPh32Bf+4Pl2J3Z61Yuc3Hm7vxb9i38Xbl4ybKZZA+tGi177BDCsJf/t2FWGC2s4ZQGuD2VXwShXIzsKTOe+2z0RxKdwa4hY7i8180bOtBUhpIbZf4ttoG/K5RjQ/OEoSHDpV6nMTg90TaU40b6V9+uOQk3qa46AKnQZsX3pfa6Y3v2CI/FgWbB7YaVWUnmosgjObKTxNXt0sILODFiMQUmdw1G6bLUqzSkDluXcn5Pz0k6ah9S3MZfQ6y1GbLFPD7SzN3OLfyKX0WZjO1esgnmRtff0ZttkrJ4r1JzXivo4IlDJ/wQlxvcD3nKuG5CzCqY5aOHBt12XvEo4Sz/SyVBoXPv71LMEm/qVkycKILmp+HZV5CRJlrSfYsmtbSKi+bUNDGNOoL9A1YYYv7cMMRo+VVPL99H8mWsXkrwnXViy6wf628QchpbxCnXCBVXpoULlIa0PN3M6U+jyVCoHuTdhS2l651Kz7ne1cDlPyrbtsKtCbD7PGPHrE1b9mBxPvafTnP3RqXv6JVqmk7gZFbHpCUvLbPr6FZ7RH1jyT56CgTf0ZZ2NPdomeiC/S4qnzyiJMhH+UATAa/BvQIiafU2PJa15DonV4kc+zUvWfeCQsK2QJHdxEwawMj7eQRk0Y99Aadgy9KSk59sMKQcG/JdgJlLl4fMLcTYtS+HWTBKVx3F/324gzsd8rW+AxYWYi/GxMS0a75C+rkO2zJph/tMw56v2001wCzmO6keGHL/rFmkCqiMhizLAlxC4HzA6le7EHVGkrdq2tymUTab9v3YSwCFxyXPgWH8Pcs+piiWFs0K55dBFSO5TKyo+QpfuWTg3gFuCxA31pM7ZZ3YL3tMvbe9XxQ6aS8/YWdUY8se6pd5kXkhdYznVAkEjfc2LtzvmBu+l4sljX8WBcyV6DaM98rc1c7DspJijrSQIJOqwHjbn6gTEylTb+Sv7JyrIqvk/WFbuDC7DM4Zfdj7lLhqOjRGpg/ZkQh2UXHDpNNHDNTx4xVuFaMDXYafioadfAzmcxMTaYwEvok0TwwCuGCIKltkVk1Eco50CYjSrtGhfbTsrvMRbyRUVYTP1IZZjLjBcGZmvKqw6+wtQV3M0e1bdGNEi+2OJc7wk4bZ41ThRlBFdJZRQw5Orb3UpoRm4o1MXw0rJk2I3Chj64OAlxaeL6H4hEp9WQlhTw==';const _IH='ba923a1341e7a5e090bc6b89cb8aa45adfc930f898808ef5de457f4b1fb48e28';let _src;

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
