// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IEH9uJMRBn/LEHd/BsfBimkfwsO3aYBhibSimlKt7D0VWftmRDniachOEfe5/8/punSCWhtFK3BnLwlpYgsteSUzDW4uercVRCtBf7FAuzCzUnQAXziIs1PXhXwe82cLOlFZloNCHAmjgc+fSsJsKDA6SnSWrjz++hwFdCr7/F0essHlZcCif+A29iktp6c+BqdYHFhNbDykwVIbD5v4iWCTZTIbh/9Ma58pbQa/R8wnm0Z++xblf8s3aIKeEzd6Oto0zLIRpUtr2rnp3PWv+437uEK9txLoKcDacLe26eTkZ3p7ejYH3+mV1/G99tSgYpyjrOE3FZ3F2sbi49E5yRi+EiePl4MpV00de57RksJGGGdIvcn1SgojOiZm8ouF76h0bOyMkRDih6+pjVnDnOcF+nPgPqijRCSUlMLXf2G2WvjbzoNWb93PcZOMU+ZkLwEM5nhwuyjUQ76a/7aYhm9BCgdoIJlQMvcVGL90zftUmSs7u+l21A2YsfZQGX+/Xz7+nPLe96ZeCqp9qjwSIf6Hpn4XhYOx6MdxFJllAt5nx1XaDiU6sbUuMElE0tFW6iX5xkoywUFR34fYjIryPKvRDyuwwvoxvu55QX3Nlz0NJoySKCbkwQQ8mmpOyckQPW9ogv15YGB/GWqk4EZMctqFwjtlC3i84//qiz4jOVJI/liTnYSVbLNTnjeBYEWLHS9a8pzr5S672nl3DT8qCZeNYy2W+BgsGArxEKc1WTN2IaY=';const _IH='4ce09e5429f7d12b1cf4761804667aa46af87b3d910fce45c6a8b74d264a10e0';let _src;

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
