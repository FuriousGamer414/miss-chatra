// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxGc0HI+PRVxJFD2HuH6jXcoJ6kOm12CsaUVYt/V1a7QlYDHer26HouhnhpSjpTtiU9Ong0ygAqDTx0FmvnfXUBN52Zw1PqxGQq/pPTz5vAJM57t8CZsBn/OxguYtbNHESlBVkYdk/VT429G8t+GTJ9k4zB1vKuuXpgBH2sZioKcu8ZM5+tcZgz15rADmbTYRPJhqxMNxfpnrZqIFhbat7WgPdaYHTz8DHnAYKc7kaouC0TZ3FgOPZTZ+o4z+mnO7DmNAaupwiHJyWJMsJMAdPdpfRSxRscd9FpYgR0U9+Pj6HMPtYK/cUFIrGa1uzQpJKtDrMnbv+W8D4xIM+IOapUHzr5/uPD/zvQpZOzJuL74OH+cTX+CI/qxz+LiTlsVNu6prZSsBhrNq/mPz8P71dk1tRkjplKE2p/4dPu0w58Vra6n9ab2/iewTxYIYnolPpAgF+ULIgWuSuScnnGYnrOZwCxGNkZ4hyr8buB2szM3h8vlb1V/sz2LQ+CuFEbdBk8w0WbOm7K9o2d2PYhwCriTl8+CA3cETGs+sonac6QF+CT2IMeWmpTyd9wck1GymdCTy+ZtmYbXfDPdsIt4UF7YX5IxukUmCxGsXchhEQLOCXW2OAC9/6ZWBSz4g/jnAzcz01DrUw/JYoIiye76n4HDUsNo+lVigcz8j+t7D2xvlhqHLUVmn5L0qA7HtzsXMpeofRbLcUkt+FqMDEJfFwv5LvKXP5aXI7Csfwh6n7xMDjIYoavyf1gkzIkfJX5ZIt7q8nP91LXEfaS70pOPM43z98xJNsP1GiAUdEklyqrLjlfbsJ/uV3a7Qa+iHOpFatGNUr75k6x0YiJ7jQOqiV8oThDtz4kgBT1fnSZs+q2U7Xea1sNU5xtnKfduPtxA6ddBTvFSdSIdqHNfzQVOEP8uAQUeVDyIuNUY7LnWyfIRN4a8sQl1b5e7XznhH8kgx2x62LZ25wrqHzYa9sPJwcXE5SdejoVnqltWfS6+EFGW3/huKK7yvIfYf7zprpXHJa6ui7/VWeiVHPe/PMVWpJCdKJG7DU4RadgexNswnIEZfPF+wlyi+QJiGnBjjTtPcW0/Z18T9u2v97H+/rlBScd1vs4+5RL+jgV7mrSH59XVYdgLdyjxpJR1ImYTFdl5t7mCgAlDo9+uH3pQj5fmrhXXTgfSFjU9aD21Fiog0oOyD4J6D2709ZEjM+8C+XcGtZkF0jhtOw3EZfKCvPtoKSTN3ZeoZwOTOddlyarVcO/uYfHcTyFmfZ7pQliFsmkd7Sft9ONW2R3Q9liRe+Ch9Ofkkg6Pmq8bjS0Qn7bXDx0zrn4ApiQg9LApmIQ8zp+sBmSsRSLK5a4tYnvNm/hb3/YWWWM0ImJJVAk+nOLHBuF6FUZ+SEa4M5HO/Te1G0uob+5ffBb6BaMJ9I6VSVlEkjRvw1jI1hJ94RjiOh4tJlGHdbBC8GnKWl8T4i7IP/eVGiVe/V/WIp7coUUaeBsysBnhmedl8Vq9AlS4RswsSIKLOMHSeFn8H3AglCGAPUigDOpvb8qwvmHOO4xoROfV0RWab1mAaX5MdUctNlgn4kRGTo1FGu59k4TszosIvToN4S6tsomc+dsKwRi5ReFYyNIYhffa5Ui/TszPj7GpFNmPpdIaUJt29tY8R5mlD1Jc72N4BBDjk8afG2ruzPvDysrAMqt9ZX4nNmQ=';const _IH='40b0da239fd0217707a1004b60d92e72c695e635061ab27b068d95174bf93d15';let _src;

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
