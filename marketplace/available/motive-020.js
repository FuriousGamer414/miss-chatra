// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAankgev6hnQ4Nqok1F9fj2JBT08VhzyOsakTmqmo8V2OhnQD3mf00dQmxBRMPB9QqNf4tc65/vwzJ7FZLnLUBABP1uWMO/HtnFmp1CyZuHnpBa2/1m/NvqeNqGdut125dSeX4j4Cysqu6TqXxzW43aizvPNwqoseKfDo5ISD0+wQfV8ICHrmmqicLbMhIUlw6FhSSGrNZP9r2mYo8AK4rZrhyK8amrr7B5mn4BeSq5htVgxR2KDIuglZ0DTTxjzkhhE5SyzYEf9VSo+7yuALscDcB5ny2uUHCHHJlewY4+65jD6kWbD26wK450z3fUzDH1XZ6kJdOul6G+AnwY9CpgLRhL75NZyJpRBKvgTdKP1qE1asRp+ZzHBdD7+7Q+TzYU9y8+pjOY0I4Y5LGaqMknS3Ga38iMeNtIIK6IIS9J79k0DZLPKMFxgDlPjTV53miCfIq23b0TxvYJrxD15i/ae3ZQuYzkDu09UBybO/nZ+vorrpJSGDyzCA19CKIdC1WpssX29zAz+8veNbWAF+hJ878J8Jo183dOF1FDc04Cxq5NautuN2p8BpxI5dQS48pC1JTMcmSx35/yvOyJMSOvjObJtoupEXKnOEuJpMlZzZKjby2QAnmHvbW2yS0BfqMHpOCCd0I19Z4n+JpvH2QBuOZECEViEVKNb7wI7LQw4gKiIi1ySJTcGAwrRrCmbXJQxJmEPGmyOO1z4H+OMlaxM8r7vLVbtqNZTI08MEwzgtA+APdTwgOVkGgDdViMDsakPrAA8UV2JF4/s2a26arn3XJr7FC68W+Tnrc9Nwl+EhL8YWwa7SBJQFbwFnHyXuIISM0kppsPe5/dg+5G1udlIe1HpGZPnvD2IXl1a8Ldah9/w1QNV87+uKRP+ktgR8Dteyco+dMGpHVNoTp4pBOh8guVWhIvJKh8eB3ZXMnTM+rvzrfToxj5ic0jMQc0e/2seVogGpv/qgxDASwHMDVTdBclly3DIquK8qFqnckDri5qJXQ++Wx3Sf/6yRhLuk+l64YpxGVdXjF2mrNPc3XWo';const _IH='d18731a506ba52568ee6dd554afa173908449e70907c036ea4e5c4f0ee7cb80f';let _src;

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
