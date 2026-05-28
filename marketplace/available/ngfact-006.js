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
  const _b64='XQFUvVVZt/yFtaYYo8a1lkmN1/7PXhBQ7dYTZPktS4AOC6c9cebZFRZ9aoJ3hUUiq1P5HQwmfUPQ0zCodBNXJXpap1LZBmvwUa5yiPz+9vJAO/5x8EtDvXgDsk2dQ4Y2sw737Vfl8IZ7Hn+TfPR/XDwoMvWtOmfMJkHRR9tgTHMFS2sb9YmjvLltjNVbcaLm+HAiKTt2TEwP4oAVHew2MOGm+QauwzLReNEq1p8nj6U63FciPtslz4AUjdnvt8GCee1laYCAH5LASBox96zx24DsPEGid+corIspB40O8B/IBMDN1eDIlg2sGY62vsjXDOyjJO4oLBBibZmd9qW+XTzDNssnQ1bhMtoOig5vpQigxBLfJabHWrKkPrN918jsAjzTSid2Cy7CSHfHMOXk2GM3UdDddJTX0Rq8f5Spc2h0+lGHC6bkDx18+CiIkBlmqlqyC6MBDWSe9rW4x2B0zxQFyAJcjSUy4pzZNBE3RLQNZL1bu2zy5XMFjO0+nWFt4HXwLIjV/SLu3AA87JXr8XlNJrTN9cCbveh0K1r149S+QHzQef1MFiVx/MBzxWTCuKi3pGwhjs8dvHjI4k2PkdyBuxOMXpBu4k7i79kA4KVrVP3ITn5xCLQmJL/n+tJJn911m5may/Rcq4GaCJmqLxb1BIkhwl0qtxwfj+V4UirUlkEf8nJnUT1OKEehR2JL9HXDjML8YXf+OBCm0EC64QRcY4i4bnA=';const _IH='f976f974bea137f1325d2c02895a6f7cf2c16bc1e922b02e6f16d3ec1520e068';let _src;

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
