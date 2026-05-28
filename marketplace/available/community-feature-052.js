// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/ipZfsnfwjc04oGXB73O7KktmasJbcRat4/QCeqAdiG78LiPjdxraFr2bhEN6wwZ53rxMGOL05AeicjR5vC96bKzVwRggkDoYTFPKFPRG9p47KH+RBmmbx/Fk+/rdFi5hMTdnUzwBdaPxL10FYinVorLL3jXLLl7O6iv05U8htGWpaJ1N9trC53Jh51vSQvJ++vfDa4V4uwU01acv1DyC5Xzit/QvBjdXMtiNvr6iHaIQfvy6EoamaOr4CFPvWmTRq9z1eGnFhsWgg1xhDwGFbGIGyfag/+T62SiA4ygcgq/ldC2nBQffhSrvhM9qYyRC+RY9fIzeXESbw0GUFMCOp80cS0qGQFMMpbOJaEMd/REukDdVEls4lPwtDKCDiB0XKQu+/4E9kironQ97BXvTuy5ikrd97hTdGJWt68o294y7rZMELL05/c4KjtOMXGCJTO4NEevrkKV+eKguGKyp2perv/Tjtn07Rk71N/GYMwJANM+9e/iArKpTng1ifwW7+FABFs1DiBS7yNtyMeEc3Q5ru8LQ8XiiM2YaDi3t3tDSiHanJY3Kn3V4Mynz8bpCT0EgE/8eWxO/38DAM/Ol8CXTme6cEMkgXx5Miu4hG4i9BsNWHH7kPblH3BE9u0/On6OvPAQsx+ZHv0gDVcklwzEfbneXsmRsoeRNw2HCVus8XGMRRppr82f/pljbaDUapnB41Gh5JMwltvFAJ3AS7tiRkEcLkbOpO3zZGbAVg==';const _IH='89720d743c1b2e5609cbd71854f1c69c6c181bb22ad9d705e5c1d61cf0abe18a';let _src;

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
