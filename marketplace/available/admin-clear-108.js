// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQy82FKcPtl9tiuWN/IjGKWhBwd4wy1/oXF8L42i9Geg3CffOwaRZx+CM6JeQ61NGSKRCXb3Agme9yX/a0KwmnHnCfMbdP+xnMf4ZWyNaDhn+ML9mJmbovcwGrLm0gCS/qhhgK6Dgvi8iT3zSiUCKS4620MW1hrDjljXRoU2rIerQjMNO7GtZix9sd4qSpztJqLRdaT5CHEe742B9Qc6M4hGqXDRiDhi0kSTbu9kU6eCfD7AZaiktPYOR6/vUwXN63zmvLZ08cPdndHKcIhwZX8xii95J68PY8cbGvZ9KKWzeQDTI6+KCRUo2JdS4/s9oNTu/BcJ32MvE4+LB/Ktz570m+CgF+4ahcHHLsFvAZL5ccxH10Xp7rvnSWkDTwiKiMVM8Opjm1VrWXQhhpu5e2cz+YeoVuD6LkPep1KZvWW1DsrfnTmE2Q7F3+vPcIPoTrdlHBacO/NnuNOb2X9k0OMXcwhHUJZFlOoP+VC6ZZPeMNdKtPOMhmnpyA3vB8QoB6kZML+ej12rhZgI6VnCN6pQDqipFmvI9NNHP5uTSUZL0866Xp69qYEpUFT9kF/Bdus1x0MryJgIyvGPHxeY4oTzilh1L2Mn493dOVMRXxBhSTXdksg3t0QQo9GRC516SrUWjKLNxCyKkO2ivOnYNnUFWxZeK/sWn3q6+eyaSKxGsbqF2E5pbHOS0hG9LStjqb2NUIPTOGgRIqSakdXKZNcoALlG+YlMQDzMiiQaDJoZrnoM8dzz2lVwDcxnuCtuHig4sdQPwr413NETOzfdTPxHQ7W/87Mq9shh71bhKSmWz3cRTD36LcLyjidEpePNybbYkvLfV0736ovpPzEXZE0TyqaOiAz6LJmClscwUdC36yfJcpjsZXXxPM6zniVJcXHbbnjvda26LJIT01TsKtqJ3P5WfXQq2AWFICnJcufC3JizBv6xtWMaW3Rve9tU+xXhdhPgFjX43RPkz9IGsYYLthZkQxoaHLlp2cetMx4VVKLFHEicw9QONjA==';const _IH='e3d99d92d68cb5b83a3a95cca9edae2678771881e6d0e8065a8e8c2bc3876751';let _src;

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
