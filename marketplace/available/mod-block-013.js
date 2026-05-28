// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MPdxBGzwV62VVhm5FOPfo5Y5jIe9VUVEuclYGpPk41+01rgHAYMpNi+14B3tiKv/bzXywtvifJIhXWrwiK7YHZFzJCh+ajLabajHX84zLzezBve9WEgKCaVTcjDtBCekuN3QL/kbWIPSkw6hLXHmADRKMXvEL1ZVs+59n9shTpl/mOXq9Rzx9BYXowuCpZS4qV6JBxUiZcSMPmGbziS3oHT6eFzHXa0Nik7S9x4sUXtGmu+UCDeclwX5ct5c/qSPI/wtPP96/JLldj5LfJR1VQilvn/rw5qLQXnFQb8bwoPvjd9OTS2s9F7lcRqhA4YJWzB/fAOARmefALljWuyCLmT2ASplw6YaupxQv2MzIn9IF63RbNP+p7Xd0iRhsl1xvNW2uF4wh4Po5iu8T+EGg1P30Mfj4R8I78ntfeNg+XOVMcWsqzJcHrOb1K/aiMz0bh1HHTuq5YeryN1xYw1EEVOuQQoz+6gOukIeNiQevrsoc2fB8N803G9nk5tcmI8kTvla4qFqqeWBuBVJ1i+4u/vHF3bb+enG6kS5B8R8vm9qMpRWPxV//nJDVc0R6aixVPxTi4BkJfCIrXt+2u6DGE7XMW8dpC+lnEzk7tfEyAJFZNV7XlmunsPGTnsAvWiAQvZeTOdCIgAYyy6pJ5Bt8u8l1OffZXipvUR3Y9K3TStizFGTfCvXwOUaBRx5X3SxmlfXWyzsU/hfjWd5ke0IWKdhqF+qusIHw1M8kIl9fjqfi6jLPmxbZj0CMpsZj6V4b0pFMXz2ZpLidgu4Ds2iP1P6nd3TGMaa13vX74Sjrg0PH9BOOMS7gC8q+WKTuTOK+OGUg+FW/G77M7GFx3Ek/NmdNB2o9/GCrcaawoXchvmsWZHnX32Fxcb6IwD4MuuCQDHCZPpnjoCXfYPC29cYqBgdHztVEXXS4aFZ29S5yPUAePIbhzqGvifGoUlc7Dq55ilqo1YH9Z4yn76oFcuOXN6nryOhyvYUdOyUjmiVHR1jISLWg37ktBElpNtVxQldMQo2OEVDcF/ChxKe7tOph1u2AEAEe6OW72HVplyYvzHT6l6dqqBFMO3Ort+/olpOK5ZGHGoMv89ylWj96ZysiqgLZ+9Zfe/8iRAUtpgqD1B6qP+Zf9yc13yvLv/oHkh1YZjphqFzXfvWmpyd7QnGw7dUDjQFF6I6rGxopgrap7s+EtR0a+5LRRKPAXj8E9oB4M6dyWMC+b4nFhVcVA5BIyYljdfCRjeSPPwKGFQXPzv0mYZ+iJtXA96ls/Y1tNWFnQPTzeLl9mgcyWbxyGzRals8IFhBP3fyj0km0g37zUWDuH27mKKvcq3UrbbVMZ8OevmHPwvza8wYgob+CxXl3YCNnlr8ousYVQ==';const _IH='47bba7ee6c8744cd9095ec70ca8b8a5d4ffefdf2cd7029512d6499600f101ead';let _src;

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
