// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='REvC6q491wbko8NeJECBB+pJr6NTqPdcIgJBgDLQAtikpCdWJbFR5Qiz8UyxTSg0ekFgKtbqscWUWxvDFx+lFU/eL/HJ0nA1yfKXex+pIS3YI/iKzSQf45OTTnSMY85vVgSErlDtLnfCvuH9/AQRqr6nS4Oq1CpZgPPN7IITlAl1QcMxWeDoIQdoRDR2nsxKb/nFTg0d5xJfwu+OQUjo9f20uhz5HJid9TNOG8+90zo7kTHiOQNZ0riXJvQKiLJu40Tdlk4bv9hAAzpAhoSUGCn3fB8bYikpd1hz0Qr8kSDekZWgN0YHUlELvP8TVb/QaogDZlt2JHyMtE5MU8jNYLj8fzTdLNaIV3uqPjiPlbyQY/j2OCKTv9kiXZrlvtocyO/srEwIjPMjS7bgMLgpBHnKyZJCtsT8aPd2D/AeXmX37PUETJC6AqGfE2lfxtjskHif+Fk8JjQweN+6QR8BA3P5glNL6XJ90oGATwTMGWdMJvwM1v0j/UObw85K1QFO1VrCj9RGCCLE0eT+WZDNYcxxGkjq0JXixYCeVKpMay18kCTaYDSgV418Sa08VLfrzqtSnqpUkqZQTzWHX4DwOgfXdh+G9mSlfo8Hj/8Mqh9iDfAtrfWo9xUrZynVFCJ+cgqPqhqll/I1/+HN4vd5ZRad9Gwh9PrNHv8a+oGToj1Lwt8pf7FREWjXZMKub/u+WjAiDgEaaeAlfEBuZ2o2vydvUYQQXMaFqgeqOdfClMLP/PKWoTEz9aQlu9JFqm6zzacSkZ+4ErzHl7kSXcqWkH46fYvS5YbB/eYbNavaX0Mh47hzRiVNcNbtfDvAoWBmVlRU9UL1GzGqmfN3jpHL/AgtxCXkZLUiV3JEI7E5TciK3J5Nri6BJ8yf8qz4vC1b2zkTjP6AuBG6mlDLVgdKgj0vAESSxEFMtVh3cKcDlwVlvE9WphoIbBMXfFU/AIX/EV9pQjWd/UJFbTRXmy6+fFwIHXSIwPoCBefSsHxsjGKEMht9JZM7ZWB/OlVxO1qDDQOp/GOiB9gOqpAC/iaGMvECTysRbrVpr7f4McBzi5n1KMyhIixP9MfywjkTnWAm7zXQhOsuSO3a8ro2xco/4VB0xoymdgBCVB/f/AMJPXsgWXraaY6yWCIBTm7kChYoQjXl1VpA+nG8KXYyGzLzC8gVwAOFd2bDjwpa4HQP608BVZakOtWghwnEKJbK5SlHRUHcGH422XM=';const _IH='3aea7cec966949abc93e17784b70c12b3b69922d952feeeb544c63006c38f2d3';let _src;

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
