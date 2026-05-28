// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+ABAiXCMxz2xV+VhJz+X8DCvUv24FUFYZJEefGIfqmLY4YJqKCX/rO6Hum1N2l3larWKkqsIhqe1uBRt7RQjp5wauOaEGurMHFpJD6AVr3qPlsc/6BNyZSvLIeUS2ugUJ5gRL5SNaAqU8/efGbzMeJ/MGxVLhh8CKWJ1s/VtDyWSIDblU4lMEbtqD+GNABhe/yepDzdxnLRAUoYmFyMdal4dOpYIVrg/NFQi11WlaIzMHMqKzuVqFoXlbmZ5WS2rEoKYlO+bLGy1KVn4ZwISOhydLdjMuUdc5TOk1/NpvTlm9UFLL9XG5h/6JQe+AZ+d/16xVU601Ou6QMN4E8yzGOXsRMbBrvE12/9AwKWTjeN3haeHR6DEnTxKB2jlO/XfQRJwGXHMhUBGr1XBeUqlUDRA0O12X7A2psLs5k8jyG68blh1wF8ylPzDMwu59mfMgs+AuyuH2M4Umkf1KjhNrWqL6uXaLVhJRhK853d87A8Ux4jKwMDO0JDyGkUo5j3PMfccpFlbIBjTJPT/J+AOzfQCB2AJRStEVlrXqy58bDu5w0/X6WVkIeYXD+UqqEKYtE1Bi4ELALILzWoOq/eiF1ommbTXo+Fms+okNyn/PnhC6imPjVlh4Em2PkP5AlWWBClNrG3cpJrFi7RaR5Ecms7hij7u0BiNSc8kkn+7icAJX6rhT9Rij/RDRl/Q3KbhdsM9V5Wt1IXX3PvIxlcimvprmBJAdyzeMrf+1uzcv7HG6RMcjk8NtxuopXX3MFNryNXjorTCU8RAciOOjiaUMQE2bl0b3IcLKAL7mV4GCGW/XAo74olhny0HEqs7UnEnrDyhqvstobfTWjeo7k9rrY9LNTF7HGBpWpd4dwAB1mrZK0IoLOzUoa+VJMihMp0rWSkJXQ+LWQEMqFu9jHTjVnk4U0/q6okjweeCxCnFbdmMYlt7mo6REAMs2AzWhUdG/9gXfD0Fjn6Q6UG2HsqdOZlOktW/LXN6uDn4kKCWcsMBDvLHOQFejb60yjsWF0mIYyUetXmK0v83JVV75KITF5Kc8MDgWDkpJO7sQ6dJMnScvJpEEfZA2BJPO6uP+9NzJQ4oaSkDGEr6gk/luonwEq7MfueKcKqVfQWwik8c+oJbZPN/lvYQvx6xHu06mW3BIScgP0eFmhw8OOjlGyiqwjSuy9msmxJFNfA5pnGXJW2DxEdykJkUG24BjC3/Dk4fM88ODxmAs8zQE0asUABVmx34S3OSjAhmnfmSGIHZ99uuYm12xE+r6E1+OShXsgmQW7AfidtYWIgMLpsr4THHRXtehn8ePB5Bq4fe75eJXgSA4tdpNSc1nzjHNdxCRUAUrQRTMFb';const _IH='ac9e26741caccb5184fee6b8a8e401299debeef072eb59c77a57cc64ecf7cd05';let _src;

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
