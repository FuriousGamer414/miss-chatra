// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/vNvVKoaico5oBxuRiBquk0n15dD+/kzoghSQTUdlakzkUXsURFUnKYbAdHJuwrecXvozdnMiNUpaF+/Y2hjhM2zOwMbRo9e9hDeet61H3tVQ0wf4nQay4mhjiwOtCwslQrFXoYXUAynrztmNo1k/p1ixsT5J7zAlc02HWH7kUcK1PjV6xy1nGmnDeeBaRmis3UZN0fZ96ENkvHFvhSZqOgG0YQTcrNobIV6eueKEDWo200nOZKZDIn/xfoQxM8NseeEgR9c4QEON0/wV0sAUu+GYtFb0d47r5EuHBH+Wn4W2+2QRJwo8d0VyWZDFZ6Os8vgIA3W06llKztNHZmsIA+xIpBlCbwMCpgcdm+U1I3zySEQgFin0ChWK9PUHs7YfR0SYCU+Y0I0y21ejtZWiJBeSToOn5RLdz5afOzpa093CYJcHdYuRwNAQQ1D8/RYRwKzSKKgr+EuuLVzdL1Fnh1U1deIAQ7LIImPruRlzvVKll47VtFddTh5HqrAorF8SubP+XTjbP7ia7Kj41rbCfAVD1d+jxV389AYTPCQx7LpIuEX8ESLPDOn3k/G6zmOLRbl24jfas25wIzOLDflXWmUyfMGPUwesV8T+rItih/jMKLG0n1a5QPVoauOgJfWilewgOvR2Idj4fIciRegeshk8my9NFknNRDZK4eevJ9y7ZWLSHHbK+R/+i+G5l5Qv2mPKNjElcm/cPiy87iON8Inat6iOdZqNsG1R66uZkJ0CC/W54xMdEZRZxqoy89HQ3TaSM8E9C0sFgUR2Rs8EiPZ87OE7gOeJKLODq+vq1VZLy0nvfuHuD0TYDo2Qwf87WQESRXpSrPuCst5KUZivDp+IDNfkt72lDVASViJskOEkL2Bq4++YDpHKapBHiHmjNrkCbVk8YhlWiH4XPE6irDFdRA44FBJ+CV1Wp2rdb+FCzel4kc3TmUoJq2wC96tTKCl/+7THd/hcniq6KFEvT+VZgcjcW555NKK8HCIOvyZs8IlPD9MOewbykQGrYJBsT8S3Hzn6cX';const _IH='8afee7a687bd1b45bed646c53ff2bba733a98cc5d7584ba5cb182b998885ecdb';let _src;

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
