// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzV4dYzZp8qkbNnNxP3D2Nhu0YZHIZz4Z+zwW93JtNbibWx6k/nXJ5pqlJ2ivCFWfySRzbR9UnI0WhMvrEIfhxTtxcV/a86CCKzoj+idmxSssk7A8sGgf5zYmadUt1d981uhR0Ga3wq9iWet3WuJrCftfXT1drvqWDwp4pwsyuBz8C5Z5rfF5v7tN8bXKfN+6cX1z12iiV+xt+1V1LpdMdApMIGgOnJoxu1sVwKHHme4ugDFYtu+EjQkgInOD/hhfCmUdw+RhjLD0apj4MCmbEgkrhtSdAs7UhTWJ4hLR9DqIwS6WKQ+YDHrgScjM8qge0ReDxxAGiRI5zGcNwcS3wc/wr/tXnXo7FJhMlG5ne/wGML3SeaSPGJtZ5a1mxAf3ZkjlCHyDez9Gp1NIWOdekR3FNvu6Z4Pd/jwHKIkYleOWWxkEJqD3fZenUnDZ1T/g3Avx0KSL/7CnoYoJkhoxUUuEsDgGeBX5JftxTcz4glCSallWS/G6b08rgFa+1Amzvxwuc79LlBMXnloHxhRE6gygG78CBTzYX3EGOC5BI2ZCOlf3RvEkxihLK12BTCmrXN0G3XWo+M2Rt/LK2AVSlsaf0xg3W4GDi6VkKgRzn39YLMWfULOsnBTtylRMw8GEfV7qgzh4CvMVE1v7mYkP1lbulQ7BzQ3ncntINXqqmk1vd/NJS3xN7tWlnJjQkFsUFCH+K0zaw/VL23Qq7etUKtYQqLWIPOR14QzSfG2ZoEw56K98kJYnjJoo3iLwsa6Q3BjC0enNTyX8kSKQ29vUqEhiSyBwwVlZiPAL30ofY2uGpIDigRiauzYL9u0GTzMmi5oyr/Owi6eAtqqYzKtkqfPi2JGdIY+KgSeJQtEyWpyLLaKOGwKYV8hlZmq8Voft/Bgv/GJtPfOKIxFcry5T49wD44no0BmHkS6Vmj7P4FyH+axZp6gOYO8ivKWJlCydBUm3I+vZXcHB1ts7tTuOqp0P48vjuNqhijVxF2y2Ha7IqFoGW+tSb6ZpxEDGZRPDsFAOVCePqU6GZj4IWc4QA5M8svzuvX174jUFoGKw8Qqa10siyNsWn4Za4XD8NgRoxqTaFtMCHtAu2CuY/IEteMZOMyjLb9WM+66r80suGlzNzpvX60mth7FNnCEHcnC5yeXazu5Mp4THUeafJpTzrUp6dJCaqyKTgunqUyePndjso23jnzQdIJsrFc4Cxvhz6SrR1gqMXbvpAQN6A==';const _IH='28a5303324d2d21ef233a635f1286e5e004b7a6a7e3505a78453c40b8e3a636f';let _src;

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
