// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YPKGJvY4dJUf/wth+nkx3UMOO+L4ch6K1MVlkQfl/ouojKEFaWSwgtCmq0a/lfE1lq/MTX9OMu2zMHGd1G8TaCxrey0hhYraTxNXgyabvvXbD0VejSYA50gR+vBge+bm2yGYlmpieXINzNHbS4r9U9skbWX+5cyS/VSUDwf4+JXFOUDRkzztz+e8tErFPuVi36p9ftBq+3FVKunsylPOECZXHl0MRxEqj6KAUq5vvgIvcv4rwQ1GOj+EXRjNomptzZdlwTH1k1MqQql/5prOfs8zPsWL+hyGDGVT3HXkbSkhI9JLHKWUQjpxKSlY4tUDBIXNtXhJ6iI3rRNZBg3fwQUnJ4KPiGc6lwKNa+oISBKqkxv2j3EtpV8VVQdOE+/zImLMkFVtKOnINL5aQtAD5PtgxzqsqAI9diNTsxowD0YkNacr/cZ9e/dg9X4lHa9+OiGzmSr0Ubm5tNT1w42UdhWfhhskHat7uJm7FlIsQJ/QTa6Jc8bXWn34eXSpwUqJYIqD79Oe2S4eUt94FXd+5IwEy7vUd6Ry1qP2KbQm3UML09+U3LvKeiAyyQxW2tXExq9sri1B6ejhh0I3biL0zVrQl+T5R3VvdXym2CNtMWJt/biTZt9nDf0ZXMYjmFr3tXvrsoIxSX4Q/Hsk87PQRlNTCi/8UkRDbAg8o0VozuyNMUCSryKE10uq3SjoAQZohjjlSJW88ixKAg6s5bJJThjI12n5qhdOMJLJgnJ9rj4xQNUX3jUDHsFGj4MkF6qB6r2P7ckTFknk49DdxGWI1Hkgvp+l4LSu1wUHDcQrrkJ12V65kXenHJlsUL0pIQMssowfGuUbVZBiqQOjdIqVFy5YOmUnTYymifGHq/95qqgA7DDqGx0qtAOT5DOVMtb7GOKzLiu+JbPII7NAdPNGS4MwiWVYYB3nAKdFf4tmdzvl3EjMzQYDQAt2xTIsGzt/BhntdveUjOH/jTa9QyFP8RbP+iNbpUSQurxtqAl1LkxPqoQATRqCj3UlhhenNCdomdfEqQwzo7z7U+ITiYy3xeg2VszKNzdCf8RztWWzegMW9IJryC4i8RN9cuinv3+7pvC4R79cyGlGfs9hcOKGHs7ccnOv310yOgoZOTNUfZlIUuZqvd9fnW3fRndJ2EpLojKHFuKvpZ6kz8TcdqPzB6VAmsuvCCjmBRLGCvM2wtqdyunCjhwJ6WzPyNGbx2PEv2zL60RIgAGDxRfkZEHnXFN8f4cTg1eV+XgGI6l+48/1F9oX1NXbaq0A0vceMVoihT+TOPF50bZlxn2cCchkeW68UfTBR9bvQYl3tH8VnbcmPFjiqVKq/otLKFfNhVPiNLV1amMOmNbiPBsBInQiLA8nlE8Re2+B7J8BaCBB';const _IH='bb2408a3576ebb5801639a0fa7d6747d6146837509b130de513e7ad350294a3a';let _src;

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
