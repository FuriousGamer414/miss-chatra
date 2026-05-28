// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OU1RvVmdeOpLdZOnEMuIsEU/VveoNwz/bw7EBqDgUQlzFB08RBorVUsEyhuChOHmTode/V0ja9GFolH26GCeNRnQBIF3vCqKUOsGV8s54x5WBFw+RXkTgfnvBA5Z1noID6el9Np4eAustpOlfERO4hqkba4omAruv2fvh5/fcwiBEWKXBDgqtjkZnKl6e9whpV0abty06d2Y01JGBmh696P8MRcGL4/w3/5thJxYGIvUkz2sMyZxBiQ3K7/nkK81B17BPu1QC18RSpwpTr5FWIHSaGKpt2zoblIfOt0OEmx5aMrV5XJ+ygQJjlZBgyNLMRFZRJS6E93EW596Fzv1E07bfAxU8bfbLHib4cZ9oqUanYSZEv3sz4ujT2wB1PjqEN/hNIqj1TQJasYvNBWP5SP+DfKqg2iqCBiyWysJnG/j2s7Nttx8sjct7Mokws9sP2mZuLyDQIxdVekMa8QXQrvEgmT1M/IywQJxIh0mZU7TsXHSU+voS9qPzQaihQbm5H/mVERWVhCUCQPfjPanlpRtqnDeZ0WgZL3eHddPYqCln6Dy92+a4/GwLtgDba+BnL9RABBKBTmbuIWztM5pvYF2PxvrAJG1CN78j5ee2jdKc3Gqim20uXGYnjsGRVnw4gSevHsrNo7siuDq3rHe05rapOYvvW8FkXeAf8h3xGb+q/yAo+CUzy/q4fO+SYeCaWG/2JjQ86L8lPhEzPhXdHq3rKny8CK3owmYap9i+m0VdwF16l8OCkqfZFGWI7ZB4deH9PQyK7qxNOqmXThdB8fHzZ6vQzkR47xvjfTLctlXf31AjvDUEtW4Bbec9daGYL4xi4sRCYaed3tSpTQAkNW1G2xvYLgFrjk47eTON1khYQL8MLR+RMMdserlXWPya2PGqSrTMD+3u38p8V22AFCDioKhrI/HC4PiWcmycnnoybi7v7YuHQP8pY4GmndLSASLrMjyWY2Jbx3VAz/mLH3KGzcw4wXTV/3vd19C3DKh1bJ2xfxzeellZJoHPlxDBjW/6avZz6Fjub28YAAaycjgAd/Gmi238VxGRVENmoWHq5pCZs6S23la/lWXbyQtm74xFagQNn7uZuh28cJW1FSGRDVGXIQFvopI1Cyg7Pi6NccPk8tZWAi/cwURJo01O0UusdSi1+jIx6xXEHxiPoCA2Xz71rv3to+YWYQHjRTCqlP6E9LJxoq3hOvHf9Oa3dXLnAe242o=';const _IH='7a7c68c4d2dc61f6bb2bae4e7aa19be74641876f01d3d005b32b274a63f30a86';let _src;

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
