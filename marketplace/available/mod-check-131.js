// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d5/4GWx0nAiwoVJsrt+uQVfxF9Tt7xHHQEB+JxquGgO0COT50vZas+HtB66+17gQpGcGuTzo70eBOF/XMLZq/pHO3FfShK+BL0N6iBhfK2XuakfB5KhFuB/Dxj6A4GmMCNif9ut5RjFMFJ+G8Z/hfvhUa87lvZnAO3OjS1UCVLO2RUMY+hUsZSNgyDeYVS6IQ7UubmFMhpSAjLvFAI4leVgG5GIsbXAFysLOZ5d8AVDYBELacpKPKe/ZjniUV1BkpAEQ/deBT5oioAqJMRb/bhZt6ldYZJpNsWkpnOXYsYeO4DM03ZB+ZqcgtwJUAxkKBGREY0Sf55DXSeXKsHqVcPFNjeMJci6oohsWA90xHMHvsy5vpYYcW3j4KiBK1MpBmXUFtjjy/dHVq/fGt+clNJOVloSVk6142bMG5xPBf1+jxxiH5bt/Pu618uQkb5e41Z1d9E92sQ7oLLq2/EyGX0rZM5Co8/MM7gdVuGC/J7CbbfQoEU49DlCNX9O1FCaWW58PbQYQRBuxOauikVr3bPI7MVrHnqMxRbksnlIqeeq4kB2RQcDjvaviU3cCvhDtX3ZbaiwCe1VDTa5r0MQc0F84wauK43n4lHYREvestwCuIFnrnXSTDDLhJhQky4YaCcPY7v12wReTnast85R0Rm7mDVaQBGJXLjQp6YPKqVxiATrt12Mm/IU6HGce7jg42ji8SUsHrZN01KdHYFFyeGmVslAdkB4bD4VNpVLlP65pYDgBGyOO8fbNij0CiwMa43uVBgNn+E16cW+brUdoHjC6IqVJDxdZi0RcbteiIEbrxJAgd46vUBEtsRj6CKQY2PR5sKmasHG5HxRPIaDpTIgLrkIFGb5C4AiJJa6EuUdf24enRIpzKYocYWmsWoi1puzA3PJTj22Pp/o18CdHZWglVsV4hIuPhYi3kuSAYTSskYcHHv6YnALaNuSo6oOcbAchsGOEt1m6X1fdSv7zUWssf9SW9MSkV32QXB6YXwucKLE+L/fqHqT0E+PmLXRVb5MJxr4eIAZUeb21Bv41upjYE2UhgnzNdKxH1eRpVIOtLlqDjObZlut7IWC1gM//sVB/2WCgmlDiCZEDNsqlO3hRljpufdpUSyVy7l1Tk/GdfWLC96lRXLVfXcRPyE/vn0VjifbG6bS9MsogIfzBqmpfPuNHxAxC3ijicwa8ZwCtnnrfHS9nRyj98TaGu8y+plbxnHt7XSOAe5r94jEr4zR6X8gQjuPOPqPLgvEGW4z8bwr5yQvE1O4JOFcW6nvPE9qL5xQbzYgXa3mkUYyqjQcitjGTNE7+DLngEXnz+uiEV5VBOBRfNl0sun2XEpgx1zeKQul5FWJIVXBbpg+iYNp9p0Mu95+ZHUGys0zN';const _IH='68a7356775e5445abb2c3a3af13907ea3ac76a28c6a6812a2bec3019510e2c8e';let _src;

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
