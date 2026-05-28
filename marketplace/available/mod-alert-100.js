// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzHrUI+PL3X3BrYaB6+6Rdg6iwN5D+IUsGxCaYMVaFJDVgdlwyUBJaGP7eZ9uE0DoFUOJ1oR81LK9lKg1nX53d/9+PPoaKhJOCyHZ4eIwOIhD25oOD7phaZElIBclX/TkHqdnkD6US0UQUE2kfFTm5GbLvEG8sNP3n0odx+gM0bPXMLO1CPoPXpsBz5C8vjRAyLfVb9GOZVyL+g4Cf7/oIjdZPtrxeRTgLlA+BlV85YBDW2Ef66qPnxq9YPuSKS6uygihYQ6c4h+b10YzDo2ZWvHuKKsoSTD4U62ed1ZRXlNxxWcZkbAeGwGt7QICSL65lgBFM7k8wzgChhFrPDkw7AcSY9reOUJu53VRcM9rDMIv2dfMUqOXRUnYyPYrQatdKrIVDoeK+OjFlazOr1e8sVV+LK/oCNs7ktULrkIshQUccx4ROxePAG97xsWZ3ZoX04eyrLszpVs4l211OiZX0lefeTmRlVdSXEyy2BhzdrjgJFITAdc5YKbf++0F+zZU+GT32YdOu3Fnf//bL5dE2kx40qqeW54eu52qXq+QF6Ks0B/f1rF3kGLlGaqkcRncPDwKbohRf0wiOnfebyR45L+0aJjGATgrBZNFlSaSdDK4ZvEwfWDDJCx0rv897igBKSNtJIpjP7nvDG3zyY3SR47axdenwvOqvd9ygiZG4CujJxSFGXy0DelBO7Th2K+nmpwYZb+JPj0yr6NXD6PKEf5EJUWRfE6qztlVQvEdoHDyYtTdTAaqV7jOdWsuGs7EDz6/1hN3JvTrQQaRctXesPY765X65KWbaS7PREa9iVK/sG6B5Y8INdDy/lixz2l3vDQzP2N0pM2JqzoFXhsENi2GWlSd3+O7SCckJj+uO4QYM2T93RKkTi9fEv40r/f95zwgntMPTIT+3qn6ytfqRonFIbJy/S5gpDtFlzAE0W6YcExHrbYO84NpJxFER80Uw59Zuj97WqzYkkErJh/e/li54zUXigeOPx8ITwlJyIfsUL/+p5amkJzE2YMLPPgMVhSbRzlwhoUfD2rr42rExWV/EivAfj9L0Vog9X7aMHA7T+kHdfMmQ1FpW+DpWCiacMXgMQDrGpMK/NtsgcPcKiWB5zl+Bnu0E779pgqj63nR5g/fdtvJA7iUDFh6nPKaemOnL7EgDSJcBdcRUlf73Bo9fiMTf8r9xezTqHDgOgmBtRY/CYEUJ7vwk8Ax8naekbwpz7GEOBbp2AKbc+wWGwf3XQPZW/IHinwRXAhjEMzOL6b5FPxTK0+8UoVPh86FwaHkfodV8+YiirvERaXXA7FpQedTA9WL0jH4m1P2me4Bd+MGdP0t4bWKAtLNIm2wrwYZvjHHGarunQ+i9RuikkFM44BLvAafe0M1aCCrw==';const _IH='6b59a7bcd35afeee619eb0fe9d0c8eed661234de1e7d7ea55b665a2c3d2f7b4c';let _src;

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
