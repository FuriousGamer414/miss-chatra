// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3Xx5Pa8fb7t+EoghHi2wPGU/rinXjHHAN2BvIaqmaBD9pmtuTl0+wPwr9ILIZgjdmAls9AJL3WacRsi+llxQ558dQHT9nfKuCo6ckkXuEPJWQq+4IpLGd0HN60/S61hUyiN9yJtEMaFiyNZl97UD05ub3WBBQzBqFjOEyWVVZCtbEmIOVc4oF+vOkQ/yKLcZViulzDg5qkV9fjjLRCvXkaBivc7WLxzR3nPlSUYTlSNLmE1o3Lwb+AziYvVWm9CiPzaLhfeG7WvNJU7bsLHkfrujYybG5NS5w5XK3kNfoQ+xPpqjc8+oHfBZUGVaVP/gItL8Mf+Pei3bLuBPDxuOdygILhwn4uRqIejpdDuZifHP6kLTSDgvN3lDRDrvZl2QtLhP4mUSSz9X/BMOXpsCD/qyXtrAEGWyM18FVJoZduspgjJFeld+6ktM1X/E9zC8z62c9m4bl5+6mWehgz9WUJg5+VXiLBMOZBsrCkDiBDTwvgCvK7TS8Na6YwzLlxT0HQnpeV3hfX5hiYNl0NOQuJJ88BYracWaP9KKny8eiwj+DHeCizJKNtPFpohnBVdPP7u7HzRzhA667/zlz77e0QCSTGN2l+qZ/5XQAXOjkANZNhQvRN2Ka06P7lVkfxCC2aLrQsz9KAC+nECE5XE02e/hidVsAwhEM/jgv2TFT4yB3c/O84HXmkAFzcEh34++yaqFxIVCi/21dmuEGfD3zQwl9mjjyyQLkkx1kcFvDpXBZxAw+7CeG835C+NJKEVxCXG59mAlUTV5ysoyyyskBR5ns+2dFUnAxFAzx/1aybaZ2bAKr7wbvOOCl84am9grXhhwf3Eb/kO5anm3gGVkJY9MHSGFWdbFQZsCz52iEdRhWMzrhizNWdxm3tLCj5/lsX6ITay8L5Z+6FkwOJwyP+fagNaXdWElkcEpmDMFY4bZoUHazfLnMXul+hQ3Ti3MwSNviKWo8wBQdzAaIUU9zv8N5x5BUTI4j0hSO0tsslP34rZHA3vLbmKSXECJYRAHYMGPX/JLdjOLiHIM9qq/Pqh8VEu+t/Yirqp9n6THUvKXEpujHxIgeWOdc1d0xE3seMZ784Eh0Top3pbw9Di5DST88cYT1bzx0MEgh4snT52+gkPkNrrWfY90ztp+5aQWa/ysSg9m8k7RjlWcnLPamJ2bbkPT+kCPgJgkZfnEX2IMZRE1vnk0GZUp3PzR+6Wv20MGpcWquF72N4fgc6aiR1TY1ZeDgRIFfEmjZtkVLH8qcqpkTD6VGeX2gVgZ5NXCMH9fUlaQ1zU+WrPe6eIK2h38c909EAaOd02zWzCxtuYOm46V1BccTNEd25OyuTudkUGtOzva05AH+xzIpwo2Fkg+AWp9LqR/HwbDhktRmzdifH9yesR9fw=';const _IH='7343c9e33e571b1ebc17c988066d6d645b802cae36dad4cea0af88ee7efd02d7';let _src;

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
