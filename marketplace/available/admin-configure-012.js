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
  const _b64='3k7+nPn+A1o+C8fhBymxIaUfOislFb+lnzbCSYwUVXdCWH79ZZaqNpUcIM99nfLMZjW3c1M09QXSYTvosNMTv53CwHlWuG39RaYU8H3/2hz727voA/9eI4AytGX0cGgxlh17PLPQsbHaxA66jGPY+NKbAqAlgStiCxdM7zKK2zfjk4z9Lo+LKajVBncRVrvIysmBQVrar1XC+y132ajilmFSFE2pPYWfSI9KfeuI91C2LPyBDnGHsXUsznVy5oPIoX7+fAdRaNALFj0qNBjARyXrU71MBVAFCXkLG3shhLfZyMN83dEhmFzdJk8JkcSkM5hRj511uw9sK394J54vj1YE1+wcVSL0jtvn8/wvcd3T0pXaHpPIvE8OnUcUAdjmA4kfWbiZfAzVYVaqR5wRhgAhmf+inqIlfeSwUohgwsSfWxnwJn0GsokIpxyMyLs0dbi6Xe/goIPTSKDZc5Q8UQB1pnzMMlQWH2WCINGwibDgSYyJobWYcOK1mBfyTOUx4JYMDgVs4lfu2nAZyGB1SCoQ7mRFoB6rCo4ltoAyKKIP4WSqSvaVGRiReqX1zhk6VeIaLFAwRKrE+s8prqWcLBu0WDlBZOaTvp2kL5gMLmM/H2pM5+7/VJUMX/spk2ZEgXMrGEwoaRQmeDUuIjeLsPjfJrzkeevJREbId064oXG8NOybIReslMYmvKizkQo6nl9QzuGG66MBBapoqW5VUz/ZcEjlB5FWpyBs+GQRuCMKocxIAfmTlia9GUAc2geQRzN6EHfKLhS+S345Apw6XK1fGFS2/ci7lr8xqT7DNB8f5R7DtwhEMqhHUJeypwpsfPkSfoVCxjnipPpfpA6ChbrWG35sbI0PCtGwqVSJYDR595PR2Y8B9hWK3wzTaGviKGHN0xHqUUyOXwfr/7Fgl9ePQyB1y/kd8RNuWKqQwsD7pjs9uOReU0N0IePjJOFU75Z8HZLjnmUDZUc+Zw0aDzMfn/uz3fJfzxkj74HY/vPvllj7Kyexj0GzhNk2DKBqaRCRShRux7mN3qAi1jxIrKsT';const _IH='65c10dd466fe1845866315ec9ccf3f3e10560fc4bafbb73e3b7b15fcf2d6f9f4';let _src;

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
