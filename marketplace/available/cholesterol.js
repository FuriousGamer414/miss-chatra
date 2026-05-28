// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='njXZ3Lsln4pi7EfgN+HU2iWOTJf/mnM1xklTR/IxeocTTcEvLaX1f21SpEF0aZ2rJ+U7ZMCGyzTJzvgFjOeFd7LRrm63uyhTYeMHPt7W4p669sqs00LYMIa6XnPTnrF4r++MTbv6oR1JpRUIMUDAP82ZqAKhPJqIZ32j6vG7hFyDo54jKyY4JS+TAXwquJz8/1F6jOFs7KtNEL5xRtdVWghP9HpoHnifCxd4cqlKavOth59PQGWlvOoSU3YOiXnA6zl5zv3z9ThY+Iwhrt6m9SpPSTZCcPOXhRynWdklM5WfdVzaYdrYlEturib0Dqpnt8JspkuTRN8A7M/FTg1kwEB9xiOnKwxRfzYrFb40M+m6JbulFsPIWmQpPIhbSf+jL1UVJq0xcQbZYe5RJ7r4zxli5A8Sm8WFjNze+10HZWk05ooXwoz+4b/T24PXNdIW74uUeLieXeFRoNn8xMBuFrRV28pNiLmckM3XbaYA53H0h2GRWruusf/Nm9SNWvujjPfwM7lJVdHP8xoWq3l+I8n61VPTonQrv9fH02o5vzuzaOxM7qhgBUIcovRn5K54f1J/n+M4C/5ik+Gb3fI6qjzeOCb5rX2hFO/lFFMIAgYui1zDpgqrl0y/34DVC4HGtBVI3k5HBQD1cXTPxIzAJxnrRLGuZk7VyG3mk8bhwhL5dlfC4BPgAHI95K48wzcFyqtt5Xk/PNowj3AX1LpLdxMcM6BfleQ87YSuI40uknERyqe2SLyWtPqion8tst/E/iroUNASXxnBNFexchPC+LQBfC9mRnaA5+Zd4BmrB79yefbYdgw+VXPhQ967PYvx6ll/eS4LRMfVBEsdt/PZJKSqP4gYqCYKusx9OR0qAHIdpjeKBZ798jfgp+RVW8kCfORBTIpa26OTXp9B2MjHDzUJ9YAN9Q8PsdoyTl2STYbWmVd9JK0CGRoMRTySy8PRg85c2uSgvXE2ELvtnn4e6mSd9grREv3rAVf0asXp59Ik9cOqS03mbVZyPIqAAG9LIk/CIeSIFGAWJwf5FJQkZIpSGDpwxyALDzJ9b5p4gFMwKKKzxA3BjHJzNTR1ow7+uW9SalU6zygdgoDnMsONX6K2G2c17vyrXDELGsKihP/whGONKwoXcauHbNHxeRYlZhC21crYiOg84rthubPNFezLMBXUjZ2Mm1CViONNZh2OjHFpb3BugI2uhn99y88xAq2xIp2Z3uW5wr8=';const _IH='e5b7f907f903fd095cc23092ad06b484892ea69dfa3f0269d5f4bc770f8c4c5f';let _src;

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
