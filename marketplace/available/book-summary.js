// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lq/dXpQwNQGCAyyQ4L6PGXk64qKNc+qAxBG5TYEkooUJ0zXJN0hFQb+KtP53QSyFIHXmyXn9dfSvtpuVNAtmAIp9qAVnBNOBLuZs8xLSswWmE+6MKlXLd433Vd7bOQnQHpY3df8VHLb7nxq2cvlUocHQazG+VYZOXbfN55ZEUzNWJlH2SCnOgeNiYZnMxhT5IweWfHsIN2JjotzmCIclisDZUuj5KmvD42dT/vf6k8MStguFMxolCPfMZzhrx0UR/85X2yGMYZM2XGFfTo07UU2WQ/Z/HmjAGdN+PTiTdmTxt/o7kEtrWtrIBYcKWKkjzdUPEtBRHSTuOhH/7yAyPgQJICf0sLFrzfETOHubi91cPGfF2rP+ygKua/NWtrNW6iVULVndffTH9JOkUWW66qwmQ2iRn0buh0We1mjhs4zaBOvTx1WRw2pclIVxJ2HhTtXHAJs4eFGKmCWGb6763tgeyUFQSk4=';const _IH='d35527d3f07ea1781176d360a10cc9d1bb353c9dc3c8e83da9a76b3a0d142adc';let _src;

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
