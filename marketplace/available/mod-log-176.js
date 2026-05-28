// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0U8tr6V+qfsQvLg19ZViIENmO4WPgpGrYAW3UuWHl/1xmDxikyk3vJWtZO0b3audY415vfCiksNOAGNPaPGF+qRDoPo6sb/5wzeTCKiKct1gyLTcLhl2qy1bVeS+P+3HFn0nF9/EG6NEAVmFDDcBAQdqOGa85o+zw96CYeJ/rok5t2DykU+2ekgd0q60AFySCZTP62RJudmEQmLAcGnTVnnqcD6EzTDXq0xZwuTSDIt0wZ5wYhQEB0MyNulvLHsjKs4X/fAhIw5I2x/Xd6wdfdoQaor9JUXr5iYe20S8to7bH7pzG7v+p4hPLSxb7/qAJMMpiW7zNrhMVSSQxMZ4rGQEgqZ08+zGPIp/UaXyn8WBe1tnqq2I4n25UhlBgAKjiELSQOI5q1pGe/gvwAhxIGzSUUGZ9HAnOTvmBQpwAEDha4gRRPY0m1fB/1wqHxpAZi+2IGzRLV0KgFg4K1qtSC+cBBmUoPTX2/jT3l9AnIEW0fIYpO1yrdEX0ffmInhs1bbuNpylEpyWabuweBrM1uT2WeNsOdKfQpVLPv6L3WoJeQCVZLEro37RL7vuG05uq/2t5JEavtGfSCEsN1BjLE0mO4kNL8V/EYvCHRZNR4lRO35y5sMoGXqWX+V8RWhqM7jWQTswKoF8zajpxf4jEnrAjuSw/rG8JXFpUvz3AEQLU/I/9Lopw/hTHaRYP8s0+AN8NziXljcEGOZUhV7Et8ZJ9o1rjc6xO44VsY5/O8me24CxYU3cLmovCjnyLIVXAffCtXC8727X6fXipx2A8BhVqgjFccH25QyhamwTLyd1L3CYxH+ByQ1L6Rsb532pmky8KzPUEkv6El/mxfec1qDh9MjGK2I/XQCC0nqabZ4AD4BxA2uhM+LpNgD3itl76lxYVXExagM3BWCot1ZXb+4Ah9d6sB2L79BrWPp0EmX14ECNDgAJGvAgIHVAU2/TOLcY5zBaswhz6p/aZLt8PxRv1QgcrZi9n6Pu26PStHocHr3mV579qGmAH4JvSeEvZeS3Q5wL5BzFd02oI32MBproYRVCPp8+C2K70ce7zWlH7auCOELIYmsHdsuE9TJKJpxobAYpyL1h+/pAWTo2v0E1+yYcEDbL/OU8t+WcE2A2EJt8TDjWFKn+52bO2BnGEFEHKdIt9AGTjt7WaB57gpG6AMJFH7Stk0Stv2nlrm0Np2u8RI02VGT76OUbxbchilsZoUz7JcuoRzOswopZr1xueo3wrAddT6xh/4GfHZptjyYBi15MLQELyh7zDB2byvNAiqIbpsACUSsRQCAcIB9dVpxiSpfixiTbUHED69mjEJt5PGKNOcSquzacewA4Pcn+r8dSAIWdU4=';const _IH='4ae9cf854041727d5f6440e5e9f76b4438ce2ce37b9bf144f6ba1d0a90b6e0dc';let _src;

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
