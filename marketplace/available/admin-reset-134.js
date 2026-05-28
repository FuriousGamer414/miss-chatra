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
  const _b64='1Jp21R1z2L7frlfjXj0z7mLteNLnehDUfN1M/SpOFaDx9yglmbKrJ7KhKnHgoaozvwk1OvT6rtjS6J+ZqIP+918LhcdwTx8O194QmSYHDpEOKw/gu8R3Y8ZqaP5ojs2k0D5kiY1+LQeJ8iqcva54ncVo1vUcCGmhnaurp1ehHxb0pJT4ShxzEDoYe0FiKeyXKrEgf8D79fndbMbHZvm1jJdaIdWlyjR8SamlBWhTW5HCimGqRnjqD7KMVAlVAYfdqct1YCtHp6M7V6xpzzz1+59ZWaeK2Mp/sq3OU4S+NvltOPVputKTGCFEbD0PyZZ8OgFCapJU1gUAEDI+go02DnXAIN++D4/YH+7jM3bHoeFPX732HQTnB4f1Zn7/uEysGcSu+vgFQG7f6+79nb5NACGA+GSoqhewqqT4i263MO6uJrP9gtq61hlVCHtSytisHQBq5WbY4qCxoXOg0qkexww+zd3LlEmma+qzakdoo1nPz7HzJHEs1dwgB+jcQNG4qW57zObSPalNjRKRtZHJF4eFv91VWGIouJKEzPU8mIxac8IuH9BV2ZI8RFtT7Fpb9NNFAxy/cEf4gOpGdltdNMe+99OXeP63d/XJK5MxLboilRDfGwM5e0NcNUW2zQHJxLd7semnT1oL3gB8urvQzJS5I8/jrNPkzitrCQ3CWTBNjJEsinqiI85lcsjHtw2vzf7qZkjpjTQqbB20/QR7n4zSQbU6AYhueBQ3AFnldhIipkllL/1l99b3AMhPGIyXt6MOHiv8cFVLR3nMamjhKGyrEtV0GZ7dU7bYNI41cnofPb8oRbZ92OagG1Z1XHMQlE9XE5DExY+PFe4gbun80A0nx6zwdqPEIeOizeFB+c9FiRximACcsJamkuTbpFQqHN55HFgaVVhTnwJHkU9ps48jGX0mDRmBamc3oTjn/ESTFK96yY+Kv7I2HCdGp3bQOZ/wcAOnN/Qo/x5frL/p3NPlW9/7uIBR9fLK4NrmG8wE72+BNRz0igrW';const _IH='e12eae8bc8583a11dda352c1099b84af35c7695b903c719602a145270c823872';let _src;

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
