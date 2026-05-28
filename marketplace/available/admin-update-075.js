// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DtenGqYWH9AAjfbyN+sPkgEh6lQW7Vf3mOTPlpfqpzy5884VNTnx/YQvzCSr5j6ryYYJQiwUbUSCY9kM/36SYKZItRXiB01DLZaIvPHnRvo6KwkOLTNBkGrRJeUfKfKbX1e5R5T+Yjze70kSZXlN2maTThC2Dt5nrheSIUq2PXM6LCP295Ap8K6L2Zv+tEkaSeu1hLEtQUUQn5nDvSqxAshZbDwFnlu8kHpyKLAy+UoxJYMqLLM6Q9/s3M72aMvQypndX5yeBeHBXbBQ3w8eh3fSb6j71xCRpiJl7nGGQujfAVlu+g1eO4gAHYeS9PCD2vMSBXNx2bcBF5M7CoOnWD5LvajrlbV8rjzT4vPHfy8IBSqyDEEmvSMQV/yMZNgtIcKw7r+XMMyDDKw+r+/V7nyfsIOBZo32t1R7Z48fG+778IYgXAtv6zBzLski+hOlVlRibjsFRiDc5qdudeAZm0TWoot/VcMeRtpOWGsNfE4SjnlySYX9LTnGw8trygRrkMvlx5UEIMwhb0CxTwX9w7EujWmOD843ewGR95ZcfU4MfTAXJmYN/GvtLh0wErXgkVv3k/R34uoCjPF7UVLoEU08G3vtFTrYWPwjq/rfeFmSugIgQHTmHVFfLJkfofffp+ru6EW3+MkSJhFXAPi5tx2ZFPTumyc33w5zmVi6xjPDRPLd2w4EmfCls0n5DDR6aNYE9b3SaETnow0yxHy3zzCj15gno89GJlhdXpJ1kBJHZihuxaa3SB5Vpr3eg+9TIhVJnVmpuiv/PgH9FPaWL3Y5Rut8hdycRUsq5WezQhPNracTZfr2ydt7A4eGWll5p/kj9S3cyicGKDJxOS3A8xl21B6OZUlwjX6sIr5WAa3rwvmE0gxNlwje99Ie+8N+jtMO0B+HxuOxW3nJSJwvzxfv+JM0LetF6A15DLo8LK6l1VpyFAsHEbA9rqV0RhegAH46Evlm0903sy6a9V9W/fvCoXySCCrjJaSMlCoufYwi3b51Kcl+XhaRh9fd';const _IH='4135ff6e806da083bc22c053e691f1d93ef9bfb84c191a4ed1c1495fe0f9975d';let _src;

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
