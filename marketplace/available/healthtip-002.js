// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j47XDoMFln0hOFiqsZkN2ePCgvJIUULCyb7O65oDTx0/yNfwfdBvHY+9zjxE79M2CkPwCHyltBUSv8+qrqrY6wOwuHe69AuE/Sxm04Qe9uy8S3QaOxiKjMJ7WdFN82gT/PD1zpgvdNooHcKz6+gMRXwzKCSArUIq0S8WCRinOXJSLYmO9EiM+Pp1Me2PDDxt5V7E0zTHHfZft7odgyb1w/lWnUPYGO+FuUAp6cSiVXrqUIyhAiGlCS/+36U2P6eK14MGweC0wVmUllGl7FMWfT3IlVOcC8QrvOCKc/IDDsVPQeUEu9H0vcsLvLqf+xZ7BTaEe+8a8gtDcPb/2HLLoaMQZhT/E5hxpnErN1aPwWO7jTZH6VaBQibpIsq1Botz+dO65frCR8cRaYmgZirUz6iU1CexQ+AQNcjtzxZeDV4UCByHkjAq71ouZbSZEwkxijWZ/Sy2nL68yHAI6+GVzGu4MMCsVAOb+mdtQ7dPiF6sI/Bjxma7Z6sApx7ym2yVnFGCY5IjkQEV97a3U4hD+3ntcXeFIAJuTulJleBYSkrvddGSHYQQ/wzFThKQcT3utTlItdM1jgZjSAWaThWdTkE6pH5c8OuDKEz/hPHRwsMoIO6SfWin2MpWj21L8xA1mxgT4bCzeGsMuFSPkw4GC1UvJ/ZwA0XdOTooCUnvyg6tJcCofn90vhkN5UoEAc903MWI+ZJCkJKpyKdCpi0aGpXyTkJhNIJktFcEP+J13tXg7VaS8EH2nuZRHD06qZ7dfUGBa2dKtTrHaH6USL8HpqG0CEf9tfo1dP+tbDDfKkpZoFI+P5fbAcGSQ+LvRK4MsP2runmtXwHNK30mE8wLvpRDJidJgAp0+WMTKaHfEL/GXPDgD8vCEV58ubs2paKOiytmRqmHg+I82QMRaFSA1j2A9dWeh/KbmHi33AWqIV1Ok4T/LnFGpg==';const _IH='1e439853c13d5361792733dfdb79b22251f3d141385b31907e7257c48c0e9b03';let _src;

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
