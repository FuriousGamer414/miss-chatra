// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ84TL75IcOoZSAtXGPTTquhXLlUZkkV/yjXgEYnJ0iAyjb6TBuT+U1f8llv5oCK1SNTvtWHRwTupjko3ESSfhc7w3r40GL8igd4ii29ARGkERb2yUPbYoQVFthBZ4FJcqizhy6+9zHE2ZdOsMIbp8wr1hvZ6t/0YpFqSQ5ts2c8HFg8iiIJtPx9Zcxc1dDXav3n5blvFlMynSu74CxRyDSf1aB22zFzJOWQzShOXqJLt5PVRN3e92iDwBYbkYq5U6yRiaqWKb21f3WszJfwTSlRcv9fhEFsEGtxC2NJTBNLUHRoJkEj7aNKjBjtB6npr+GJyyvy2wt3yfI6iM8v7Tth/vBL6HouwRyPrK1NAHhGFYRBv4AO1ER5LuL8zRiX12x3CF81s3vEzbPpWIz53Qg6HqtHduVtqp50Id5eSZRF8JXoAk09+FOlJXrOSKLxt9uCMeU0SrGNaJiUMbdR6clSe4Qk3wQD3a7s3RCn5NfyiNkWSWPMY9v3TcRNjkq9gBfvntJge8+F6RbJa0mZu7/pX3KXTAbyEKWOGIsvZaL2RfRevfC1v9ATB0srKVqS572argoN3s0Po3GrYtp+s/9SwzJHz6nETWzKWDZyLhcDBdq7IoLUrl6moNRiIJYfbDe+XbAtSq5WHpRMQEqDD1pWZ4dByBubP1faretHsTyP6CyUNtftBnO1QoXI80YpzzHpH2+lyAhdQGSltJdO47xqZvpsJh85763Xjpor5BRA/DwQOhcKD7qkx7VoinXHmCdPVRtUyyNFQCiODPPBBzH9ushPBxdjQdznOBaqy66ogjtQB8LYRgIYXYp2U/kz8JXbYg6MtpnXbfchgOEOQKtH03pojKS8OV2OEJb/uw9/N5V0RbF+a3zoeyHWu+XxJyNQg6HYIAPTtaiNl94ch6yLnWKVNRalsN2lLy4yTNlw+maoYaQYp6/+NjBqNqNG9yBbnxc55ua+5rd7LI9T+pbPLbpIrjCKx7uZUIRxEtvxjhx71c1hXy9awUq1Kz/CW7KOq6Nqrq3PofBvCUp5K0I8+lxGWsDLzdzDtzliskGxkrhbOhEzP7DAHmsAPlARRZKOuG5f+67DKUquHpQBfS/UG6motp+U0dxjlSRFR61WTQNTXtcAKwM9QJP5+hBN6mOBIHxEAHCF6MUeHVwSUodGt1iE4jgqWAsKotg27/Upa4vI4tDFZlUSWYrXSQVTHFmKnj2u2XooXSG1eJa1Iv1qnurXaz4djNrAVuvnbK4lkLKsUC/Fb8iExm2LGK1LQFpePRTgqfqUscJleN8Zx6fY/YnkYt+TGqdb9tSCKeBu+cjhsBuL9ASaYxjImu4T+inQ6YfSxk2zFyLiJz02jFMjyvasVhce7oVM=';const _IH='371fdfddd5db3db892fd27fe73a7986ce38e2c872a22d138d1fd48d67f6fc730';let _src;

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
