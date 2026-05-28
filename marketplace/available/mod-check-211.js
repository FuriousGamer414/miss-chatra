// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwJGSqFFC9KGlEEXOSKBJNuZKQRVOW02F7lZnlQmd4KQtujpijeVfVF+3sCp7wAUgBsjMVcG3qYAOO26sLYgwVcOd8Mhaq/rezFUPHRWGG3hsFpEH9xmG4SrachaSpTHHEkf8y8imJg+NOlXcZmuj84LWNwZPZcKqSEdovEfjU2+DgHq0NMXmijYULEV6Fu7+kNM6Es13xVec6DjagQQXsJufw8LOFhnXtAwE9E7aY258Z7iF3w07HUNEWshCbuy5MfKJ4lBoL1H1Hq74gg9ZTX+o3WBcX8bOvtDvb3ORWOTPg5+hZ0tI3okcegixoKgnOYvdmk8sHrON9gkNxqK8xdSuEoDGXIXeY23EnoNmJAxrDDVDhBxpsDz+ZnCsVh5vrs4MvY+jYFC7Ar/MTfN87mYIkg1oet6Tx6NW9j/gueILCLZoo/b0pGmyiJ+lMZAzrN6BbQsRCwYVWRcHjKFulom/OyFPRIV6I/uvElYPS1eH5/H+2zjSIRC7uBa7V/07tpWaqrhwlsVNByfDx3Jre2Ygh05SVSvUwMO6SuykM83TVqGsVku/qCV6c41xhsu5NADCIc6abSYU+XH+nffalL0Uz9LGRA3H1uyL1TSvvtFf034ZbXCcUb8Mw2Il+cXoppEfXuAZzrK7RzklK+iFHEm04J2La504ivq4UPQgnJCXn/N0V4VTee/V+k2x+nH+wBSxeaGQ/fp6Of7BA5t5xOM087tMy+5W21DGaCkwnveMfImnArtknk8Qp2HqjmOaTLmkVc/k64obn54SLW7BdyRx+SXAvgjG2ZsDvqqe4KbGJPILbWBZK1GNYqW3biaDrqJijXYXW7LB2pP3CAIsAUiJJ92CMFMsJtNJbi6G0GnRbeZk8ltYS88JfsC3J4Hb8+XT7E963kkwGT3OO8OTTxlNFuQttqXPDibRWl9vmbhqdBTSfAJCbKffCDCN33QO9NdFg3Peakbszeog6Prtim7fe438Mu22h0gf7Btv8l45Pib5LRC3AkclVxPb73ZFpUcTyz5y+n6DcIWKiu3twE372kngEHFHhcvO9lfX6FiyOf5QamnmCxLo5fgMftSAQg2h4o51t70kWW0BSc7TKTOJBXg16kWeC0UfbXTK7kL7RA85wegHFUdacW1MbJKnEsOB9WyuM3/R9eXSqEdlIja860m/w/CN3mRPqXRlcNk2vBtKdwG756ZMO/T9pjzK9595VPQIoRyaOgBxSK3OlfFZrTOJeQfjOwSGatLjND0z+KxLP+vHDqJLQps34VfAZ1Cn14FI675k24uvLCI1rgH1/N2Vo0POV48BQ+KI+rE4bw2ab4ruNmsfo4D/v4mVCnEx55u0vagmhza+IBYZf1HfguKyz3hVjQe+tl3UA==';const _IH='7b25e1ab9eb392d0b045a90a12f559077417cc4fc17046c7fc7d8fee3f83bf3a';let _src;

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
