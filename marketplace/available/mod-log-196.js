// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwX0oKbMPGFBTyKxY/bjthlyxqPz94i4mwugfWa6/wtwx7OKToUQx40HgiBkGG74PpGd9N6OmEmfYaeW96grIZnT9wGFd3ozaKMVvguyx35VWTyV+B8jfGiLpzw/bfdKZqiCe3Ug8YgrTCElP6L8cBrdFnzgfPseOA/RSPcjJjv2FEQpkDFVpsHFe3kWWznUPvptRRnMJRSpn9f3K7QHKg9U8QcDg/G+Fvk6wwgeKwZBnOeYXrCUhwLDwzz48FyftU3n+SIbG7pFfOhbOMbI1kM58kDxJgffFDie8t3qqZ1b3y7KRWwFMp9a19Lqtc57Bv2HJ1/rOhrvFD+dEyCaFLhWnKWjPod+fk+w2F2oIIvhGrskrNeYeIcxiv85U5c0NLAIu0pFocrvrLByqG3cbfSIjgDnwdblhpfwWaBmjduKo8o/+IYAxVtjXO593dOyqIe3h2FYn815Yb4FLX1CXFhgvmtAJVqBjNIwGn0xXNMLJoPcjsKz4Of6X6ATx3ye4tdtiFl6A3CbhHHsaFibcbGScuazVBDomeYv6sf7cOIo3rU0RpKmwJunFZXd00ObwkIyqF/+CZgRPK9tgkg4jobW93YV4dRudIsL4R1sKGaIyR9rVKPCimczADh2msf+LCI5JMniWuAonzugipp6oqm74oR1OfS0kRpcdxNXuud3EpN57ms2PsMxutDogy2TiDDSNAWSK+etnUEHJ1F0KFuI3Hm9pXddj5qRUNDnGT83UdEj92ueHi82GLZpNzx6b7annDJHt4L9Lox5A0zwwVAt5y1kfOPwRbg94ljptZguOkDVCGR9cmtLSmLGzFxqzfuwLpaLNiRObdd6j6/orycQsbukcKIIHw4EMrfd9cEx8SLxToCWbdlYUnIFwaaJUBicw13J8Lwcdlx/JLkYcozHFuijA0HLN0nC7voto7LN+g/hV3IiYh+IQ6zqODb8vNUojAtaO0Np5wpokfJhLFbsir5byyEkvywXxNj5mhYpvz608JJj9W5t3DZxkQ2W5eZnJffQVsn/RQyNQnRyPFLjQBslGDXJqtihaD6P1id0eUSR5SROvJS/si2xbJdVfBVUe3SlXKGlFMv6yy0esyqa72WASXemf1kM5+hMae7u60zVH6G4IJ9GUj0tfqs4Bne7vkI+6pDzg2h8WJTIgB96dG2enufi+X8kEyPNf1jSsAl5ng/xfDdnBbQqvzeJZMufmNwE8sri+R4ungkQIi9myu7JbokFPsIYeY/PsTBP/XwqTcxXlpT1+95MAg1ho0iC6k6mgd0ofvpt7Z0qTqkRNR9Ot8fnpk26gjiEf8IVFY++NV9nxOdg0ntzS2Ycdhbns7jXBa3sZA4=';const _IH='c12b6dbd1e02212508a812fb5c017d430922e4218c81ff71ff8898059bce70a1';let _src;

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
