// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JdsXiONMxbXhcRcqpXybEleid5wXe9Uk98lUlNENqyKD4R3Zw+XzxDRiL6ZWpVluvEtHrkdcIItnU9/uT1gfCQ+Yj53bkiNGmyPN5g+q07iZ3FA5ZOnGlb59Am8dh6XS4SUFARuXQ2wgBkPGd0CIVOvPO7JuUjg5IXq5NSJMMojiI/fgKDEAYkYrCUENJu4wsC5KtWNnTyhli/4r7eftT3WbFvxjUhH6jy3zGKMh6JAbdHb5Gc31/DeR1tZijKY0sEvXaEg3johxly1SMyAZoxluXccapCG7x/wPQPGRDwSN7OrHxmkbkeFsyQHWfyL+NVf+NGlPHdK3dj056xNuIzbX9EltZ7xv5TxhQgDuz98MtWcLKin+S6/mla3gYMcIrF+Pp2CcAITTav1sggato7bD6g2GNbDAyv/bTg8c86JMZ0BG5kcIy4c4VWay90NtM17w0Huqh8VmX9JuMncVjVOplf/n2KA=';const _IH='6d5b1c6b37092a3b26fed7079fc175d4d70fe260ca31a3f09081f83222bce6fd';let _src;

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
