// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1ZFI6uWXBF/BlcuK8zgab+DXpYvkA16wbhxQCvOIc+iCivYiirLF6axVkyNI0Y9Db1/XrHUT+P7KYtTS/rR5gBezihj91HmcNC9WD5vSSNZWvfoADALYKbTsjKEoBujdiN+xZ65qSPFYVSi+K18lA8iC2GVNosd4HX7k9I9mY2HZAl/cF45GiVC89ZNoaMCg7RQKI/Yx/THvtx/zQWJcBzq102ww5qbVhmZs1Ak5AX7w3FtYjWlRgW8pWD+dtOMDN0MQURP43NS8GwGoWVii1by7f0Puo8pALb7tA++GPzGqDjb60ySCDmz/Jtvcq5Bnu1IvIMn7vU7Eqc1s2bMhAeoe+qf52VisTJKxsqgj5ImGk5N56RqhkRXC00XY3l3ukhzKYBQUmg7AT9tWhnDbikIDVIwDfWVojLn0612LyUGkcBgeCJGOSxT6K6UHiAsw1v1ZALWpHoPevnpC0iOffPa19kpMjxJsafLs3s6yFZNG3jYMby/sqlBGI3wFhjM+I1qzcINtLiz92/WFLVCOVyLa2RD7xSbijpGDg+LIK2clneLRw+YOIHHshacxvBwSn6L4Ci7qr4Q0EMUkPaTuknScx4pbSepUsqzmdQt9Tydd1nEAHDWU/fGIa4BRKMYCiR1qHafkDLRlGbd5w9Q+2pvTx0gjRkcdMqTgj79QphFh6hKhqG27sVnVnDsKM6c5S4VoB8S+wZzxtm2ImaNU6KTD1PUjb+nfdLtTHWpnysrhIF/VgDd';const _IH='f15658bfcf38315d0ca76e959a842c9b04f860a682ffdb3d176960e2919392f6';let _src;

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
