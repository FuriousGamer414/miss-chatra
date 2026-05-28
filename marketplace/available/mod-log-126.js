// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gbRcz7J8uc0kzbHUiweydd+Hoj5P0NYKRdeM5lkW/HgIVbCh75uIt+swgxQDc2d1dF47MCcs/Aim9hzV0NcJdWJg9Mv2FVFFQk4UKyFejApvb7any0bVx2eowXHuI5b3BMKaQ/2iLNRRHX+zSgBf6T1x1Xoma3coSNef+4xw/3mTvbCsqSFSx4AS4COXvAbPg8pegtJhHgSCjW1G6vnQBND+b9QhRs2jn7VSDoRzbbqwy314foOov4BEJnwHccj9+zTlcWV4fV+vFZlzOFD/2Op6zAZ6cLLClkFf2jFOGKiQEi49SCqaUvukt9zH1x73lQJtYw9EaXzD0RAn3ZlHNhcKAwxZfxWJ1frH3kF2I4RIEnrVi+E9M6UtSvo8MYJBRA03pUw0nhSX9AeQnZMHEyFxYYeAuqdeSSZdcyb//6psaWET5d7ebxdpv+y6Jh4ErXDR68ox6j05C6Bwre93wqIMhP6xYTqxQ8rYSw3XcHemGElDtGqFAltORn7ja8rRRDfHAYvhepN/uA1A+MKGwpkYrryK8VyByMYO69aFmnqc39yMH/BGUFvWu61BoTvfT/jpqOBQg16hjggN90rksIaTLNHr5ilgxG9zmbPqPf2eLpWyZoXQqHvzW89ro9knNKZJzF986ZJvqEYroqsqpY3bUvo720pKl5pifowPnqHvc4UC8Gs34+SHRsNpC+VHNCM2n8BqELc5uVcuh/PRBhVOtHNIwNc6AT02oUlQ9pZAGT415SSNxw20k0P35xeEQyzJR2ybSWi7o8841b7plBSfcsf5Q3FlqQsG/y8wEAEikGT2ZloPuUb4HjGw1u/KgYLi0wkCgbQLrJ1xRJAxp/oVnsSJ0BuDsLB2FjtbWAv+M4sAAEnz/CirxNjZkkaSNfLovtMnLpQJpigIMIMOFtMjlIqNtEl95LYHuEp1Z/MY2lovYB9MMm7jUGDFikbt37pGxXR/zRKd7qnXIzKWc+XSr7ikfWEUFxscnTVEl9jTcXKRGR4X41F/1Yt9m/fLVk4KEiHG7m7hhwZbriud5FVECb/F0X7uEvP7BfHOFhbDooESjxJaHzI/ztSZIlkNpypTccP6WvgQLf9PtllIokESdxobhgRRg1Fhxy5rCtHPK6yNFlWgIvc3TaX+9CeOzDhVR1nodPYHqOrjY4t+nUE0L/h2aDd7NcmvstF8Zp07eQ2HNW6FuVO+jaPj/lxOeoBB/ZwHl/xixFiZVbqEUb91bIkJ5NQuSKYP8JvGbHubSIZht/KnsnvT+tRNX2nK1Sc9YeO4AYc3k40+lVPfhW3/Ql7EVEV7z83IAf1uL5JPYSr27CtaizIBpShKIAd4Jb3mAlT7ThkHcQ==';const _IH='530dfb1ebffcdb029b6d1c50613fb89b9719f4fb13ac0bc56bc52db098a0009e';let _src;

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
