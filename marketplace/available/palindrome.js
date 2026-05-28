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
  const _b64='WpEZq7EY5E5g5O0IPcdYXvifCkz5Fg+p5qB9IqbpZNEF37rMj3l693D93eVpgJ4tjdxDrvkw/HbIbVLVKvbhmoaQmVaRHQ9MCwvx/AnpWr0TSNyLED81ApdcLRu4ctxzWryWVuH6f5wbuEAZhq7DX5BVxmW1bgYV55NqSyywqXBnBiuTzZnVFsvSstZM2AIJq9z3N5ev66PKeyn475zpvFHvjZWVb5rFc3dOg9Z8P2Tz6/8CjxmE/RHojvTkTliDykXj1kOuEXazJ0ex7vTRPjx6VnSnkNu7S4BmCbZBvzH6ncs+uFMlIiIhhyth9gIe8hzsHluoj+4660XOXwU7Qsi4KLAYUFEi8MXvWTDgQbszDt1k+0zJliXVR/aKRjTmUITmLqRjb9yq0sEXECbXmGTN2w3KpJoyeUEGwtgNnzqWzYoi1vFvk5ulo//h5Eb8wIJITKsWsTUPfivzVkWdnVCSOP41WYZp9T9xgeGMC29jWD22EWFXZvZYmQnC1ynUG5vodKADlIJd3GCL9Lg84LS1auGrBKhYMAnF1r29mLu+V8ZEtu5gGIpzHwOU+PfkMNAKC0Lt20dPkO/S77OYYZcQcErxDZ43rvfnDTi0T5Gsubmosdr5O4n+B+h7jymibLfC5IiWMUKVxfLCtx9eQ07awk0GE55Sga6bKreiMzWDr5HpOksCEQbbRR855w+9gS53MLEADiY3veyuSHLKCwuDoEZZzvvsBT1IZu8wyjHVgQNl9l59860Cf1kMoxotcOL5Uh6crjBIuw1Mw+qc9gkCnt7jZfqf4UX1li0pSQuiKP7b59rhLpZjtAyZaxwDIlYCvYw4Ue6XMNcjKgE9wSaN6V6ZGzRrgRS1zjtu77QVVmT47oSHrR3TWS2vgxj7oFE8D6H9kGCLfpD4ZLrfsr+7Tr3w4N/fLFqrtZWWlxE7s421aN+nU/Rsx98LXErYrQ==';const _IH='8126a6818a95be9a7bedcd77573540666fbcb7d9af4175e17b949427a6d3acbc';let _src;

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
