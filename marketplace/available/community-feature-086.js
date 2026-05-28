// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RZLR+euDmSgeXlyqLRpd3l+6ZSODPy4vpon0k2s4VKBk4tm6MTT1ITUBh07p6GVcx48RL4dssDyZMLBKeCEOZjScOAlMF73kK04fAdC5Rf9DTgkoEPQcm9Mt8i+FXTkQZyZtJTn8RngEtLVXdM4vQbPhVLaSo2OdBkD/Txc0mjaMpHxdFJzAG9NNkGPrMM+i1Gj7RjVsksrvVnvK2+C7hCKK5tzyEKyt1WLPnJtI6cU0X/HfY0R8NFHIq+1YNV3rEE2MFfXr2w+UMa515Tu1XK8lxsRSBFmOU57iLAKRlgsEm342ckr0sZdHFsL8QMmCHdE6lSyfdS80b/gIvc3wD6mVIMBR1jDZgonNBfwrUIKcqRp8VQ/3bFVRXVD512xPQPEKBqCy+YTf/CAoisHlF7gP8s32GBUeFM7ZcaNB6hj+pvghxiHwCH4iKJz9lFUe5O3PG5FkXyunwIytim93/zjPSjnZ9xN3rAvkIOZlNg0S6Pl3FXfjUj4Mz6av2z6gA13q4xVOatQ/8x/KxtsMPzMnTARcTg57Qr6xqZGQr3ETCKKvD6iPtw4LGXxR/pa0LG3mwfvxRWvQyLpXeCUIIN+53VJJ5UxrFcI+sBkwKli6MoqV5x6T3WMwVRkyMMpYFNuc1r6cw6zkWr1wPuYT3VtUT1E6ZwsLQSEXHuN3bC4QnR7tnbupUKgBVM+W4ktIhvgRZKsN56PD89Jey2WrQvK0/xI=';const _IH='1340dfe672ea5c9be1a39d776db786011ad62b549bd5e5550aa383dc4b1bf0ea';let _src;

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
