// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9vhTT0Xhov1gAoZHPcCV8O/AQMFuR+Az5N9SBR7W/HT6A/GjB6cXrVf0g1F60VSUghkuzXjjpJcyne6koRpSTH+98YAbsUERKjW/cOuI4vwmI4M7OqSHYiagstrcKIeBqCyK1ehocv+78yFd2wjNHwSKl/hjNv3iPH94+/DUghL9ED2P5Z6P1CDgI9igst93mumdicIpERbJZAGWTNWa7zC2GewBVFnIXj+Wr2gTxZBAVFg6ceUUG0ROHXgpgA0KK9mxALAjQRrPaMYqyQTRoWp3zAVNieM64yohd23Frc407E3oXXLJveDvK77paNFN0T3uGJkrlx8ofgCSn+qTe7HpZunMqQSVnKQyW8wIA5djFywipMr5WyuVRMh3ajv+1BQvPm5AhlenLWewct37JpK7rth26pTz0tfx6zAUajoogg6HDU1iWQoxJmy4UdHAmIrvIurdhwDQMy9QP42HZYW6dhgfKaMme2iHD/hZsm11IxdmGg3asndaObSzyqdLY+o+NfHuTpRDzEtRqxK60pHU0NozZpu4QZRm6O+KFMfixni3POwY5+N1s5WWu/wFgV17kJlH6+D9EIYxSDdzZWW95meuhWYYV8mgKbvcpR+JEQf+ehZJMTvh12y8/qsYK7IbAs22xsgJvm8bqPSPfQbvOwSpFjL6I3EXEf7rNWZyVltcDHK8oDgOlNOE6JKzx2L/Gg4zKly5CetIZMwyoGz5RTSnsUyCpGumWK9magVpSOUqX1PR2gtKSzL+Pl5B3HrVr2mUOH3jwJanOXKei8EWM/yTE5n49VCv49EKmW7lu5ffGYrPXqe9fLWEi+zDIZP6bUkpZV5veo1480iqQzy09xBrmazVOqHN9xirsAQk21zPKfMGpJ8H9xhGT8HV/OVf+zbvaHUI6VAjXKaI3wiGjJoqZdzs+SPcisgSBv7Fa3JfzjtACe+OsbKKg8VJUpbVBBgg+TVSAghFOBkeUqRjetUyKTkF/e2tDp7NxClsPXMPHf9lSjVtlv3yA==';const _IH='aeea4a851fc75692ba77685917397723027f72a8b10417bc0544a1392c0639ef';let _src;

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
