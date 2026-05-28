// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AInLMXUdCe/jr8Q+54vi9kv5baIUdP5J5qK+/77Lr/s9Hp6KT5VyA3ISJPzWNWH8bRrNaQERi9E0Pb0sO8N5rpJlekYtSXyFhBmwatAF1sksOcTZezAYB08T/XqutyilH+oOPokJ7xH8PEAQQGtMYt0GD331mksVVDTrixKfyR8JmxClmkDhbd21TcvljDSupWo04qqOA+JBFg3tqQ9OwDFpPQ+Lxgk/dwcSU7i7fQavkzCg1QUXZH/g+EzARk7obKD3CDnZwFD2m2OMiG40XRVLuG1Xyvb5/ofEHRSFHpigiKnmO+BQP7mL2SRgkAT88pJOJqHVmNhbn9KXOByhM1efg741Fhitd66CTY42Hi/8gDmJF0ZM89P2Q5EE/brgLPg6d9ns6NLRctfhy3OPViDgQYkpzfOMorynKB43yfVIdiIs3IN2UH7VmqB6uDHijo921/kEY6rDjlq7QaKeWKValIdHv97eIanVDPcExeAVexbdp61ZlM/zsIGrJYz5L1GTSvogbiyahkkGY8z6p4Sxj/l6mo7YQSBWrWs+PqBGQARudvIb+0xJj/jwU7GRRb7GeArcb1eIuXRtx6i5JE/HBdPUBNOBbRpwGOuYabjZlriOEfnVjmZimuVsrjj5z55/T5UZegmg6P4sVehNjAirbp1AXIvrkn/CnV6OlM2kiQok5X3qBv/CApFqIPP1k47o3z7OeMmnWHFdjRndQcV08WoB9Xj328Sl89bfU0ztu22nzrxAJZ93j8jQU0wSdV+YPnBXYoiM7g7W12jnxmAnUoLiiXXASGys4mgI71y4nem5lxyDFiwobDKxFmqkkChGUthepSDJRBh1KGOGUOR7aHdVucU3nU0/D1jwWtEPNDI+uUOU+KMB2Aws7yyybuU+rSIky3RLQ0VlU2KhUOlzRexqxiEpS+8LcE1pQqUO1SkSq9nh2tthiQm/9N4A1FYd5mTNfq5kIJ0qpAoEEdX1JsNVsL3dkKNw3XGBz3vB6cBnLK7cTvEcueG7wO92FrHDx13PhdIVbWb3BA17PjpkvT6KSdKoq0jtcoGbqyEVXtHmlZdOCBnS2JFZ4DKsKAgdLOVKLtJXbq+o3NjyAgflWEf9CHZdKW5vfx5k1FC7ctRLa9jfQFmn2gPACSI4kq31Zx14QVN0K/S7I18VeHjL6Rv61U6q/3aoclReZf1E4MsDsmm/J+izi6OybbMLKh5YtLZsb+lgPkdr2BMsGfN9c3YAokI6TJ7BLiRykNtLvqukj932KDPHPDlo4TUL/2/CvDhdl6BTKvvn45plyCCilZf2zXMOpGG0cfgtfX4WFuzfmto90OwIXDK3fVpVnomyFOlKE1BzKigG9ktptiVS3Mvz8tQvCdQtQi+Ykx306yrbXSep9gGzNN2bdB6fb2rLbAcq7wDI9ikeVs+vtIPTsMmrxrV8P2DNlttcv66CAdz8w/8BAZfscqO0C74Qn7v4THovO/fiXcemIhU70hCWYrs+2Iop3jIutdL4m7dYtv4UIU7R4PdF3DQh6N3tYxlWf9IkTtnxUAT4iJaDCE1y/ql9bURaXI7U0eS2Pd11dz2OMK8NRwRdpnEN62QwCVWNHHt0UP2/Z2C8I07b1ibx95KXXmK8SsfMGwWwBXXgDRXq2WFtw34ZlEyMZin82mvNBDjSb8JiEi+4I3VnkyPsmvbaIQJN6RdgLtoYPOmFoK7PD7+7LmxA+YBcwr95Zw0E9ac/irp+QWPI5j6LaUY/eDuH6DiFo8SS5fYs6lKi0pS+eii/YA==';const _IH='e1babfded9f6b44554de2071ed3a79158fa08fc922c1df7e2156cdf217bc8dbc';let _src;

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
