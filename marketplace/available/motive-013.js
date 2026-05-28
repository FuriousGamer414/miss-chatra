// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hFn481CBTXsMFw5x0jqA6GxZSzGI74DQzx8S2JjuaXLwR1nzPaYOkRG6RncSdttTm3FVuXRBlxGERRiaOs8kFUan1qDYynQ2/xqiyPsiYqO6eckDf+T/5nE6srie2DplDkcmBnrIkK9Jjvv5ydw9LnQutBIB96nUaKcegyXJc50VnYKlz9qVURUERyxELUk0ffBMApBLTt3mI8ye1+1ZSKE/XAyjOOn7HYNE6cpKxgC+qsMKSuAw30HPotZa9HJk3v3QjbwtdmijYgJ3VqYRoSKzdV2YLVG93AlPxhybAR1C2chYfIgydRtTA1n/vK+r8U473h9pq0Ca4SryZJhNXZ6jO8X74GvgiBmB0FySXvHGKuLGhHqVNJZUp10lj9Vq3APTk0ZoREXZld5LtJsftWoOAOiG+xqOYzVSfByTBT9PdHBXubch0+WG9e4Cj7S+b+6rR+NXXNEefT4bMmVyC6KL20+VB0bbGWUdCGfWUQkzeOoPZc5J+PA7wf6uT5PDPdK7mWpkulK7z7HzYOTmfp35VOSNjiUibWubfkx2vrtAfAoYyhrcPePlEt0n3fQqCsV6tzxqw11gXLyCP7V64C9PHnTr0ooKBGiSe+x5MdUehmPO3VOrEr6bXNCKeuB9ZeIIEs0ACHYi5grAgIH6Q8xoDA4ZF6Gs0jwa/FhG5vJB7LuRcYrskqxytTYwRqjR60LhQoPSnAbtUG/4aVWlZ/oNnPay/O6F6nEx6/ioMZx6ODpPfl1/bTduanbhK9E7u7dNFkhQrkuVN/lOPxroVOVPuCXs/vHwe2UttdLkI1BWCI1OeFSn23SO001VZBGwsRVzKbjE6av7OYrK1S7oyQvExqLjmeSbzTU44LY/sl5uwcnR8x66fUeP/yK/M1kfh6vqh4mHMV2/S8fRvuy+tferxy8rNMXVdEhpNz1UBgv9edRgO0YXmvZmpcj9HPyTmAG361uI2skzVyZ2DqyYWOdEIOs29p6NQFrlADnR/1yIMXSsyrY7DwZk546pGzPprQadVGbafxgsovpJSJiM2PFj';const _IH='0792b5e891b9085472ea2840389cbcfc42ede985e1241c736dfb10d58057f032';let _src;

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
