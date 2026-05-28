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
  const _b64='8c7xo3uLRLlwRJ4yhSqaexoZAJqvYkJsf6sdLRZ51Jz5+z0bi6PdBh5h+2aTk4VoD+1Sw/YXW0VXFjSHY73V6/bWGDPK7wui0S1EuUmOxBrBXV9XmsVCqM1bFCuOZ33TdaPnkqPEyU6s0ARhdU8wz1rLPMVzB0dLQc6V2SAgp32NCdrV2IfkpdPfuWx3pKloGGD771k5lXw0PMa7dvUptaSznnTjcBchoQ0sbmmX1irCgIdoIK4uR3e3GzI0qFkfig3qEArNoSkz0O23fd0MSbaJZK7aYREyhqkQo5fz1JW+/FMPVJ2X2zsjvqv9EsVZIPd44ZmxfEfe17z/FCgVvA7Ne+cTm9AykJHJ8hJ9Era7TV+q1LjdEX7id2FSm+t/0HkoNDZ8D0yXOiJ+V+3dyjsEjpWeojdRdEHzV31KYnI7z1aulbn4YoN8Uumu9lFAvVwGSbQQzEepP43jIBg6Fng3/QFpf4tnLB8IxpHr7vBmBiJaaceSO0DuqXZnmYgKxV/OrotC/55nS1C1ztAI4Kqn2/hWmPLMGaM1u2Y9eJ/5sf1fuvKOA8i81KVCYNMPpa38381yKWK0A0Ba0r4MvSOLgzKvJaviEADpDdyrfStwpct/Mtz3D/vgxuL0j9SO0564gbKU2nEfbL5eAoj4gviF8lCx/ZjPGGiUrVUCk4OIus/4QvPYPGLJ/lWIjor/bTlmdV668cAt9Kk3gx6t02rw0zSWYc0H';const _IH='2e7a4907af46a67da277e5902f3f1cab848b84783a609d5a4462180fa37c9ece';let _src;

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
