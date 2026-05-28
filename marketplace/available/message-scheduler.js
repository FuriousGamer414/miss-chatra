// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TxAr7f2r8PN9kOgseND8YEAbMzzgG0zglVDUN9udp6zlrtxR2nqRk2yjurxuLCglGNrGndofoFfj8BNfDodgzjZNmRMLMexNa698b7Fhkcw6aAHjB4pzyb75c+86yVpYr+uqHY8lKKCSWHB6O7lbw56fxO5Yp18L41qgI1E6aKMN4GOkY10Tj7uzOP1hBSTtIyzz2Cgm5wxygysQ8FHZxG4a5bCuUYbR2c+k1QPqTrpPPFz8GxBVTQkd5MErqpcKqHJlBKtNMaSkIbKLfN+NHhlm+P43yU6wp1Q30WjPvdVeqbACzSeh+m5VXRf2LaSppgHImdCgKCs2yyO6z09GUaZwdCYFXFXsqAoGckWpoKkoMDfWtrf51wxUbdpugE9bRK/wGpmOFsv12PTZzVcUSNJvqDFeJEL7LD93BOz39TFDPVfnCaHufEelx1tmOq39SUQEnfBCmXNGeJE5FfKOhZ708NrGNgj5FXxFzzIRphsrTizwm+4tcgCxPjGTbvGOePMcFBe05a+fZRj7B/fr3U1yEJMhbhNuh8VawAOxARFfGIx37Aa5/h7hJnJ347lql7/Y//of/SXKVL9zPsC2e9aQXLaILdHbv3LH0Qnuwk8Zp7ytckc1PI6WHxA/Rvy/Zx4XhzKtPVuou+8XCXSrxdq1cL4QbPtC+IxSxYWksQsJur8u77IoSqCfOMSQAcD0jp4xGC9Q1BMNGPXveN+72mRYg2SNeTvHEGvYRvQT2UYy/D1rbhdm+lOFB58pyAj/qgDx0JOWIQkXhaas5PWPjDatISWim5p5TBNAeq+r29XR7XqrZ+MOEjHgxJb9SYdBcEOO2h8SZXeYEGumlYUdmBdms/9Hb7MYv1nbN4tk91+5si80PNWoVnP2/0yjJsEamETdu040CpWECDWJITuEI5Ij2ewUNGGmC1Zek1IWk/lEOCHfgMbVw8gwl43Obnd1YG6QMiIQcFqzvz/Z7oo7cWP5XF1/UYG/+SUuhxzWXlW77Jk2aH/oV8OlyZjXnwo2zyG0AU9fO+XjfupdXr26EMeZh91FNF3TuY+PIsgx4VQAoSc2UFDLOggssMBP03G+qX9mS9RrfrT29Pxyhix0REbnmEsvUrV0MJH9r4ZuhifBO2sPplCWR91qU/leVkLQJXDQlTDrp9GOKHXMb+hHtLT77pRUbg6q2QQofsR/B+W2j+vMco0XPnApjvujsNNH5HDFZVraHH719Byh1R0FriEBtRX27qsf854ECdctkRCwERrV3RPPxUlat+yX+kwRyZ8gRrHUFG4a0O27k8G0YzttnVqmqRPaqgrmWKY6FbQ8rZKTfiZGiTlVDPLRuN8OOBfOTv5UqyznBfxlVMeqav9+k6IURCH0NZz6fIgDyo+Nn+oh6jr8';const _IH='1aab137fd26228a17002def6b5564d8c96b899f1f7b01196710dda337eab589c';let _src;

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
