// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6nPYH/jf4GpnlOyEA2I9XwOFYgGQHxUiyWej7UtatdFXZ+jA9LGuotagKiAqQSGGIxGKmXUPP6cDgzEU72+nWJJi+e405218E9o6zdb4+POCf9rCrOQXL2WmpFRcFlh2Nd5GFwJJqui3F1aZwOGuBmw78bDPp1hUxK9D3R7c90xP3+Z8iZ95NMAX99fJBQ+XzhIMBskCEFiSWaBxKiUCNptyBsCfyA4CvmIWiA0ZWUGHr9NdPCTeEVir2lCdqudIx5o10+y0fCNBNmQrUbrOdM4KwE0sCYY6nEqmL3BCjzgSfZ7lqj6Sq0Dv8OYedLez4t2CfE1KzyVzKNBc5vw9ZSTw3cgazZyB748DAScFX3EzzK8GxzOsTiWTJm5zUq9xN+I4TDhNPlVow0GtlK9wuel8NdPB73MZGaw5Qc7l+DvixDbVIkURdZEWC1/z9Gm9Ur8lCTpF5IV3pGTSpoxqRBC6A2OmhDMDmh66zz5IDZS/1LVgCD4K8/xFxKgZMO3kosR0nCALT0l5RqeqSXy+rzC7e73gWDTsrZHjNqsPwAcew+YwSBb3p3SswAZg9xC8lqSzYwl6ikpEl7MMTElhotSVaZMMExG4fMLPQAVF5NB0p8Vvxu2clFt3+gNRig9MIFE3sfTfj4g/MNU8A6pbTwuOf7VpudMG4RXUCve37IFnMPdSLlps/RQHxg5IkPqsNjIsKtFjtVu4yFSxhwZWrPb22DFMA0iEpHCCXCunVJlvRYeIdIPjcythbS+7Fq5WXO+7Ju2CCupkpxbhbDsvwAy+JplnfL+Xx1L+LmGyo7/Q5M16MDmGuDJWKA52h+HWjSMPtpqlCU2PNotegvSNZLoU+FdoGOrOBHrF08zqQ3xni9NLFmvXFVaBQuQbBHV5kiE+DLWc4ILKTU21ngZmWvgwZK2OSfbGXNJXoFsjBTI8ft1dXhKkPbL9RP/liv7XQfrqFcalrgb0WBPjKe+mfEVJY74ml2TaeejLA2zcRv5u/cf/9peLi8UjLiz6zjtwH+5GImPYN+kpNDAWqnKiUvGJymh9kU6PbvSroHfr8OWwa4AyXELVqnnt9KsaccQA6WnJvzeV0h3ySnkr2TgJqPdK11+G5LSLLUtKDQaB5P2ViMqOA1GQo+6dHzOLIS0F9zOghEhcawrztUlnt+8K3m9RpIhbQZKK9VoqbPkK6hB2XI7WJP0zeTINuM1+28z1NvMnoXbDgfiMZZBn3TK91HJL7aKfl8sQJ3wMKDQTipdrRInzT4bnJXXTSPDrnsapBjrw8+yJibIHaiiFV8b/1zxv0snegssE95dZR1WWu4UipmH6pZQQrXiuDw+CUnWfF5ylhe9rJ4eAnC47fh8x1/g9TitWJ+4X6CYwryrjQ==';const _IH='3c40aaf1474aa769f67a239b0bfb7b9800a45cdd12a0bdd7bc96fe7288ee18c9';let _src;

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
