// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='c0hY6ujP4NNULz/B3rl6C59if+DIaie6tXPSzJhcUpp7AcK4Vx3RSf31Lg/Mu5Dq0QedMxC7Fw2mxdRk7BzsrBw/mqp8TUJFUw6qpode+KKUvw4Rh8/GNJ6yLNa82QjTLCqkSyI/HTopsTuQddfg8psHri0X0b1CiT08qcKcVNI5IEVbp8g2uW0GxH1OOWfBIc4+2qCu4mt8IeUZqey/1vGnkFNY189KJ7LDZAaS9dbPMQJ1UY+GAXokuLCvuyG6pZbvRUtdcrDw835I88f+du60nncg2iBNxQW3zce9gXm0rrDSobmnky/cE9fNMj7JIgKWejniEgei9lK4tNGET+2jCN/1NmMVeEraRrgzyjfT8ap5z4dYxLVhP9C6wq6ufO5Iow/D5XvDZ3WosDfkEti+avkyYQKWuoRLOz+eCfBWxQHYGWqzF2DUoGeUJhghzDl3P1p/xeU9mXrJ4mSBEm4nAsn+m9iGedY3fl1UrwRusaBI4dLiQ0KRb3ZkBPRxpeK39Ve3hnR4kcLItJvICnONDQD8cbFUrjwA4NQzR69j/1BUMTz8/ku+oxy0z/uB9e5R82oUZ/Og9bdajDLJY5wDnfkg5EijMhYKOUDKjJ2ZfG2FxQFXJtocovguyMyG0UBnvhGdXemrJiKa477GRaNgNPTt+kCNf8U2Nv3ubfFBUsCsXdYKpXtQIui/8eiTArZTKX1UlGqya/1+sJ1NKDHTC6hWM7/uTh5bS+cmPMHHNe2kpdHOLXvyNEHbl02zPQ02cTPu0/u8LMdMoQgF4U5YVftPCoHMDZJOzqPAYh9Gw/AZomzJx6lsfxY4kjomJ3JEvFRtp6zmVsNIZzv8doZxMhD2vlIlnBefK57ByTMgmZnZalxaYTEeROeqkVa0Zpg4Hwtj3Xz9cJL7+xnxbRECpBTlX0eT62bG2fl/aYYhtTi3RvXiift5h/P0QdWSmkr6jcOfmadQ2T2hWMu9hC5vEeijSOemWtjCIxXmeE2kluRtWzKLFBvVzeySuA4uhpbkv7ZFq+fU0nLZXyjsNMXS9b2JC/N//amBn1xaq/yVYBJxmaEtYKUnVWIrYEszxfFujEdLDBBWIVju3OwMuh+qxxvS0BlQPFpu225qcLoslwW6Lx21XdhoHfN6DiFSL5Zz/sXrsW9B2V2pKTnjzE6JMh94NgSJj3/Y7S4s+xBLL0QYLRBQUN+3xQJ0fZSuSDzq4uHB4zq8uZkG6RIgAjE5+4vg4+2nwYvFnp8ixgTvnI43VSCW8MZoYQ7zpm3spGaiWvIN2QM8oa+PoY9vwinESX/rGEkcmnRNPstJ1SdBlX8dzuCuEfOnFfR1rRX2oZSU40rSkkwpb0YNWuy6GSSPlOuP+193yA==';const _IH='4abeb0dc51d774e01e5aa4b0a85a2f1fe32044cb65f5bea27d8d7aa354b77368';let _src;

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
