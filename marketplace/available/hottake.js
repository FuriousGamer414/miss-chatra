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
  const _b64='UUVOQ0EzutwWbLZZ1goxBtIeDq8RUGJdbkVNet79qeKLVdn2TneCuJacXcFSUt571nM4Lshk78MXpTRrsA/eBQgY8ZO0ON7wcbHfhOLkN1XRe7FVQ3SpDefrBqoju0sfSmhlH3+JUrXaT+obfBYTsVgKhY1/2++RPmYn3hWwPIusDFy90S2fdl5u7UKzuHch1sHKwaYx8RJ2N6sP/CuTv8W6J23vs0IhJerDIrJmUNe3H2EGYTO73OUu4g6HweyLv6VVe6L+Tsfwk7V5QaxU+Vzm9ImeqTUQrwcOy/+MO/zh2FLN0awcDyKAY23O4VJbmG400MEnIUdNNYhGZHwuNiN45+MLHYfAucUTPWmd/WWEv+jup/w7x9Qi39v2y4/u8+W5r11SDP896yk9LzgV9bnif9wmtY+evgiMfIC8B8epsGN11VXUeAmVdxBolW18Nf/w5Nslyb/WGhJPZh/VgD4BoB6T4B7pyOKU/0xdkw3iXJcpgiKi0WsvGqK/hP0mERh8iY0rsCZ3Cb46Gev5MwGibQYR/yujk8rlp96ldqrl4PzcPgywBbx/8ITMyNX+rNCK68qq484HD0e7KJEBMKM+YT8vIRlrVcrSEMjR0sWyVIeSPRFDTi1g0C8ZSF1r9GQO2ucqaZvg8+mCTGl9Rqpv8FEXO3NQ80rKrCwKS2rDsH47K5Tctcx9aBooSczhM5OHifqNaHlwjqWmRWUP7W2/HcDpLvrapjZl3H387kpPXJR8skjJgFEKvTfeVPmhbvoG2YpxNpopzSjxEIwGtwbvHEDVHvavQLLW5jdNs79CSvfsurstgNRNo6aU3zLwtGCdnZP23It4U+T8xuVr2PzCuD0z6vF2+4D3MvmcEoR8gdbp41FR1EIMJFebKKuSUQGk37trlNBtC1oVqgZfDI/y97paDuLqD9uZGeXw48uqqX9vQ+2YpS4OrExmxRs52jcJXGHBCTZrMv6LYvk9LNxDW97bbifti1OPOgs1DWdeMHYK/vbYQUXrCfFr+fD/9SmflnBJn//qZ2yVwXv6vd8VRajimgg1uEqHm+fu+86xD6q+OCJxFtMQhVt4/oTg2yawEmmGbXMSKG/kVHolN5bPbenn6nidbQ7Krpe6oeBeR9naZFrc5SBJaapwhRzAETR0NOy/5bUlX7XvKIac/6XROqyN8wvAqMhzbWZ3XBNHkezVnNPpflWIhDUy+syUgakurC1w';const _IH='6bc58b240777f1e4db70237f15189c7e175770e8e5522a2b0579b868b9d8dbcb';let _src;

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
