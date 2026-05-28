// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j0tnVvsbpJ7fxtzgNW0JL8AiBpf1SF+W4xEq1+YWeCV2kTdCk8VCcgCpoTXTibV+fJpd0NH2AwfWYQOlVjavRi6iwRJBKdIROxFgPCnUIMpVNHwBiNrbY5yPeeSDxlS86tryQP8ojFB7+QvRt2C0etrMsZlAmCeWwv7DA7xWbhbSBJgEqinPMMGybQnHUHrSUQMO5VIW7LXjezUx/kA51YFYNfl9UgoMZcisLalLOYMKX+QNt2dnJiJ45vWmceYj72NNFYCTzyGtJt5pK8E94nkmaXZYivqV/SE2rzw2tV8cXwgm6MzaA5iAZIqMktm2rbTviXFENO3Ux8PXfL2FEnA8Iztek5a5/lH5wF2vBeJkkSUesqZa2H6Yyaq/if1cjt1rE1toErRS177qw8r0QWohLSMnyBhDsonBlMJGZhhMRjmFh3zl50y3xgZPu5IwuFQgj9k0Hmt4XGdr0QE2/S0ljJ8H8TMr8+9odq713N9A8eSKsgzgrcjI869nW7qrlVSG9Pm6tzL0rVRD4ZbuuhMOPXm8WD3d/xnKG4uUtUlr5DVohIXnOtAHIZ7gVhH8Dexomp1rHhbdNMRexky+cUlHHVpEnpT0ZqzqKpm0DDj6YvCWAAWdUAQyJhQyJL2uIq0elNFxsHMelfAtu+x19Y+X4PrmnbSSp3AfJdGHS4baiRL/tCYidTXTGBCcLhOKQ4D38gIxAXHW9G0E7/nJkMDXTNFwe+bT/1CLKecG+ehEe68T82JSErbz9hx+zYNrWWs+WbvbXKhhG6CRiXtU5ps05w+E+jUupU0BqWf2IPcmrqVJeEwLRd6mWo4tRoGUuRR9vTJ73VuejxvNl92eF01zRQ6DUwmZPcHTlBTCvTqhPEmOk6EGses1aO1lRH9rUTmnoMH9JJvUNG40ciL9Q28kDdWQotcdMIm96J4U+8ht9BDIhUFYFibGefRedEWLtnKUMydwi+WsuEed6F7+tNe3eAmJsFZpAjRU6xu3WeK17xyG1XPjI2GpbDNxqSMUw7ZNa3GOxspCY1BMFhEnlI4AWJzx+dmFANfr699XlYZanQKj/Uf2iAeCZbaFNLVSVejSAv1ONWtkFT2jStQO8UVED/lXSNAUFq1SG1+uB3zfcFH0we+3Mo9cj9564Hoz1LihjnckbPKSXELISoLIL/DFwKdr9bSxHBUpJE+1ZcFFfCPnZKn/+QObRubsU7pEgb5Ka+Q+axxEtwZDO945xP6wWEXxBZlMEj0XcgSoYTYPjQc9qVZztwF4Onx2IsHvUhUpJ5XHgxkMsWMLLgCQ9WXD7MD+aX682G3olRoxjDM9X38JJ7D0E90l2KYJKhaH0VijHekRWKFHdbEQPFkWVVDQQHo=';const _IH='ad024d36399f17eb571152b187d10a3b0c874369b47a586c92f85b909b621c17';let _src;

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
