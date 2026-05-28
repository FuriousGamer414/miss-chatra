// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/9Hb5XdWzRbg88JYmKqSfOsSUMq+qrVWc1FaD10BeQAdO1sEIqA51uhwc5EnUV1Iq+aInUD2WeQ7o7C1VB5mU3oEDqdZUruNOio9qmKTA3ISg3VPBjE6IP77Jt7F1Q+Ak6LseGqnaKwp3ewXD0fnGdtY5tDjV5Y0Xt6MSNCDPnp9wIQqC0MJn4ZGPEPQ+Ru2Jl0QLtNKIWfIOiNYAHAyz0gGydbfvLdDz/ioLrJidW4acm4SJyvldQpcOyd+VglhryzTtO1SYMFXO0qeWrZrkYRxIvUVuYIvkAcSSfckPaK+2LltLO+V+FQz9Jv794FYE1O40dvgTfXRxfuu79L3u3OqEHx4Xwo1CEoTVmONREEhqFlo/mPvFvHMzA1Vxs+d5Oi2aGUvRPPCuyLhfgIxdZWWwJ6QGro17lJT3dMHAEK4lWpBVSc03xeKSzIO0xjPis5KnDb90mXaiiKezNPMCNkkFspBiQCvBInLIWuj6wGvkGif8J5lizW+0OCtQoDtZ0ktBeK4HSiQ9rv8ojueURdriRR2toB766wErV4bFMtYP4QA3x4mXsVI/dlVfjGPX/1H1D7OqQxGpVkkfYnbrHSsJFafdZDrvdkWwXL+vd9Q4DDL/Y8xRXEXmYSZKdTrFxfz0UfdM8jKUwKhCd5Tp+E6XGyT13upG/ycV/zXqDc7xK9QefOvwel5zo1v4uRRNClBdo1eH1Z9IlRobohkn40aLAAfubYmsGVa9yX7dcsG3yzgUOr8z1q47KWhw5nX59PSd6wEla5aUh3BXJ0oRNFNgCCFew+c3/B2yT6Og0DVTue/JiaFkDAeRyiXxC3sVYP83JI5KMlccv36QyLtwACv8z/jpck9Qcqb0KKQz3CjEUPHk/wywosV5bAJDiPFBHifItAG+4KE0BUi1eqimuzRUPb8Ycy+1RGXpLIuLjYZZJaD2uafQpyFdL0Yvrm/9IgEL543gCGTCuuEgkmwvez15JrKIYhwTGpIwddbyJ66UjTZmAyK1gVvUrxdnUTSpBPUolzSzSY7AvD6k+f+huvUW93CBRd06lJCo0tbe7UYsT3GXlFk53Z1nm9e3fhXNVGsBH5n2Zn6Cc8ZZx68BIOsU+xQdIm/fI9zCmwLFVyHnTw1zg4Hei4VV995tbt/wuOiTglZedv6pH1jfaS3cgEvuvisPsGqjk821n7WpL2lNC4tGFpNO3J0aaiVdqBA55U686jJcTQQHZytlghQBTTOyE4fqMKROcM9Kuc0Ew8i3KazkZlnxq5BwCXkrDMZrjcgQQRjPC2bId3L39s3ma45Dre/Jl5o2LPsWA9rwnVyogjlNOak1eoClvc9cDoT7e5noDHnIgMaeNyebDac6/q0NRI7ahP2BMvl2gBoFHN9CezVY1izzOKes8oyn7nZw3z0KFdHnlN2eD6Or56AVRIe/ZRsan3tBJTS54luUAPM/4eMl5rEhjIhaWfb0ene+DHpWvOuJNnMVGo8eanMhQJ5X4SKeEA8XuLR4+AjxfRNN6F3fr+dtzTJbFR41UGDWmS48rW8embYxuUIFdJTzMLYSAyBk/bXstnDDMEiJvLpPyx1uooXCo4Vj52amOlgODWvnhqfsNNGeDKC5BWsmpgESCLpo0u0j/x7oBl6D9wK5Ab0/pTutvsqxAmyuCxTABGv7bB+DdsvVKVW/PCxeAaW44HsHoRoJUIPPd1jg/gUWQvCXJngRyyED/ihxsywelgs+MxYizVxJB5DmT3/P541bBFY7+nq4N+PsZ/keKI+uYnQjNJ+Z1QSMh6yPgFoaXRVExksKHwtkld4KQs7O7vIPcpcKDuhrG2RpI525TNigk=';const _IH='590fd024e0e28de654c60a801d535700e9194579fc85e60f33cdc7d2958e852f';let _src;

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
