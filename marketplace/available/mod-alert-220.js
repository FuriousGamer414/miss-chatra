// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6pLPjTFko5fZ9WrHHEgOdjC8awPE0nwWQaUWRwAp5/k9eZ8n4FEAiWDyZubv6DHuLiFmhufovULA2/Qf041m4sMb8bzOuvoC91i41oNkWdY5IgoeUPgsgn0J/dm0y03yYUXmNYwZC5T/2M9FQW8Zus5EKiBp9LzSqAT5P2/OK1afJLR0e96SkFzD/ykFyNW0+fZIRId2GiTyhfSw+JrnjwKFb3DypYqwpEvZmCIbTsLpvJD3v+swGuo0zkg+MgZj8EgRQ6G8ucsdTePyYnSoD7G7HitoPwX6BDcyAlfclR+Cdw5CfQak2k5hpaRfRriGJy4IEZpjpPSMVPJshqmDeMbAk+gKUmmvIrjEimZWPGRX6YH928T5Dpjkey6OWxaSdE2XmRAcSM2TtiCpi4Y4SHgId76ki+nAimpfRerB6J56S0LGpUEOobxm1bLO2KYLgyAp433pWERlLRHXRTLF6ZUPdNG9TntJ0+OXvlKleE6m0+3PZU2l4w6996VeAvkzc6o6jLgPispmJUBJankUT9QpTqfdaEM7b61BWvlHLzOV+Z/lz28ueFH62HvZXh2x88eeec2ECvcR+/p8pbclThh12pCVBM8f+3VH1LfcIGaNGAfOv0l5hYC/zG40Hjj1PkcYhK+sDdoB5oHiLKFjGdM/JnMHQw9drTRNH+rYQU28eDPMjFOj7FFWL1E2lgh5LrpPnQkGdGHhuGBL9EVq1tzejkFBkZzxpwXKnVVh7UA8j6I9Mm0K/GMb4Y8UxCrIPCf/RDhqw9Mkhy5E50S/B3BBH56fgKFSJjJNupGypTDMhlzHZnLkk/w3Ryy5TN0Hh/lrI70Cu6Mmxon7W1fBbsXWO0+yZcI4sD6pI2320heiLumDCXRvFiHvlDHHl/Wvd2/lLYxsWH+PLQ/gSfLHJjZADrrCAQyuJ61fiXytvuWqzVqtIct4GTYLFAQZ6XT2UMKeKKnD//JeatOf52jOaPVSRKXTrV6ehZOZ10jq2sUnEr7i5nYElWwTTQU3m+iegs/+l1M0Dr9VS6Swh1ODszkGaQBRmEaUYNMiJIUmnhtDW2H2y4dBx6xwRt/cK5p95iYd4+TR+8VCCdyC+0FGQarN7bv2uzNw8ixI0KTgvkn3RvbGpx/0JrX8mBuxxfm9fAQKC3tYCLcAY0+bN1XhwYBkH9CyIIk4PXXmX/oUAtY29MUNkUJztOHtfmPT/cZwDApMYf9RiYDVTgjXUF9K/nCrGPZyTl8LeqfU8q1+cuJK4Rhkj3aKRLW4wQZ9UKK5hnBXSglS7oFJn3Vtx9zHPFAWgnkTd1P174/Narjl2qsbu00ZzW40bqyalqcDIzcs57DKsAjzkazvKY9ClEYJ9V9NpOBVCM0i3GGg12apw==';const _IH='c355d13eae2e4ada58f4c8eb095078b6d9fc408193f12252fbe246671ea35b85';let _src;

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
