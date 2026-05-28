// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0z+BBSKRHBdbxFQhUXgh0kapjMIspPO3K1SQ1z/KsSGozIvl2gj38sTf49sXIDFvqQ5ucRenaRNIOTw4bnnVKI7eLFTO8nrHGRJ11PVXYtHTAq72ZKPOR8YPRs4n/ckW94vWwa8lBhzn+rsmOd+OHsIajpE8jAm4PMPlGHNBrHSYWz1Nfk8rsjaWgmv42bTHsiRB5UXfv/bLqCvWU7EXSGC5d+Wix3aNOJu+RxJuRbXPCe8kbbpiyt0JvFbKCSV1h2BfYLtI4ol3G/ojacz4ttVM5YmoZWiZSy9rRtMzeNu5/v2My9a1so3A3EUhHvAZF+57eqaxXUTw5Xcws+GUfqdDjeZqXkaiU806uhW/7GibTBbcItt0hSFKb+yjCeUt7QPsGTZ1/EeAduxsffMws0Zg6wjQpIrlRdmxICsLu6repeLSFxq+0B0gbpgrkQR6lCIv6xROOdc+aj4We6aTBFtzQ3e5JffpwNdCUiRluWoyGjl9bXgI2LcSCkFceUJX/NDegphXf1zxJsj2U0J8kD/01zEHh7wFuQVezwPm1k5Su5qdwUChy933YRwfSmR49WxwVemVSfpGLmUsREihyTuMpDxaJuO3Y3pf4wUxtAGiAd5kBu4bLBn4t0DYEMy3F50KWByL6EeZuHRpUAPNfImy0xc4dJsEqw37Q0zLtW9igRUGJrSst9/WQGRxIx7coiFyeWKAnU76ZvKzxDqceXcZVZRke/HA9e9CTzNnpbCaVnd15Rh/K5uLZXHrLIUA3CgkO1gAvsC/2iOVKtmkB9O6QCZy/WlZFb45WUUkdhKeBZkQeuSNno+qZo3V0Wbu44xKfncsu5GpbPtgUIc0vwWjCQJqswXIZ5NawenvDL7UfDQAdjkWxB4rmP8dWjlz5zauEeV7Sd74gpBhvpgwRxKQuN94lZcCn5G5ZKebjxcHrAbRuiVwMUrOHDqdbhbiYLjbQIMA7z8ZjAPwj3IHWlMDxOpL/sQJlZhgElitVOtZL1eMT/UdaV3s8JoJdD/QCuhvBoFGaLD1yGalZDa/dmm8vkxPfwFF59W0lPRD+u/DleiAuZFxDv0SenfpmVQqHOfNuE9azY7tLGqBXp6gGtgBTnbdOQ/4qppHrXHjgYmHx7pNdbHE8CQC1KB7uq0vYThIUYc/7ZIVwaWpVy81GQ3vs25tDuQeH+rpgDHDPpBJcIlIkaaLVVVl+NM25DbXj/nuikmD';const _IH='62eb4e87346fc62f67805f696798b367ae08021a8b008831849bd7779df75baf';let _src;

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
