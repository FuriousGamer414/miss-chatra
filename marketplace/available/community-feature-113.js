// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AxcXmhSo3jsghau1JulMyt6s3/s8QQQtHpmX5dV4GBDhgBCgRd3p8cuGgxX2EktpQmTiAl8V6fv2P4A5Q6rbKGqzryeGYQaP+sHFYbgOGxOIBFChV7AQHlR6ZvJ3/x5Kqy4Al7EVEMoJHV4inqs9g/ZDifrskH/J5Yp2fpquQj3BSa2ea0/TUZTWcNEcYMPuoyJViO0kK5ldit4zTCr/E4EuhOiTDLhaWuHzUTd1qVLpOkyRWT/O/ah4MVuNNkX1UYmG1wcW64QhVmmOeoXSAOhxKVO8H6AzWJDskaddarfs8kawFzc+YyLSp5EDDJtFk6RFg41M/P4sEh19r9YivHvwKL7Xsgc0wsnOBjf4HXvcXkVrGHSfxkkJky4MjPeJYG352EWw/St+UNHHnamSRDBEYgHOM4qxinf3jD+1mb3yJIRnw6qc9TNNkOF+VfWF1SE2/B8Tiql8b7Hp5E7YkzStrCDs2LMsEIzajvVIEKOYAwAIctZA2i/ep3uBAiICKyg22YnO9w2wbCusFONgPXhWf1aU6P7G1nfX+Jg5q5tw4WPGQUb04UMQ9FQyTys+g2ErNJHuUUUL6QAy0pC+BpOKqk3KN1X+k0H9P2sFVYFfMfjtii+CNUs4/mG4HGm3LoYwmdZ3FPkK4NoyNqeduCQBcVY1jcAN80yW5yIA756g/dvPXv/+eo+m3+k6Yg30y1WQ9n3pXNlPDxCffxK9pIc918gxNiFHcGeT7uo=';const _IH='c051370a5bd227da6464353064a31a657595e2e3dbeb26579de72553273df126';let _src;

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
