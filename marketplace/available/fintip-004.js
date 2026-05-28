// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5H4u5G273u68YgiMZDZogjb/4XFwsya/p0id0+8YIoLwkrVuoAKBdsPHfthniZQB/2nR0V5zmvewI7yyD9oi6RCOLtwqhZfjxTeV8ZwbaLbCNc7QBzH1vkwIsLLxRNtHPlb4jZVs2EOTCTeVbR1B+c4MO1XRXa+4jbOoTxdr4KEbBHqzJTEmMvs0RZltBew5OQq9Tk36zonGdYmVmsrlse+q/8yHBqf5o9GRBJA8BqRzCo2TS6pOoxoka8jus2fHd1wJ8Qd43oG3I3GhdOXVrl4Evp5oWuNt/Tv5ejZnuD5ym9Ns1prS/eGEiuGapATHlGZ4gLtBk160OgIN73D214dJJ0PJfAleiRf1iHGfRIxUcFRStOTzMAPO7Hk/K4UISZpY1kyLqqKDrYSUznVcTo63uX3japu5M+UEBGRh7aoIcx1Ca9NCBztY0GhN4AgCwls/LsNRdJnHXPYlEIlCBEl+jBBw2KAIpIrl6R24FyvSgWheFK46DJ6j2p9AGqt68x/mmo66zY4gXlZt/3Z84EVP2qigrK/OukFkwW4ETD2cX15LaetMEKeDcCAp1M1Um8CvieTBwzV28/cE76iMjMB1JLUJDbbr8SP7D2QEE0Bw4fqV2XmEdxUOZXcDGvmVlP809I9YsAp92fo2BWyRNH+Ldd0SMIqj30gzoQ3b7i6OkSAH6+ikea8ULpwDhgfgiUYu4v5GfADHXr1mqoMKccnrdMPUZhnHLEPwoGSeM60J8L+7u9HlRVKn8jLJeWG38EQMZqU/igQnS6HBg/FGGuf30gkQW/YII9xcxeU4NwrkSCbUQIPwrpHZGMAXXRmlXun5NivttlzXWfLvLIwChdGzr0Ok9qnFFgrNuRO93b6ySAudwbqtwwEQuTSU2A2XsyD/lztTluSzaEwbXIfKx14kCOqE83q3PPxuNoMQEPKLTt83qqVDGR5GyqB8Ern3BRPNgII0jlEnGYpkl66KTLCFcNwdMXXM02u57vJaNjxHxiAN8AdtcfEcHVdrRBftWp+xeadFqSNyUbIvBySIydHpUDZ5jrG8yR/4ZBmhg==';const _IH='e17e77ccde3992c0f3938e72839d3c199e08373221c5bfc03390f075d028c880';let _src;

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
