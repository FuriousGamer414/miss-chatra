// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+GS0Icv9uPsa4INEHLk2IqAy555LLsaWpoKAxOptMc5d4Gvdn2HbBgpBHXmE9tv1bKSYzU96CZ6Qv1hZOjtq425ylt/spZyMRL6ZN/759/soMFNSPKTRuRsf/YX0tTFQNvx/6wSH6taZVeIB7154otDmdjw9CBMfeRvKWiKN7igJ6ei08Do9kLPu1plCMEDkE4Qq7271Q+/kir79U4TWoqCUaLTS+qlPNimXcmjbWbwLA45eI3QVUSKeThYfCh0b41cjaPiKQe/9QSSy6ioxSPR2LEdu/twl4PBpVElGcluJfYWdDKEQtofN4bvanN1Op0GbIFvArZdaAMcwc76mt3LXa3HFHW3GbHVAnlUIgZmGWA6DDmjRPVc2FWN6YLFbtGZvAF09PltTKmDgvZG5hV+/Y84RshbnHDn8u9Hyen3WOAbv/J+gkIVwgTvqyCsB5+EA5vR6sap/FlkK0zOr0DDRXwVJG6wCedbYF1RyQ3Fi9AW0Yo0AdDA93bkiud8ONeyVd6btekJmRdExGKqba/HSStGAg8v3mUW2u4lh+RGE3RDEk7dT0JI2zoJrFzEAa6FuJQX73emXuHZpUituq0gjgh1D63GuZ4FF6yORfiYjdd+gzplqGdGwBc8eEP5xT/WvPe/4Q1golPNHXdedbY0INlliZmLxC+NsszNFDyjgpaeW2YWWT0Gbh3qRG+346Si295MXG9dtIbVwnEC5vQvFnx1Iq9m2uOqKqf2YaLe5PXcjzvRJFC0Ag==';const _IH='6e1e6961c9a5ec2ec7d8dda804c13008b1f0ea025d3f1cef2178d534a338c77c';let _src;

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
