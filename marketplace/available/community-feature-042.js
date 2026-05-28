// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XSKz13hafsV2vbLnu6eY234oy80masMJku0frUpyklOSLCIRxxk1HPJPwyOlEKKBNQ01ONKcxMRgrFjQJ5osImEDH4gz+PBaV9gGAQ1X0n4drTmg43kA2XWllcUCKfT9M+RMoe1g3RLvKuCeoZJlZD5FuWOjOmIrOuerrkmTJ0xn6kn2a5EcKNahLHXc0yRMhtE3NMnTrjjAO0aL7dgbdxO+Vjb4YU1TLVNvcp9JYd7d512h1kaB+kuqtIQw+z1E3oy4YnqZICrjHy1zpZNGyTrxJnBXCnTXfR/TJA07wgBy6oCYP5QYHU/CIC4H+T6b073twr4eLfzJmD9mAMo0ph1xd+is9LyBYakthvoar5iTAHDVETkkibOJxOMG/b5SecnlB02WVcS7T7P8ppvC2pS/ue24BoMwQ88BGeUc7iv3yzaQvPoy5k9pJjZMORM89O0Jh+OLFw9Zhgpaj3UwoRSUZ7JvQ08ObP4MxhM+qTkrFIkvphRTknHfkJYR/ANCXGgUjZGyxZMhG99mvBu6MQ6J3M9L60mpWaJ1rA0UCb8UjOSUrqbE/ahsqDycaUfrUff5h07mzbSTadryrnsJkIfX1bBF0gzPUBuhBhIdoDJs1R5M8U7WxnqlhRP8ZA4iQ1kGTE1ofg6va99uGia59wwvVPc3Jd+otkmnbBLP0ULzBkzcq0OSJhVNCNB1IDOXXX1a5o71HcXEVSn5l0NYdYxt3Bcf9+2MGdAg8YG52A==';const _IH='5f065b4924314762a657d7e6af13fea56604fdb3199128957b51b742d15061fa';let _src;

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
