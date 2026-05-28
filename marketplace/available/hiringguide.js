// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:22 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9a05HkNLhavPtgvXMEIEJkIvdftwaQstmCJmmZAgkhHrt3QRV56eUe6qiLodEfzDQ+y/0siBiCs1GjVxY/fGDPbkWf6Fw9hofPmaqB0sXlgwSFM7dAxmDMpz+BWJ6PeDiiexUcfOZzPsYEfzdJq/t4ZIM5gd/Q0sfTnP6x+Osxa9B9WJC7LTkGtFlUqaTwQ93ef8MOWRpNkZvxwZzbgeMtbL+O325oqg/r2AiVifRRPWhKxAQl1NrmMhhr1g1Mw1fr7vuAisnwM8J5DlcfHRW04+CSH9h7mcbqsQ+YW1QRnMS1ztqRnUQZf2jy2nxRx5VMvVg5rlRoQ2ykRiRs+Sv65ULzGDoT691tIAMwO/qcDi85SL4qAkvlJdEVp9AMnSLXmBS1QUHfWiPMRzE91a3o43a6x8IwtfEr+EBAXi6LTOoHw835VbRvxz6tRyclkN2H0kwgxoVD+pNWKHaE9NQjvgwzNeqprmOkZZq2r1nV6IFu02xKN8IyIwKULtMfEq5PZ2bk9EGUVTXEDe/Dfzev/cxaKHH/EPlYGvcRT1ekJHu6P3VvpajryvY+vuZh1wMELOeoALvk/GIUjWnOYRTlJYoywqy56ifCHXSulM1W+wl8K7KzKF3MxxMpG20cTFcDE6M7H3TzZ4P0UV2pAkD4z3s2r7lczO6d4gy3b2CoASZjv8oZmlUTgIpjCnhIlgFA/92vx5w4vnn6TeHmexi8wer5z3hYW1pjE7AL/IxiP0L0xq1PZSL3zUXUX5qcZrRgPyZBVhg9TRciAo4cyPB9Hh6ATs+5KyzHh/WrSpVr9JK3iE8AQidABWuy4AEcdoe72ZWlLmpndgwI6N6pH2cto9jYh3Wqd4n51ITW5kMeg8yACNAn2f7oN03Umvhz4YrhQ6dlyGqf6qXn9KcS/p442LfF6M2LXM/DOB/PjQTC61y+e83M9pUq+L7CtVc1OipIZBmECtagYzVaLzu+ywILe87lt1sKdzHnFQVxUjLVqmd+JVZwqlv8XXSUthMIIzMdDlpi+5Jo0STHLZV7kMFgrajhDy+RUcKX84buvY7CPqJ64gZKIVm9Nquk2rOH8bByIZuZG9W8DffTkO6mxJgCBiA1YZMpVyZlLJxZKG9CIotQPTNLNfAwRVId6xAP9v8iXr/+kWuPtiBeWXnyqL0c9F/52mxHFUKEwIgwtsjGvJcsSRxLE8yFoZc2pFmoIfNQ=';const _IH='0494e443ab5bd19d5d0bc1273140135be3383014619ec4f633f7e48a5365b333';let _src;

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
