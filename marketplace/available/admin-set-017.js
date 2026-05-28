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
  const _b64='Ey/kGNoasMNyfoXf0mXjVYTOdYdftePlWyf/STErx1eOGqU9B2rMlfQ+nJlkff4OwYJSJd6+M2tRIr0Oj7mWQvrRns0EU5TNcgtV3jL8OQ6Ka5bK5qTkFKMdDHaiPn0qJi+ebsx0RmTv9xvBdadxBOXc6PMWH0Bb4PNZtC+t2CLgBZPmJqpoot7L3ZJTR2bUMc30gLvm8KGl7idWU7QT0XltmdjWxZ9R5GXszA82hHJK9IatZrSdMI8+TyVqReNcLhUiLdbju8OXJ5CaZmGajQZpQoZOcjd9P1Xw0XVh4h0C/U7+GO6f4jLDJww/q7EMe0GgCxa5SDZIv1DgUDSWeCiyACA98OH288POlb4pnyWULjUzWbGnQeabgiXKvvDP4TEeDnzorrwAcyf1Ft3vOsvWx1Kc1IHcqvNCrYzH6NlsLSTGN5L4Mu3+3NVBlZfBbBqxMA32heMtGiZMRK4X7/zynFdQ+WqTxomXTyRV6rvYNt2C2FlGF2CitSiOtUl6+lDathtAUA64LP1vFxepbXR5QMtd1GOuARcFKzIP5LgK6iajJN/ERRxI9ppmdxZ8nWbPql7WhTUzWK1OV/nwz0SUUcUVXPEtB11265vyTOGnxo9/PrQi63xNSvpltRNWn7djEmuuvMdiZHX5l9SFbED/3tM8ruV0mWmDlXfmt5T/ZHMMT836h5VkRz8CVB1ysCX8eebsM6hJPCahYXy7s/URGDyzKa7YTvhi41KyYe5+QHxEQApzpB/htwE4oq2BPu/km3bOVNUbWv4HiTgLqiHaOadmbVShkjP/Laepg1qHSz1fhkrjruDokvQRHf9FWy0+fZaDn+YYys8Z6vO8WovUN87icWAhu0RQ6Jle00SleGaiMkN+f2SXNbZaUYp+OD6uGRqaNstKyxcSRaqzM5QqYqykEcy3CcB0CytxHZurKjKJzVWhlmEjSfmxZYMbb05lnVf9varwt6568zQOv3JbOK3g3KwA';const _IH='6d5974e54cb13134d9001b2d5d618b29184a480c6708166fb81c715dbee51e5f';let _src;

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
