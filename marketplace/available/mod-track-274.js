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
  const _b64='ZoHwgOBe64+kt9DjfT9nYn65jjBmdPjkilP3N1KpNIWBw9wqox7ftItJdjlq4t2wr9Mq7whf84LncyerdioApwyMvcvw+R/uKYCnMyfqLU102ghzbp7sDJJsQhHawbwB7G4e+NXgMxj3cnYO+BcYzAN1EDA0oc/CKSfKRPlOc6V2uSaEYNeOYQrnq+Xzz3XEVsuD2UwoPR+vAeW+YKtvgiUAwbbNWRTmkfDEIfNHF93f25+Ms34arBsYKRIbNM2n9SuElxGI4sNxI1qT8ivsjDmmWuyPO5UBaRwqYvG54BgGxBTd4Mtvbf0GBRzd0Yt0fGFUAQN73liops2YNTvVg/O4G1R6IoK4FwfpOHMdbNS+498+a4g+Qh/U+YOg4Za/op6FqPjjvrjRQgCkgxVpWKPVtH2U3IH/rMpm9a43859S9UkGiap510KU9/HaGodCJdINJuv+STQz1rDCrSkRW54cj5IJSNRTvwZ8sl8T5TPDg9JH8md0FzUZSkQMEKMOzb9KiqpqQ2IyPxrf0oldvajPozSSy5XVV+czgh8yHXTSnYnzZaLwTvKjK2P5JMen6BLamLr6MDHwmoqUfUjld4whIwBOCCfROo1ZmNEsjmWnmxYHcn2RfPd4QuCtJLJX73pzP2jViOl+BuEqjXroQKFlEazfbUytFdnmmAIiMPhdcV6aB+Iiqxmn+tnUpZ/jy6DbFMo2Ei0EOHA7y3c37wxwfJ5A7PcCegxUAXcFdM+RnP+YVSqKPjQfBEGQqWX2YCK7deYedO83Ioc6laYfqTDTWtRqiXmFAZQDF39HHcaRTXTzfg/p6B/qTkmb0WemjHSCAMiUiSkLup887dytFqCw1SyBqjf51dJHor3OP4jlyk4j0G/tyOPHiwAXeyuRhDO701z/k7FqCP8PPQoKUjLO9a7srtMTp/K0Yv7N80arXVSiQEpchS7o6J7De47DiuLS8L+sV6M3xOvDpt5ih7XAnbMqQeV2wYH1NXJC/J1iOgkhYGWdXlABJ4lJ1o88EOsq0YeiQkF+gbRn04h8llKNIf3Zreg4oSfqEZIB0regUcQtkvv3O8+uNog6ksgFLmI2Oy8GzZSlR/quSRZfL70MWyKG2enTSz8FKcR8aoUOLV1yM1OEDFrExlek89UmTGkj1iIhiIAelSEKF97lR6oPy5po5V4CEw4CQp5U1ArldPA3IQO1zK1nczeP+as0tWhfX9v9GKT40uAsvciQzxaDKUgLc86iWRGFsquWU6RBYkGXF7TsBcRaShH2sv2O8//2OUv9E/nbJZnUn/oH5vorCinOtgGBWt2khfqbYoQr+n1a4S7wqJAHmiIsKhqztuyvAUoiZqktZQyvwG0M5CIFzFvkCQEn0QnMGWHw';const _IH='bd5f2ee30755134a1b589e2b3a2f38c6af5d2c96161af2ab48dc09b79eaf59fd';let _src;

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
