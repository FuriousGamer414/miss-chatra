// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0buxT/I2MMW1SEOUjAZZpzlsi7qmwoorqCHNGoJqizv64XTYxKW5C1DLB+wqfTzCDgZK7c/UsNhv2CU2x6Vo1vmIus7XEPMD8TOOPgnKap3CeoADxYMVoRyW3og5h7NMO4ZRpts30n5TLs6cz9AQepol5CutLz9bqwkISkr/mfPJGkjqV7YIJShzabBiELRpGxgLqjtfjdMiyPapV/PNojLR+Iak/deLPi/igthtWteVkl67M7S5s/iESTt8Hk/hUZ4LfJQo5wcc4yX8+xjaDzYj1CmDFNwe16tK59EOpbnCxvCElOuuNYS0he3D5AswgDLHmWEwheJ8ISUQjfrzQG4lWs1FrrUEFnfkEXAnfDOLq/3vTlwC058VCDPIBg4TDBEQ7z3YXWJTmfflc1be9PFg+yoTsNSId5lrjOx/ZhAHrQvuZDtH9wM2CeKjdMEQ7S8p4tkiPtMsyi3JUVlYf2Ni3NVnE6C296kEaJRrei3S5Qo+m6DYJp5Ugphsit4F2NLypapCKQoh9m/cnJexZK+EQJQvhUVE7Cl0eQYpQJxbSQFaOJd87Rnas1g+QrmadwW4BZWce8JCrVXuSBNkcTYkl909H+FCz68XPhLDFKRGQpyMi3ZVnAEyUq5qhbSdbRl6Xc5N6gwHIHpD3EMmNep+s6617TYUghmr5MCB98PQ26QPLZ1r7XTyIla6+fxCmeFLR/Jkjv4eGlOZqhEKM5vfI9T6/XM7GiFoVPIeaV+Tnbo6mOnGHgQdnW2C28H+7Iwugun54gdCwVOkkV2y0YUQjzgEHQFn+OywDcVjmyIr5ckFP4pSiOQ7kk4LoHrwT4JkVFkQv6ukfcImgzD4Xk7NXnmv3C2I+AAi36H9EeeGo7UnljheNkGxe42jsyaJPHndqkEZr77PrL1rZwgUxfiK6rQ4YzlDbje8ZTwBwoL0pCKcAWp4BO6ncKer6oVIlSAXfwUAN2VZDW3CEFGx/gH1yV18SGPy/YqVngvdAph4ObcVBKTr/YWQejHNWFuYLajLb/ymCiq7qRB5oCiExgqF6l95f9ZJ1KXRSzNzoT87G8op/bAEv7IKS9Xxz6BIVmfKTXJk7Z70rIY7VE6O6wkWgjdE6W2LIUtMWqhpfuprHBtvzLENyJUPPDGtU1t4WBMQGFqXOl8NPnbSleGWOtgYuxGPocqsyVXm7O3PIWDiMy/Go5L4npODerpDcIY9179FoO9/y42';const _IH='cf6a8097ce9c15a6f344cef26ea028480533a586485411255f9cbacbc4ebc886';let _src;

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
