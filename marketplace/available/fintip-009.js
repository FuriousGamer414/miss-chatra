// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rQKbXZaY7W/Rr66g7KHGhv1kw9ExOPYKSUiXdPlbAK8cNw2cNJM1bRZRja+I4l1KUTlSkhSEMSay6bQCnxasqGxKYlM8S0DuNRbZu+ZaVapmHxfWphh7V3IA5slQIEqlPrL9FwlNK6DyY+kHHfzmNe/AHrkZuquxHsvX4sQfsGHUL4twO118RkjB6uhl3+Cdf8TxKWRJ0najHqeUco3bSxfuRlLmzf+IYCXGUPgVeMRwmmjVmBILYevZHOyZ54Pma39hsAhhGQG+bHuKqxOwkl7sp3MiybDLXoBgycof7HaTNqwN3MOieVuB4ZMC98qUKph3/XEB7WWJqygOIL2uDdnFy5eEjIDm9lObwRfLFwzHgviF47KCrlhxOW2ARj/yKd13+R4skx059HSeDitWcFcAZZWINDBxW+GV6Y3SnEL2XM5ZhqYN7PVKTV4hGe45KvSLgjX4GcGFz5GCtgx2jmkw8ocMuoCxFXd+H5rLNdtj5Dm2nlAgxk8cxFtroGfwj77bhZvyhleZgxT62GPgv1U45eIvq9FIxDfXLHqji5aqGqcLdqdSryMSZ4KePVCp3BLxN+/3D6QukSa/pVWcyLV4mn4yRdy9uf7qSY7cKiq9sn3I8KRBwH7Wu/pQGSil6Y7Ho1exkdqM2P6CCilsBZ0KDakr9mrxGLSaWAptdSxaKg6kQ45Qw9xGfEofDAk4ceSEP2HpP32Yr38PD4v062iogfU+272okydyC9hHtxAk3FenVcERNsuymHG88+LSDI4hlrp03A4HtvGs2TkbrtZgzKmZ0DlZeKQExs/T6txoTuQoumbZjap8tQ++T2MPkt67X3X2Mh+IfZMppTGrcA+CPlqLgpR5/irFFt5bfIHBLHwbvHE+gMlo8vQ1KKYDz5fZLYNKYuNuN77q2N0kslYIoyzbFEvnq+9QHNufAuOyxiQtJQATX24i4Ek7iD3NBRLapAyeSyNrfVJyEkfLRSft/306jm52HY1uP5rjFNLXMg5ue+nZtwafAHJUXSJU2fwdL1zPNS/jq+y2yeXdptasHPtzl2vFR0NDGirn';const _IH='36d7c88903430c94c6f2545326980cf94c4a69f80284f9ef2ffe713cdd04bdfd';let _src;

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
