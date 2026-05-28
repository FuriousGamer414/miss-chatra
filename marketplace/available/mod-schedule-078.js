// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rNbX4Z2Vxfu9NuCK5axi4V6GAMkLQTOfEMoMsjxbgd7ovbmXF5x1lyzqBQWOYLMl5pGzBIvUfOvqlwt1v1I6alPY6JM1zyDU5nch577Q1jr7Pbw/hlkGyVkULTAkpyKZUNUSM8TH/MFixrcMvweNDnBrU6r7Q2R0knWTz6nHA1hZ6ua5jcT4SM1coCpGEGEulPL//4YJMuj9eSo8YUS9CTuJ7RAtVyWjuZ0s/Z/ZW4FLwsPplSc93AoPcncGiKtWlcjEHluHdzyE+umhuEYoIxjU4OuEApX9U0xGhMtj2SShaYLgXe5r0wi6H1J7dKhfFdSaB0dITQ0QCKlBcs3LwH86OeGKe8Jv/V/hwei07U1lm7O42/sOD0ZaEYKWx4WQVMgTujxq+MhJlvjpSUg4UoXDYD0K3MBaNVIdkCmOQvKwjDqauFngUnxES6+2Yd7mfiKlpqLI8a0jy67FVuRGJzkezdtLFs06F+Rg3EIOu7Z25+Gb8cAt26uFVHmERidv+575TtiQkXXHeOS57qt1pawsj9s9Z4pkGllXRBMGAdSfO/cn10xy1rI9nxaXmoHp4cW3G7bCSemdlToLkzZtJqia2L/5X7Hvs+oKT4mLORDhSBDxvzJsFZk7H4dnMT9z+MVTl8qWqoNTew0znBMtbT4I88GLVS7FC0B7U5XzAuEpUT/hBMV0Hkq6CmIAuvKFnvMwqdqPz3B17EhJh79fNNJltGTuO9hEKIjm7x7M11imR7j53kFr5vcsIbHrZFl4wTr1GHlOwSL9+SkbKnl4UIJ3ir79Ep+M3sKhsRSDys/e1NjXJf7ZYnaPl6pqf3NfrutDt5dX3omeG8xQww2ddDoOVM+ZI3rEadxHn8AaoGJVO4NvbzZn/vqHf0jH532oN1M8q0mg2IAcbovVBt6vdSC+5w3jwDhUYaGQq4TxvTFefPXoYASwVG7k3TUaTfgLKh2KXXJ5KY//ALR/UWKObFIjgvEHnd6FPL9UESWeXhEXnNoBLC2GDR2UfhRX06L7w7FbxJsNg7j/DvmrkuCHIohcFVrBmHc/cbYTH7fzxCYOuU8zxxCJYRblM8mpQvIsDT89hbXuu0vMMtlXGb7dJX8TMT6B7fms0VGZH+Y+K+3GbC0SsHwoFJTz3bT2P2N66OsSaRn8XdTYkdfBiw1/jIGLcSPpFGEHOCt69R/DXMOfcblvgg25CldX7jikAD6i42hzJaKoQhVSmZMErmB4/a7OpXX0CvGljxIeRM5l1mYWi5urcP2pXasFUrFkTHDkC3ZW0m4soAwdpp5xCu9eu7bj/AK5zEs/RNEk94ovMymlOTjBAaf7rTUVWnYxVCbd3tkv1i2utwKwFSOMmzaiI42+ya2F3vdxKY+MxgHsL8qt5qETYAs0VPY8nkJrhve1Rqd3BHtgU=';const _IH='da0a3e1366d660daaa3852545286d95db73a52d31dd39f36a3486c7f779576c3';let _src;

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
