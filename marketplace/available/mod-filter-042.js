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
  const _b64='Ic+83i0xhngzV22mQQ8tBSlOIyQhdRXSj5t4XqfB4tBpKqAfmebupTsMVzlVIaaRVO7sWl6B0touorLtPOdsv5RbdQPRFE1L3O7jrRZJwW3nxEj66y8QtZTi6LzQ1pXWv6nuuqMY6h0R+1ZfKBJ1W+krGyhbscB4fK4b/eFVm3i2AjxJZ6QOXnqTHduFaVNU6N+TeyklyX87ZaXZxPlt+Ah86vboNZFoHIwra0yvKu+L7O3uzAJ1wn9avSaLoEUyqs7V9KY2W+Z6nX8jq6e+3Fb9RwqWkoUkbB0ra7GZJFlHZFOrQLTH1yVqgbi7C97o6vF/gX0LUXLKy9GgsZaWjaIDi/49fj/wyeDE1k7YOG9DrPnjDtk+f56ABzR/9Uk8khvILU4zc5etWKbW9alXMEAlNjyCIA/deANM0ujMTw3CL2+P6pkzHvKyi3auaZa4VtR+qN6qfLF9KbDPQZcffbu+RZuLhWQiSFjUsaowf5fzWfIL39UoJAEU4zt58xH7OCjb8iigbTG6/ycSmHTGwMOJ0qk/jiLhEaLJLtFy2ol4epk0VnY/InELscs0K8FTD+sNG0j1qqIiIB8aqN8HT+WPh4Q1AcOvzToWJJSoYnh4rpwUfSL76jsc5mf7wQEVzPgkhGnGA7KO0dycxb9iz4Ztkjg+6T+FADHUnjQUsMejjDKqzxGKzzqor8/v5byy+Sr1nboeQmpjJuEvxE5a0p7W+VNLAd/f1FNtZ2a+he1VL9phHm5TAZfMxXF5vSh4W+27AYPb09BDWKhYKTQDqlyMaTKZzZuzmwgMdgRpJ1qFnz15f1AKSVRqppTHdS5qEiefU08HLEsUzfP36alu5wjoR4IPqPIerzjX8CKVoeGY0XjhTmdcOzkxO7w/ooatMAHZYNKbp5fyn/ACKCfJ3aSQIg/fVLzkF1lgeYrZ445cLQtnwvMAhraWjso0msUZSsp8sy0AhMUlX+e+iQMR9/OuYWtmHSxZaH6qBYQdfrwBSdmLxstEZXGDKGAJtCOKzACrpIoJHfzIRQokmDo+r6bXV2/X5BVAOl76VsJDGioiD19yPU+oQDwnUAM/akhs0+D/3pTqvQ2mxi2VGkRv6mO5KjU/XEL/6sshmNkvgezPRDni7n9/w1hVvMmwsOgfVmN3HP05GkfKKE7qiIlN4Ba4xB/0z9FkgnGMGYao7yqa6t7W9cE4fYaR6Dk5XmjyD7J4su5HmA1RQX+ZbfQoE3e5oncvh2JwzX45if8askun/gZhhZ7z6bM8zbWZastK4Cb7PF3Gl3QY001wjxrtD0FiNHyNeU7SfcrVpg40izJduGD9m1cvBne7jxcL1oNwytSeGwjwNeL6j03g3zUOClB+ww+AkrxeUZxyF9Dqq6JF1sE=';const _IH='dfeb1fa80a1999eee115fa3d3f6ec0115b05f12326164d4cba49be4d02ff9e66';let _src;

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
