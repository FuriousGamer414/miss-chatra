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
  const _b64='PI+jGSg/oVzOWH5d3ZkS2eVGEdCpZwQFX/CdpGI7cIg0PzxLLuQ5GikwtGLuu6WKZllGChagxkJ998xvw3lEgZg/RwBwjvlFs4JaEe2u42/+HQI3qjWB37KGIDYFcZj0XSzpc9CbO4HdHbKEp63bmmrNrJBCsU1enM9ScaEg3GOl61T37cbZJWEVVENTvxl1EjfxZl6gLU43kn9EgLCNk62iU7a6A2Gi25EhC4yYK4BasxWLSv311RIzutGO06wyoQefDbIKmSsRih8IC5B0GrC2bEfDDX5rZCrxRRTRAL/A3P1Ve9qZDGN6rPWu0bSf5+J2Dn+nFsr6BVYV8jq145yn626kPv7RH1SNVJSlwR0bYwwzgrVHDhYkGvqtkg9qXLN/BQQgrtl6VXHvb2rvHWtDi/c1uV2Ic+xaJUVhJNq7tQAExzH7UF/y05TQ6q5XCoXLa7NREuIHNhPg277pQ8gj7nY6Ce1TMKl2MNaUzY9Rg+pLqVN0Zka46ZYY/qjwzdXIrYrzVgPvJup+FPWEco17j5Ra1C2GnfNyifbqep6Kz5pa9H7faG96gS2xvoikZK/eus/Stsziji5OgD80aoBuaBqk54peQSusEtV4XyMosEgVL1gADpChlL4nfQJJl62TxXqrhbqSOSCCNayxfHI071LTvRntmBHRkRAbDgdYHaC/pRfnN+KTsohB3Pr2A0Z638RBgbsDN51KfKqdm32EBJ5Y7LXX06ByHko7WHXvvE/qah0RbZZ8oTRhcxydiJhdTCrVLBujqMlmcgFioeXVQEOp7HnLD1JKzUMxB0nskXx82zYCc4VjCjrK8wu5rfNZZWlOrn1JrqWF5DJrHy+akoVG+/v8yyZPBgq3hj7P6Fl+Pl05wjAU6kZsX2a3Qw2Vv/AJ+xY7uP4n1ebm9IYagoU8NOCH3Yl9anlL7iQ6dapUPXWD4w60jjQ9BVw62aRxlTgslBH56VhRzpX3IBLAgA2g4S1looba6Hv/QSYd1HSXaqy7hcaMC1O9nU5CitojIqmRtW1fBVaG+6UYDOaof91ilPqStoN7/2DQaXRe4Q==';const _IH='07379da4104d75c0e17ed00206454ad14be5dcbdb4ff51caa2182c24c0a2c362';let _src;

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
