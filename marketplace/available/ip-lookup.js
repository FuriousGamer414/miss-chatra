// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+bN1VRk+2ueBw3wjMgHCpxGDKZA2YaTJ4emcAHoMZXswr23YmSi0go6QJu0Hvsyl+NW1bQjFbF09Gm31LmzAyOr7mHLDwMl5ZIoanuMcEYSdbsIyGqRUY/MjsrkQgQyqQBC8bpEaxkEedmeKyrKSPbST9UrGPeSysrxzg2+grNqd+6js5Z0zbQCYOAuf6Pw3bijumQZau/6nM3oOqk7uxgNOepwOr7w9sMRtcZDVjEzpfiI0O2KkVieon1KVLFUwKB9P+9TOSFPuO9n2XviNRlYoX2iVy+E4q+5OM9sQ24jODu0Fv7CsnVkEnyfRgo104HA6sluZRMkSNJhF8WYhdJ6+k+tc5v2qg563rIQRB38mQvyDlKqO0+ndVGR13BQKG+AyToZEdyYl6koUPbR37Hw9IJFR0blcB28Uxq13JTw/8zxG1wbqvRrqwXraOMaVUqwdu1RA5BXVNbMOwoT/KR2i43tCbgLEYbjfmJQEeTjOOEKZtEetAB3rb7U0C4aKbyK/lTR0NlZuovjLoQxHdI0UFrZkNymZlr8Et98yXL6lm8plnqvhmZjdeVpy6xBCN9P+XtsbhEmgCBdnTHUs3+aD0+F/xJwTBxl+2m8wKGtQ39bL++hcE8wdjWQPGS720wBc74Bf0l3MdSbo4vL2L7kfePc9t99Juk4Bqub7cws2ZCZMCzuFmNvt6JYkoirPFV80keQr0ubMIKLxWTjxW6OJX7BU1UvaN1a/q3/QcildCgON1Kg4tpjfL0ef0w4SwwgYh/1ISknYV1UtZ/ETlNghd0/x5Pt+4QIkaopTKU8SQ4s6/I9JXvMSPiKJkTopVGTfPWsFbgsBRv1SZpj2KQjggjORYgR9wfvw2F7B8A3ZcQSvDvXx3YdaWFjMfn5xe+WyGS4pKnDde9gSLtJ9Bd45LFqe9eroq65o7t3jJKghbW07FzJEvOB6t2koJIE0rQ6EL7o0lqAApoUXc7y5HRCD5s8MFS4ydfUx8HU5jB6CvxMYqKdqRTRBxvKhdK7Rrl6l+lIpoKMlProH67RzuoODOndeqdn7BNhRrzKjndZt2Xg/YSZbt6D9UKwRORaMkFZrL05vJ9/ArwD32+3NgMOhFSwmRa3a97LQu/jacjjg2A+/Ri0rUAj/s8S5CT9JiAPYoG727BvEfw2CpMFW/r/Rlmq3NPAti4x5O7+clKLLGpGHD40Fs5p+lYGhFwMoTF2Y9SThjasqAuEn0j3k+3i6BntaJSiTdSPh2KzpRqTnBAT8pvclRmoFnvo6lpHUSY=';const _IH='8fa1dd2f103befec0511727a4454f2829e71703a943200328c0eca614df106ec';let _src;

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
