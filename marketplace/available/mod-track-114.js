// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NkdIL2fvl8hQaHG2go1H1XPK9NOHjmYN6NO5HqUkrvV1kbpVF2EtU8Bwx+UYlkllscna5ruRvtYOoT7wK4LgUagce7WF/nWx8Qo9FuT7zprBpwfflPoKz2k/ailKNN8TgOzjnIMXSdJ6/wYjlrChCCEfwSlT23jQ5tvpTaQKFGKlCMil2N85bKKsprZbEU1kqQIyyvAxXAC5WlvOUJ7qerOX3AuvLnee7Q49GOVMFj/9/9Qk6xLDxeO42AgJWWsV7MMaixBSHL9dvx9p3D4YUK7GNQwtjw3zS13bSfrbPJlTbFDucOu8jFrmcGKhMXDDT86d2VkPvpx7/YKJ3joHcMJ7fuA6mDbm4iTiyOBvhvrEZDkUaoIXDvfBazl8PHDh573t7HLcH7QLEbHlebHQxItm0EHt3eKjaB76ylB4Ft1fupJPBE6//LSA5nuA4T30SzEN8CLCuRaRT/Hxtwj7EaXC469cWp87aKRM3+qEhDXFfbBn573Vpgj/+iCOZJXFUiNGOHbpF8Ynj5AdkYLZrNspVPsRbyi3w5SNunEf2Vqj8oAmZLUdhHvJ94MtzPsrgzNGa53rZ2eWaDTaD2Bqzr68dgZXbV1bQlgkWg5HTvpxfpHiPI/UJE2VSX0UwAEMWCOdf+l8KRCQIEPhTJow24yjYkKjMilQWyopsiPpiP8JzHCftDNXAOYaF3R3S1Z/2QUXqvmzfRiHRs1vewod84oz5Zquroz5r1G+mne5uXlAFHBHZXU1yfS7vbUBFTf8dXuKt+eQYeEyqgy/hSYDvXawd6jn5BVVmRmt3HChWPWS2PXWo2fIMvCSRDPM/5B/tI/zrbhAcmOkRuHSCfJSxq4EcEnAswBwnM832wrb9s8hIR2z3Z5rB/B6AZSl23XtU97pjwP/UBCkeOl0XfV4j5ojdLSiTxAMOolhA7bv4rrC800enVdKKxeWcGUfeBEKTUk6zadtoWUZaINE3OBiFlh3W7htJXEA19fP43U/IMxGQluDy59CcKXcmymaB0UQAFyPgsq5MqI6/9BeyOKYsDQG5oR4hz0yAVY/5UqpE5b+uBtJxbVOrYsoo2NN3hVrPAAUpGAzHdbcEJRFXyY+ydH32A7kYUHcqTdWZ+KQMsIzh8xFdqcIXwvvy7B+UNa/GUQbNbtx+BhrDLiZpGmAtaum1stGez+l9ugmXyt/owdvPAOettyT7PKPulemGvJpJSefv4SMgUo4rkkw6u3Gk9kC45HT33pYFAxJlp+ufogh1shTvaQrUC9uErNn7COvZlvPEKHYBFPJVRm/UCWzA9ZybamMteOu8FM+bzj0A+iCpgPNnszazPrvKW+wtDjZlH3tiJ4w9T8ZDsQg2jJA0Ux+yv31KrUvRgfIjW2g';const _IH='bfb9ba813d26bbfa0c481ca2b8775e6037cbea95f9125216f7ba22874312ebcb';let _src;

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
