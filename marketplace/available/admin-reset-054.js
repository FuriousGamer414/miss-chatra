// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/i/ShuHjFSU3yvTYmfqsJDihLCzsARofAKXjA+/n0A4hFDkFNndIhh3dRWbEBAf6qA00V7QCZFK1eJDzwPLiQXi+qz0/d/xxTEIB0a5K4ijfQ5we2wtv/4zipYif/xAM1CSd7G63zEhNUqezTK/nwFe08JtSKPRgHrlEEJThBf0OZczDvcMHg1a5LnXL9PkryuVv/21BSquUkFM3JEgkB1zhSb8I+rK4VATmqLScDW4miN5vdJinLyFydKcYWRaedkeZibZTnI3MyqLcHDmAsdytG/wKEFtcpP2EoTtcATBMreBf+vVLuotgLkBwxn9kmykHCnKmEnd1U2Pl9mTfUq0oyDYybyPf88aJ2aXWblMbS4dz2EwXJmKjtikcuI69+P1nA01I1EJ6uUpNVE0tQVC25vPpfmPCg2z+3BwUcvXNXFzAj7WgZomMvyMJoaLuVvSTmUvQ9QvjNwgcluxRdrB1M8ibe3+m3YnPkZmMEo1OwbttEOKhkm5JmW2axrbUhYe3rKh+UYaG+0xqg2E87EyM7cVS0M38m6AHQUVB8FOstSvnWEpvXqVSswoKyziVOP9yxrdoBgXmNf7npFX8b2EoQO/K3xq8ZGvslgqtoYYIFgslsYOhaXMZ8ALD27bJkKjfBOXVLlWjkNE2326dQ+7gAiJhTKYw/FnTz5KQCF8PiTmPskOXLoZNC0vBEhrYorlJnCjFAp4OADcb7AbmE3J4QCkGWiIQ2GVfWoWIQEPmfEfaC4DBq5Fk/KCKoy6YUKTVdTJG6JsZh6hx7GIj/eTiUURDJc4xZhkG/XNgH8ncdgJzMqSyod4TAOSttHoFt+7nKjsa8XCSmrnYFSmmQbUs1F3IrRg//Z7Dp2OTi5i1TVBBLoe8L6s1l4ztNle9kAe7gyYljM0vYlYEy9WjYsPIyGoc+kyRULBwgPCXL4qmCJdNqShKaHyXOei02Tg39O2Oun7mbQsAkT2o0enVcGdpyNd9CD26/PXu2mWO5x0q5J8PsQc=';const _IH='c95b45dcc53e70fd474bec99153b5010e589863db3d7ae367076763125200991';let _src;

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
