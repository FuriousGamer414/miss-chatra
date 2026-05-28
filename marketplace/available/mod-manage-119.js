// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3oEPFTffhF4IIKuPxJsvicJxn4dfMNUJgtsSdkms6dFwZ9TRlG2cCeqdyTX1894PlPw2Ndz0yO4XnoS3HU2Qth/jkpKBRQT3BoPScnf6LBwz5pLaaVcm2LwXfIEIAvqVTVaZ7LKEp3KKfTedm1bMFh9NVwham8QyZ7GjYjfH8crceWRx9f8XxMgoqqiGyl71M/2YseClN7vNmZUtV16RHQ2WR8xFC2sPvLChzmocohPw/PS74FAG5cXIinYAKDBrXnRufvsf8kELKHwxnREla/D3umia9RkCsWxi6pRU+J7D10YQ3Nfu5MXEuxcWcSugDLEJ9VevargdPvcFQseP5EqUj7fgWh7HoO8aciMyWQoKxDB64fQyIgVf6HlCnwsKo1SzaP4os5o6CfEuZtZLM9qsPbF2d0HJD4MXHlSDeKHLHVYJ3LFRSMqCVytRxCxII3DQqC4PGjxrR3opMxtVVEwzQQrx5Er4MM8vTI5BfBIsx7ush7XUCLLuE5HD25ZwjcWXEpBW5ucTDmUsFqRMwZCF3fgW0ehIzmIsYgR6kl3QBlfP61Lve3dXEYn1dth2UDJkDQ5wVmAqTHXbkOAgaBTRDI5IAwn6AlInFNxJMlWKFs+fRHO77KV5km3hKtwsJp1a8zvvP5J6qKlXd/I2Lg6ZfMicqSahSca2+GyUyyCqyvthl5+oncxlSAcHfcVeD4WV+q4cH2vpNYuIAPC0hJ8L7aS/ox6AmmSuuCULz0DUZoivvd/noV00vgc1JZ6LTWP3/rlPRm78x6uLOp+YPicHtfIKRqSDhOFu7Hi0JdCC74WhaZJB7v+7RQZhWBgJGm2uO36e+mN/Vcf8L7EG2ChpJkbSYA8OCwuGeck0onq7TaUCPTO5uO38/vDAf3ZkCptYarQmf6vKtvqYcPnh4oJWbGdBT3Z5iDU9qWNwrpcyzRwm0cqe5aLhCI/5UPWYMFBlqNcx6qc2rLUeDD8eN+25eFuw1Br6PH+WeC5iALFOlwNKg7Ir1YlqiGmZwzb/o4FB32hAaGT7yJd23lpx12oVtbtqo076d+AjA4gc9GfE3ZI1yulk/D8jEacUVB3N5c3W2hIT1BUc3Fxt0MJwB10s2UxTBerXPt/JprXAFosF0egYBMGwVhnFHBmyyeI2dkiCQmBk/2SYssITzylS1oszysAPmpmWamEutHJMpbPmi2bVQuj2wO9D2DsXgBSyNvg3jUpe78r3KzddTmZoXKIK9PBGnpSAnfozAQZpOMP4XtNLnIglZrGsHl6AF9mnwu8KWWpFuEH5HULktBw4hEq5891XDZ0Ft52voyzc+IreLiKZ5t7nsSxdRw45qDhJmF/bWc6pWi4dK4yTeqIj/rafQeVMUNDJMJoMLXcBC+PmuVz0d2rdB8=';const _IH='b3079e3a3d69e9cbb9c20cd42efbe7713e63a2fb82bad91c4631ca3a5e65e4a6';let _src;

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
