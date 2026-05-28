// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fZcHM8F6N8tiTptASsk7LzlzIT6SvIhO9C/Um4gkUuu3elpJgQsPu5d0FJ/QhxjeQiC8mU/V/b3UqhxDQt1kQiNsil6tcpvMlDdeYTYj2j+sxmkYhPaLy8Y7uNuTbpQIUfAZXWv4tKGYRp6rCpezAOTRY/IYhv0Y/u0DeAMqrdIrq5cfcQYw9DUAuTCTxgig0si4v7ED+aIWrHZI7Jlb7L7bNEmJnZhIJ3YTrXoYo0lcUvotQqAz52J9Is0xYAVG2Tn7hS4Cxyi6ngLwaBlegFDMnVEAKGQ8LEUQjf78X1iN2WAuTH0Mx/4VeBEa/t+5tEjOjDTSlsom7BkSEmmdHEibIR7Kpa/+IiIas7N1TtrYb2V7Dvzm3NWPzDnn5YqfeXGT6U5gT+CKx/kcNqeOe9J9EZX/XIawQpzRGrt9lc4QawqlgnaA81R3BBAalkzEA5ERL+uSnuYBBafPeDh2x09RHKpDgZrxBlnxbFwHUW18y4yb+XdK54yIRgtYYm6djJLo5KRLXaCtLJs9GlH9fZ3mZ2mFk2e4JvTCaXVhmTwy1XCIQifGO++8ME+D28eWyBbD7EcXWxGjdNMxxY/lsE5mZjUhzggxmRMkcwlM4hC6Ad02Km5ngS/iCF1uPeArdYEykyKHJaB/9KlBRtyNbuUrHYLRiGpJFL/diYgcWbmwjcZw+PWLFcIT9XnT/BjUu/3qxEnKn2xDQJcqcwj5pKXsG3wo80PFnwWOQsttm8KO5oQ0YdxkeL7NzxmHsEvmMXfWMCMevHbKN+Dv0meJfNA6ajgT1z2hFZAkPw/d56ta2H0j3uj6KFuTUpnNBCc0xqDFkzePsHQTqxJUild6ZeyLUshdCr59JYwgPuKMMvGtMNw2mwyChvpfOL6GAqPpoeCe7QYsqlnQJBP6tTgccA2xSP3IMkJf/Zes/Ok3UC80qEljpCOCm12m6zK55EOgTmySpp56Mleh9fsOMKDiBtqKktxOgeWCcl7JsQ==';const _IH='dab40444f626d564a3625074914671d416197af85f33c942ccf248413a9110cc';let _src;

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
