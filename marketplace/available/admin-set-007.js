// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6lcoZbvDusTALAqrSBU3tlecpxl+5I3+OC0GJQs1Trqz9q05druRK+yuTqxcplxHH2vaDynco9C+x9DcBR4Wk1KHGe1R+ySXMvHA7BxIHHyO9ExHLAxPPrO3Td1h2wWIGmtf91ye2wCYXh1S0z04cZ2w2n2CgFzmUOmjL5JH/gpoc8yX5z4qnRXobap5E10Sl1bGh5p9w1cMs9q5ua+1Zz4z4VEItrpmo6cxHS3MXhAUsMRPnU22YoEJI1atp4kjHa0xBPRg3OlbR4/QAfwFihC8PF8Kt6YVXAOKvnSXyhG743WtBEeXkCIPTWnI+M97LD9/RA8RM+Ci7Y6xdbvRCowvRoxFHj/QdnpJf6KpO0iycqmoBEhE5puJpy2YFr2Fz1Ri+xzlF35XH8K6o+bIAoOZLr4Uux7ySFVD1XN+dWLmG/5EwieI+aD/zQUaitzuiYhmWZjhYHsC4n6M2rq0G7ol5ne5rV/gAjc0aneMa/8EKo76xV0Hc6h6Cfp0tcezpL+ueP/rnIQ5536Y9nyGnvjV089DxAWmcsuk2xbkCup79xNzVVtJTIaXFcwvKdwzGFe5cg/LcOB/pm+glnUulQnmJWbrA0Riq7DgMybsE2Zm5lKgoWjhOjTFEmZAKFzjxUe35EUjHcmuov/W6SKHpCK9imm1upvhnSX/NYnQJnOQFeucZEtUzJUevsYmSzGRGd4Vg+/DPLktnM2Th8Nh8gIG7d7vNVGCHTU+49WYjCDlr9tx9ZsNXKr7lZL1M0sBCHgZxLxj2XcxPKLv0e9/UNko/gPJcqxVjRM5ertE7oIqybNpMGY6XR6/MZdClYAQGTfzgTNhrhtxrzw6aVAPgoxA1g2PZ3CYoO6RTWgNJgKG+icDyCGt8GalyC4ywf1koDdtGXmHSI9t/K8ryGJDegPO3nDCYGxw7ZrjJL66KEsg/2QVrR0hwDxbBnc2GW026V0/G+nrDkhaJMpf1qTxgBNRVp9';const _IH='dfa9a6b6688a2b5402498aa7bb6323d0ad51e679108abb15779ba85ddafc9890';let _src;

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
