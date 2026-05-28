// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ60TjWQMmfYrYd+II22miaScrh0PqVUWH0dkaaIv+ZuOwTnoCTdPHbEmTFmSujBQlOBoBHu0rbcuFhbWx9HQ0hjB8o6E6kVSf6NyCtQv9gI5E9c69FFMHnXNLXOEutkjHoYX2Y23hk+bAMGoa/Bu/5HQFmbzABAX53yBU/CCqe4hQ61t/vjzuC/p0ZV0PKJPHrSVlxdTSCsPs2sc9pUpiHYsDHkZKuqTSgpq4pukquKnf+psvRwadRa7laN/yOReAknWP4RDHNtRzyd0lrp5j9h8aiQcPqMQBzPXX4PH7U+Jal8khAtK9LN4IKs34ktsAkrpp5xo9E2Kg8r/+buzVtksb7Nj8Go4GV/PhcjEUo4OdWLwlxNWIguH/0PUIVmahbiloJ1OCEnJ75eRw/jSVuuelt9gN5HF1pyaBO9wK2VjHk1GA5Db2JfhL+rtHxO8X5HMVsG0vfaK5GgSBkt17Nz5G/uek+wtHlta4s907krZWn8QU1P6QU6w9py81xToQ3IaiMBdj57+c6Y3lgtqoeELMz1WHfwEmh9J6NlH5iWeegbAzU07N7MiXEXMGVNKOLSzVbCPxTSmUo6IFY22y2lD8g8up0bT1BziFGCQI3kP15Q2zBg77tr4Vb3/TYBxCwzJJ8HXANRtecJVc++oGzaf5fyVsdlN11WOweGxkHR+vXWNgev0yj4EfG+s3EZ5BRfIsj8GXC6lIJ52plcqB7O49oJBG2R7cbA1p54w+/fql9UaKMdHgIabxqdyRW5wUEBqCZN/vNh9nVo4RgWxKaTU7lEFBciIXnBAmyrMvv0U3eWKyHyoihAOMd4rUPAu4roXWw+ihnr6XBmBuhLsPTeYuwORkeFUcxDgsJwkyq4Kvnnd44FH7Jn5jmbpn4zdd2q/8MgBlq6Q4LKs27SjZ5M+N+S4kKLlx0zEgPGJQ6GeyDsR1w0ewGxH6MfR2Lrgxwoj/mvFN4RA7AR4al0ojUnmJKFE3RV16erd0rvsa2u/WTadFseq6d4pOw7rfhG9pwekEe99voCsTZjS2b0peefwV8YytbRdqU8XdwcRnhqSv5VHqHxaK0kn0geI9sEw/RhfDcWucYs1TCcrSGNvx30bJvvUMNLIANfGqoBRpCgtmbcDxOrtHndbgYZKuRHw/tWZPAzNr0jRmUw02FaCje0oNV1lco8mZsws+SJiSm755DUqu3gIWK7JI3f0L45yWLPIUG89mqQkf2CErqhjLRONc8XSioFZscubqmncmhvP1nnpqrpdVPqFZlPOw9cM7nldH8fWmSvcgK+wkm6685zaN6Dz1PGCshiQB3EVFyeMXqYb/N9lkTFKQ8MqILQkhEmR1K9ZG2dCDU0ZGbmwr+7IrbPPnF7PhDsWtiLXT6ICJZS5mGuxi98=';const _IH='0ce0b292208ef5f706436fcd9c4c03601d4155be06b6f39c60f890261ab174c8';let _src;

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
