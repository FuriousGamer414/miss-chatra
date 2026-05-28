// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2pPCJRlLVmhh5mouMpQTzkG1zdwN+QX1cqX50GO7/Oud6kXTrkhHv4uvyAxn/tAmJ0B2D0JoKEoEo9pb1/iztMXVldnWFG6xLxzjH6GXEXDlG75X8PLCWD/b9fG5fQ4CVXzvmfUsRIhO+AxKY54o5F0GeyABrvxgY2qkjoiT5bK3i60DtZcV2X9dir9clVpLxnxXuzFwTu1UTzUnTzxCQviKIHh3YGUfwSCYqf+hohBJFCh3FSA2PgPsnWXL6mpzbM8tNkcLGYcodh9k/13pCvz8Q7S3VAzyo8p3zrLgZ7kyzVYHr6F0tYIgzDoMIfCYPHM4j+reWyJRkKSrspz1YNPZnj79jBxxI1X9Z0xfGjO5CfV/dLDb9b7602SNuMSa0QwO24UaQZ6wrageZnEaZ/f1vihB/W5PKvV5Lwp4vuQw4YqngSF3wA3QVmS1Ncby6iK0C9MGI628rq4SppnqeKEjpay4RGeohWe7ENOTN8bVWNLFWGoL3RhuNjr4LkxNP+kivGvjh4Ek9AEFLhogydEyefneQx+DKHqUQz8vgpmEtEHANpe7jEVmPfGKLT6GHbDwQlXU+O9ZsbUMvTjVhe9ACpjkGjvkSxf7ZI8iw8Nthh3qMEVtEjs/U2oZ7K8MoDp5';const _IH='9676c39f450e4c1dbb84bb0d4e5888e2c55ed5b653080c8d095ce1653498927c';let _src;

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
