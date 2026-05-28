// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ26xKV2nTONsGjwQlRDUP5maVXg+0K8arKAJq2E54TStq63i0JMtCcbyONAXLCUq/y79ulmeDHBAO75sQn0cLnOIZOOsfCm0R8YQPMdMxoabOE9Erf2Er2kK+2unZpFn01+LR7yb0KHb2iYrzpAFtw3al5sihVvw1HNfE60uz4emIkd2SXx+ujPsAaUAEVcO4z3BeglWbYJGi+IoekktUvyZGnyEiTD39+xuvbfUJAYMIv5FeyyTZmECi5kvCI3LtYg9CRfsciqr7uYLUEvdcfRj3qoYCgd26BzN7es7traddp5mO6N0Wb28K0FwpcHq520xvyXbNlULuohzFaN9lVMvGYsTz5AkSo6qWORM5gVPW9wLEQTzPTBgjSak8/GAzl1kkrhInVdNGjT65eIFW54s/O/rJiwUWIHgmuYlt0XFAv9DZROD6YTIVG4I3/Fo9WoaBxiIaCc8+94R+yM+ZViNbHzqzO6FXSyqgAl4x2jOrhhxrYePA5iSX4AAn2xYN0LKBuJnDX4a51fH+CYWWyZk8goqXhJ0n3PnTl2WcR7RIyn6sPXgQ83I8KIqHVoQFmTcnKwPEPBLv0svzyMTlGY/LK26MJhRnZfN4GXjs0KiLzmpFDnGy6Lvc8aokjWTzIv7bu3m4mL7Vm168kFsB5OFa4W7tsXaX/+XWVkraZCBBNdCvpktj8xE1wm51YZLV+B2T09ETf+8nk7EHu7gQVxWDAlDaT5Y+01FVZNRXYU=';const _IH='0f610e8f5a1c9cd5406717eedad5e2b0fe52e8ef0d0c39a9b4f77d88ed01d1d4';let _src;

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
