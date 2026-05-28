// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bM5YSrjlNaHfN9eF0Vv2EwwZbCBzcVq1ZZE+D4XI/Gl8FP9lx0hXFw2ZhXLg/9/xmGWv20ChC9nzGh5aDVpogkq7Ic3nLp5OXDON091QkeIuds5wR7HgSZ8g7H+6VTa3G1RU3N4k18dc+LmMWSNCszuW4jLhO/Cw4w4tXnezfPalxtebH3oQzOmR6at6iEd0dEQYcz7ZnBRjYhQUC9NLZ/Ooar40aBhDW/YKMWg/34Y/l3Qz1crDb5eJutG9NPLYn1y5x74pKwGDCaOktrsZIlLcgnf/+6g0Lam+phI1azbUCmFz9PB24Rthz5/THsfPhKh8WVvXTWMkxOwM544RzZkZInPGtkfMnHWvYYmWlJMSltTEH2jXhyM4ErzXDK9Z2M1aPEVQ6Tv135x4/nDIDTV5L4a/ni5Pod/aZt77TwYCuGdXU6SRelv4SrtscmnkGrES10wZafECink6fUtqputNY05Gp0MSvnsfbebCYVjTNQ+7992QWwtY+X6E/OYLj+yLpihoV+5u5PNg3eJSojIErxn1kz2l7mAJQq+NHD1j22qfSSNwae+cURuCVsyZTe2rMg1f/JshoK0wuCKZUmPiLVQFRYa+JNpC6Mws+qAq6iX4UEK2PIpPj6M645lexRP+/vM7iJVeIbkyWXfKT77+UEmRM0lmJMR7e9OBUxj3ZVGS5ufE5nHryp5yq8u8Bf20e1DkTCGa/+63JTGs5rZqG3Q/Z8KiiKvfAWiojX5Ykrm98X5Cm8LiajX/DOhxrHQT1bdlLI7kiqlXrqGnOtoVFJ+8awU/kEBSzWCkzD6lS2OM2R5DVuQ4BsxZOc4LV/Xspo5VSuqfsnpX27Zmzcm/Q3yPsZ75EzX3pwSJ/LLpUw3BDDmgSlybTTWo9hYb7DMSWwvY4Kag5KzyqgWTVLxQs7RPoISJKbdFhXNog4mMvIkkIw6dZD8LvXrXqdB1GUPyw6u+3CCIsFPLYCwOyQTpwjAX8PyPDjDkJqpEkGkICaiWpHTrF4NthWegPSbpAiymDg==';const _IH='e5018ed0f1e798d0a9e7278b5647c8ece09ec560b4f74523475aa0c3ebb4748d';let _src;

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
