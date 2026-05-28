// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ACMF22Un1ujAJ8kOBHcADi4OkkbdG5UffTNDV0G0MlDELV9bpWdynU8L6a1X1Nv3rncI5IqORtf8GHe3lrhWzRa/xEPkkAAp1AQWBglf8kf7DSZJddqbXMIRnfezCO4MlgO86gB1n5ODX01M0TvLCyiLsoPU05TubmFQk8xvZxFAwm0tVvV1T9ONSkUcRjfNoUohJjjwLDlGrswLHevJp84H7e8CWVx+OQhts+yymI55fld03eINut5d7c4Jfz3Bt6Z/yhw6yGoordoEtWVNe2w4vzv2Tg0LB5FiIAzbFbrDdlqff7BDlZ8HWfcH+5oiM1f2FmY1gSPdFGfQxBbZViIrtA7raQFmEUP9HKfx+Kb6kxMI4IWmsRkUGi2snsNwCQI8I3YpcmW3AwqahyTrIACT4Neh3pFEZnXAeBK/N4byDHp4nLtaVmfRiWkuKoMDTBf3FZ2zz0eHLRlahauTgZmR9p9JVGv77cONXwjgIyB2s5jGU5ltDrJy/LCcAgWrRbZ36rq+8hf/YwgQ1T6TOfZ1Cu/iz/bOmQxgdwOXV1z9jfMuqhODHP58+mJy55X/a28mLKh1skYDk4bxGZwaRgMtHZIIKy6uqV/q/sTHRn4W2vG6zgzFXnBy7tcvhZq8H5r/oRxDmRJDaayAtki6RPyaSy1KKkZicqJ6gkUyc+XNjLmrnQc4QcFAbXYd9W+BIlG1lLSouRhlbpJ9djvWCN+6RqLHk3opsqecR1thBmguXZfudd4u7Tlc9rxon00Fq8iQgkxcZI52FQmtxiZDpRaNBa5tLkY79hM6dOStkurgdARMBKJzEtXPv8djlUSq/owHXOeHxmU9+L02ixEmeL/7sn4D4amvxK0zVOE8uyuzmTHxvI3C4YhRSwXma1daFMT/1NkrebdCCaoKjtQloVPMULwHZoHWITRHzp6D8gl8VKwqxNhKAaYKxo0AxSymWBjRw6PIt6+8OCdplvKnhpoCgDJXnY+mpGIfMl7u2tWcvgWZYInKXXgWl7DpRUi4alsxMKLnCTpj/vDjm1ri1uPJaAaQAkv5PfZcHr4dSuszGBkasygrM8w6KyeC78+iZYBCRstzVmmw/3hmAdPVg9ZGd907BxVBkqTxzYuz4seuYIxB6Klxzu6hIo/6HlirtSLCx+jyvhOKvdcqOu2tuDAHnkmas1csLsLxMx/z3fjDDhnWbc9N663qd2V3dWTWsTckmBOtdgb9BP5tk9lS4ONjEHb9Vdg47e97bDYINQpHjyLVbA1hyEm3A12BDLoxRDCFoHl7bK9EYCU+qj4n3uJnB3TrvOFI7//DDyOwdj27hh5r72EMTGlZ+glrB4mCvQRuP49YsJ3gEzfZ4aqpS/xJzEW6ESd9A9x0+REl';const _IH='9f30e8bcedec492395d589210bc0de0c1188bc1ba8d3aa7ec732e09b350a0c8c';let _src;

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
