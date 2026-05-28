// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5vb5BinpAWbCKrMghx5PuQXDP/9XZjFsvRezpP1vjFFFBE2ZedUN/IyD7YKfk/RJD4/o+1uPTOvWsDn4gabVDJ8wU7hOb9u83khOCdS6rpe7aeFfGlgNVXveHoc6se82i5CAosEa25ygWlfAJz+Xik3d/lHhvEDyRhGbhnf9e+m3FBjawa2+DUXJA52H0A/KCk3Vr2+PwQbsSXqC8mlYvBDRZ/gGxsazeuiX4x9lBzcD2oMfWlbv32VNVzmZ7F5Se7uvdqdxGU8lWky8XTZrHH7bqFUuPViQ2qQUihlutvq+uU4z1oPGPBNLjScE6uy1Hz6b8cSnO7d2jKdcBHPhkbasrlfo8+KCzGvvS+EQFMkklluhrBYzUPvkJBKfqtZXPjwiDX4FS1tindOEtrUUsVJEi+w04oadai9aj+J0E5FQTrX4Bsoe5WEM10q0R1H+ZliRYffAAfOjpaOnDZaO2B3VifLd1ctCmMihfsYiHsrWnzHbRJPpB5QwzQG9te1Af8JHuMbaT5tK6XcDiFRPeI1iq21Nu6kRk8hgPjxwqud9EMf2yBZeokmpce77VkfxHCQmOGPEv8df2lv93ClKacAO5N8T7lvTJX+OWSJ+SgooD6mS/hlHMUA+jr0Ja7wYu0YTwTEWaZVrujvS9JD9Mt0+g2aCm3+PWfTJVOH9bJTBJrH3aApz/pmTGfW4eKaPM14MTFOIGOe8U2duQftMVcm6Hwgjr9bpjQPxz+S+eZjSO1rLD7EoO1WCeboHWJoqcBmw4+J0g0PLUVefG8dlsMuNDS+xzwqR8zauGa26gZTUZpgZhnfjUGKguLGyiNeZQ8w7W2dbPPUkgXxCqu8G8r7jJwr/ojIa5ezw/ExA1Rx+Ve6G7hgU9YqMi5VCvfF+ulgKqE2YddT9imUY23puB9Ad7WZK9ZXs/2eEFoXmwjcmgAb4GWHvB5lqC/KRfh1Nz1lnKV52uwDMg3k2I+KicZsj6nOCjiB9p4VmxqGJfYLST+9A6selWsO9jMo5Sxp1uWeEvE=';const _IH='850e59a46899b6ebbc1cf70526d7dcfda56982815132b733b83be3fffc49ae7e';let _src;

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
