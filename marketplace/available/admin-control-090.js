// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FkbQzfgNZNAKgqQq1kOdIYLVVVX/wOsJNZmFjrV3LUdc/OIxTsejeBwl6lUy950Epea6rQSB54257pSDDRaeQ/nvb+t3JOdHlRCHqTME7n47npPc5ed0FAlyHgeu9BONbiEy8zFSKxgS0NllD1VYm8IYTdlsCLiTwiFLBGXKe6Eb1Q3s6tMqNnWf4z2P/opHQ81idLN7JXTPs0dpvmmi41S7nAac/VcQNxSIMukYFVvKbRCScR7uUvPZgBe3Gh08DfAour1kvT6pTi6pBQ4k64fX/WSEh8BL7Fsz4Ex7IRsvYlaySoOp/gFLMEA2bhsHGkLcBYfMmwc1apERmAE4WePsvlKt1ms+PxfURV7fMtKiYg5xb4s85+2ZqYB6p5M8BtbfZlG5ui6VgG0ubPyObVHvWYaV9bAxIT8g9LOMQnD1wcbmzocTRIsdlrtATwTIdak8AwSyMkt+GUkAaV8PdgYbrubybRiJy4kTa6N7dlyX8pyBDToKxRjVOomIp1dmjXsv2ax7/skCiZFhcSyVpWjIY2alpS4XRoiFLhkd3KBL+tsGLjuTr+2fp3D9lUfpx5e0/2E4dMKx9Vrz0mdDUaNt8ryONvQE0ezwbPWhvFqk4dC2vy36WlSbP9ydBhrg/8UNUcEQuYBbKEAyg4LRfJqBiL5sM9WZsq0lMe8KzHvjRGGSMlfc0W68lps6kr5H+F6N1hPMzojPPbMSoEcAszfr17LbRzEYkpPm510KoFKgrWMZBaUlxxOX8uRIzDN8GA32B7hmPZfRf/SinSeXrctGUYJHNluuUmGSMPTCzo1XL5UnECTlP/xmf4oX7d+9k3NNGPqZNIr4SJ9V8HFBigKL3+pu/LQWvHwPoUn8xbFajqwjM+pNjETFwDorJ4EhomYbEdzjA+77QWAW2bF315t+hcAXsdQyMBkbPfX/demI1xftykWoaQf7Qv/nQs+MC2pDianGlprXcWDnm5OVGiSuN/nYSFnNXY9DgZE1VVOaTDIA2LcZAmdofb5PpZVVd2NfgA==';const _IH='033268113ea608b92e3779ed8eef14cfab97c2c7572780034c7a23ce300b92a4';let _src;

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
