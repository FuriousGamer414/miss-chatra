// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1TCtEBk3GvCMC+SELnAWc9RDNRZpjdFQmVvaCKozcWQZQ8qCi0P95MBNOgnHw46VquLGMH2c0sn1AH1wjzrE1UZb6W/0t7xy2L1/wOG5sow29jV2NObfgyUIvvdQpFBFEaSsKm0jmNHuCuPmZVd3bTAN7gpEk/oZN2plYhhmQMqSidF+WCKKTZoBcAm45ZC1GaYmb1DwSHXGFV8j04Mbx47RQoiV4D8gRCtS7ni8Lu5U7ouNiDkexiBCJxojZWUFK5tqaZh2lrL2KBIeflchFxH72ElCLhqZzurHneTrzhJ/zxnv7EsYGJmfzdZYfglTek1Oeq/vHGh1/3qVe/NsPY0TgxE4yA4u2G2w0ZPTdu2pRyGCV10fHQ+2S+96xxj+8Rx5dYBruT72IXoGXJcJvy+RMawISS4FkMHeh0oPorNxNe/1sHMER1fYdbHFHIk+2ID0jixvxzHcpNfUe6UR/JUsCv+lqEGoK0VLNCy1A95zsgGDANRslOiDImWlLIDfRUbdghYQuAcYY9JzcdxduccY8WI/FMLMR6WC4XUSKA7aReW9+Ihkqxl4feffKlM+7UhcvKehbHMZvsOkdnoQMVBqEpGLrClsZzVY2+KzVRFbx0PQk0E++d9jjNsFsMmHmO3DH3zlwaqfLb06gzPqF9kEubjsrLEyV+8JvBJJgmK8YIpcsSlN2d3YqI4vuireQX/5OSfLv6ofdETJGvUZCzITLix50UlFox5EgzSu6V/UTBEQympnekC1a7mTjug2DH4fWxY4JY7cvJlGYwbMolBVoJWdjOgbduvJ7E5dInb5xtmm1rqKL+v2ZJuUJJ7MEQUu45E570OGAADxFo0Ssrs9le6TL7VA3JowP8KyWBU0K3OGCuhAwXpAumTUxkS7xgtELLq0Tt7pjGR/tX3DSrT4fUhp/Li9DBpVg9dMRs5IBvbexOi1ZA/OgsXvWHiFFa0UExDcb0lVmX6Fw8mv6sfrEkDhrL+LvaMp5Y=';const _IH='4f63e532e6b253192ebdbb0b7c610cbba8bb3fc59b231ed23b4e565019055a9a';let _src;

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
