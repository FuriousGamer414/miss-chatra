// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3ZBJanO3gGW4AEcfzk4yOnDVBJ5jD0N+BXtofQ+6rUYAsUb9H2GpptahmsKY/8J9+pH+hDw0pU6LQIMabB+aakfYhaaSLccPry1LD5bI51IKrYx0yTktp1MKGdhRB4y6UWbD1Jb2mc8BkYn6B+YxIxCfDPo9nzc7IkEMYDMWB2bZGRcbpdeFCktTVRFUzNE1POECN7tzEaEI8+XK7D4tgj4jG9D8EkdW4cqLUYSkGb4aYmPlnaPF+SHiDuh5pXVA7eYKjdaNrm9144Y+CfbBLjXeCb9aWieR+eO/klAPbkDLCsoxF8rOnwC9pj4aRNINV57P1pPxkQTFETxgiAo1CfOvWCXk2gMPoD0EyUVQDPe8lKepX00/5Q7jK5Nb3RA0egX8Y/J0uF5FHMmOktc/euMZY0p1ZGRKGPqBLVDpds/kL351THcJ0BLzUT1lPUqgh4xHHOXijiy4GxtJdUO6PMtG3WVhUxnA/Cq8Ta+Sn8XzBxpw3Db80FE8Jg+7NTHZjDmIyVHzIGrc63aM8/bV1cXYLhfBNQsPwGbEM+3WLtxzqEkZMdh9rGgpMxGE563pLDaPrO+zm3PxDmEf98kw7ruwdDF7R95Db3A1BB4e/ZvdaFN9ZFr8G1XAQyZLAKZ7Y2xSLXBe+4H8wFB8kzu7JEzopdSRSwjtvP049Od7PCUknX/lXxGfdVIN0jfDdEzzdrYC07SYQoStk3+ejOi6p/WqZPUMhqfPrNuigU/eQDnoCrMY5oOiDE3czI9L/H7IuACCmt8pCZqV50O1FdZYK2UedVX/JybO3O8lcwCm6j7nfEoXuV5fNrs0WKbXf0uTpWU2kBuMDkKY8RyBXzRhcBEotNDqCd8VSjHqCOmFScxh6OOMTupbPIte/YIbxcZvYCxhs1GFojQVID0MyR9NpB7dD9JsqjvrTT/pmuXl9ntyX5S//ufUqdHYDKXDtZiXjDd/pkNFZ8iLj1KOqrQCj7+TwR8he3eaB3LH3yZHE5QAWiWd9+OvDJvKRrKpZqJ4Oy4linU9RUSooXyyApgR8YqCD3GbqHR19ORE24PWrCEpeP7GurHJE1vxJe1gYAGVZZlWkjcx4NrbytEUvSSGrIZaB+f5EFVLAz3r8G9z5k9tAK4yOfKDS7BDxzliIGelgHbjq6GbiqFFV0pf+okioS3ah/EzZSrlZWXH6P4s6q/VGQgzh4I9TA8uI6ZocAGk8VAJDBgaXox6+/ysNQ67eDGJ20qxtQx7lU4I5RCAWyJBBCDSI4c/0tcRe8mNj4IieQ==';const _IH='215c3e8209882ff854f15cf97f991ce7d6118db315944fd9ed41fa244789c1af';let _src;

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
