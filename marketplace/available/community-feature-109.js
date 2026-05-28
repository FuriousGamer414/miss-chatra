// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwhX8ETlzTuo8KsVIme0NYmYZe9+5+rx5m0SLgulqqtO88+5gJwo7syHy+Bb9aw26Q060ZxOMg7GWDrqYG1vrxUW9ASufNaiRQemQO0Ufnz44JckzO67UBoaERArbnR2rtTQ6SfxQpJV4q0FRwM1ocKIUvSsJB+5SDJBBqwota3nDH8NrTBurImoN3sz9ks/+yeaPUhI1F0pv4t1zPw+XmdkV1LPcZS3zFB39ejxXYcRLGFoiGPddAVsTKTXQJvB7sSIXi0WncZf/jgbF7dfSTHh0XJ1VCixnGMWw84/5uXrXP6Nnh/g2rClVG75EiHvD895eyNCWF/Nr9Id3xSYsgCU5z/kRSoC2pIYst3Zm1n4DJReX59/DunRmPCirfEVO6AUxD3pBrFx+zdVKqjVqOTYL59YdmW9caxVGkW0DcWfdYHEYL9j949lT88iH9osa/JMpbnGyqzxyl/C0VjsovjHhcQXCGnx/URa0Tp7lngppb7iATYZk6N3hnyWYoJ3ElkwqXA7crhAyB0KLAU6ionZoInufVWkfgcfMjkSLZv+hEGdb+1/6Ztclsxpr1Sr8wsfaz5OTpitjjgkoNM6mV4L3e8OSDpSOveBYmRkkGVzbrzM99je+2+3DQNqOZ65U/Yk0YBAqZyT08IM+MRNVqo69YOLa+EA4t43KhddIpX6KPj8z37QPe5VoV+E5ajVFCOz2EuY2TgEzvId4K8NJrTS6zdlwUiaKb5I5vWrT3K1gn2Sv4+o';const _IH='cff2c5df9c7147fef65d63514b389e753a2d978ef990c2b512c44baadaf50daf';let _src;

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
