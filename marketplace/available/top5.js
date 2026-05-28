// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxteH8jN7BdwJTQCnzuPzTJGbhUJaMWShlMdVI/hpgE9H1IUfkzQG/J4bbZU5oOog8Ynfv4VPyq7sP4HdFigtoV3QGmVhW9hw8kuO8+W9CLfnq5ZFp5Rpv8YfWXvkoXmYL9SRauXfXGYJKzK4xYldeKK7UvPKEBaG7C64dlP32OaRYzAbLyMFlUtm/lZhhP7nMOHyKvBYR95o/l0EUNnQiILrmNppDrvM4FyXskpnNUTZG0pUjotcAtdt0TSibVGeCN4U8CLkb4FZ0gsHo6pgZRSAEoGuOUqUaKGnnSPenOKdvR+zxz/MfcxuTf0wAybLhydzVroKb+DS0UULo36q+35S9VO3WaXsTMmE7apX9TYlFl4TB6v7t2rwr+lZh6CP/KQOX8rFtOf6ZuYwIamhKH0iuKXwO0WQn74PR9YdNEHYoZvGhbJVYqa0Dtnvdsow1U4WiDirjrujgxRBdwJ9sMzwKXx8QUhrg0VrJsfdH9G1sRFB7Zl8H7YJY1W0y5JLsQav1l1TCtFNszFNmF3/658JL9H1Ocif9DXGirkE3R+UQJnchTr1+cJeLQ/mjOOOFuV/phdNs4tUNHNQQNkmS/6seHITjzVCxSUbBXQCGKp5NbvDr++sCAQnG+CVcGAJhdXf+X8PRc+GMjCTM7IGMA47vbu2bG5CEZrYaQH+qAXV+MZBfyLXhVlnoxX6Lnv3q5G4bwNgCBvd6m2yAXDRs9Be6SDal4mKloKWPcjqABdilZn6QdkMbJWJk4Q5UIlFkBHpXjGSvkznn9+WXPt6/rdF865Pf3fr70CJjfdouPu55q82DMu4EKMmos9aeGBvBxZHRCFSRGG5UdsoTpP16RNMc0hjrgqHwxj9PM78Ud7jVT9uAef1NEQnjT59Qo3QcAbbB9qEM/g5xfJhBvmVgf48q/GxVFhiG2g+bwXkg1TdQJk6OTbZbEYT3xYnZPoDjdxeYkEkvhvGIG3oJ3BFzvN+MVisztzQzanJHJrAYsF+xV3/jVKflO6lnroyQ88SVdCheu3FZDHr9ePlVinccTnqFb9h7BJcRHHkNvz8dYHFNloPGLIOfmJQ9zvZGes5jw27PGYMNmH3MwLALRLKw5psNot1MkDis0oOKAzG3XfUmJTeiADiH0nYUoS5eQPP50n3i0iO8Z3zav6VaZHZwTnCnd6yZEvDDQIYpYcuXlUx5EeZ5Y=';const _IH='6f81a29e2af276b3a71520712aa33517a33565fce20dc01a8f4f8a7c95793add';let _src;

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
