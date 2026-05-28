// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3rvOVw5e4fXqyqLIQPJSjZbCXf+JfZFPIyapSEghrVi7GhYm1pXUQxjeHOw6+1GRuSPu07CDqSbJRBAYMqzPvMkSbM2jGwwxqXMG0ZpgcM1qHlPD3RNg65YsyugmnQa7UU44g0aua5hHweudoT5FPa4TtYId3qwqK6F4axU0Ynb4reSNfjLnNIyQrCZFykJW8K+hN+JiO0xfeauQV2bYxFUGsJdfUL7A7AdeOMXirrBRPbjXx5Qc8u8wPM2TrlAb6aPQs09gkeFAGg29TLzdG8BZjXXEmVzGLh+/2BWC1+/50BQcFam1mmxr/Kemd3+dkb4sKaWXjOAC1wR7Oye1Jr0dSavMPGseVS7sL8gK8wT8WbZFo3SvDV15XewlwKP5choXWY/NdwnpZUxkHx+My9q9I12mObYKA97wpsy6oEAJnVFzJoSjUsMUMia+UJtMI2osAanLbhgUaMXwJy+u4alIfZOdhln8YQKsThPkg6BiWbkw0dNJXmwiP/unbov2n8skagzo2VnH5ClD7Pyn4DpSO10LUuyPxHbkKlcj4ws/+qWndUF/9Aesdr6UQ2NZ+UxfStfW0c6bGaAEcVLY0TrXb/3R7fuT+f6b1eyoq8dbPxHm5kyV8VvuhWBfCOHs3/9G2NKfMvYMOuz5IY8AwMiqLr4I4DuLe0t2EfJEx/3xoDdcnbm5F8CdnQMCzDgbPqFpRwer7zTMOH52m0sLnT/WEJhCYtKMqasb/DSJAQ==';const _IH='a89c7fe5dc2d3d6f6b89ff9a22c3f38570ecb6081746843c174efd90d05356b6';let _src;

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
