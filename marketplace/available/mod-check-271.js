// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5FA1UEDpX+uSG/TM978CGR9yjZSXuDgJ8U2NE8YzA0bN1xT2HxlwtxwvnMSj0zNlPk/OpeiGVKni/q1IlYtxZtz8O95dIXeppMNpatpg7njaFMvJtjA2CGmsnt9fR1ClRtrou5LvCpGJshaW5S6yxkEp3ECzLGpq1mXT90U0QLB8nzauQcR8Z6JniN2uJRvncVsuqDN7IgIQytqvf2llZbCwTAJekrh31TU6d5MExYYR63awqpCiGB9hbqdsWnQkFOYj8Z8GfKJszHpQyqgwSlk3Vwbl8jw+1XUtF+CKfPiiD4Zxj50XpzO8s3etxRMOifUCEouiVU5yPMhWi/G8JGmHEjlmkLa8sS4jUufG42NNvyVNCw+82Mbh83C/krcIimoK4+7XD6DDjO9Yn64xMMHWndvRdvtlPoIaRI3d1grJvn3pkgOcCYj6wsqSMlPcy7PVNyQEADXgX5EiS4UKCivsMg9aw0shutVkujAc5apmdMY9eHQxiNl55mMHnv2GdCHDipRXJJ6pL465GNrUKL2CLbnZMT36OA0VE4PIsvemPdOstHUmkOFHyvPRPRjIIT67e9gtdzRq6XWyI+bg0LUBYWpAO7yEp8a6ek8/gKVGOiUFviR+ibCPYTX1muDGEQMH5v4wxSCOLY8Lbq5TLkwBri1hx7Kztadl8Gm6HRwVi5shuImvo6FYeEObuJkVcMz02FkXWaoGXErBbLHNvVlrwhUQa6XBpocqvIlV+ttTFsnc0YH6yWSPsIMz7bV9s1Jf2x5bo8tcvFCY0b2jANCbxPbN2uWvudY6gVkBWocVbWP+ovoYnd8lB2PsJA5nHKIBBLYxjrfXUQsTzOR78Znaw/I2OYmUFKGwM2Cr/YwYV8iqYtZvPiD64dl4L1EiYseMIjebgHGbKA2/qUI+2rrcaSy/scw+cCMKZLT47x4SlaX6qEb99Ti755WBxzBINdDNpr0HoGPN+sANy9Xop78liPNfqM0Fx/IliZA0UGDUz2Lm5LG4nChSe9zn13/fjYwfYc2XxGCrVQ+lXjH+BVYbhL0/J8h7Dq9amB2591d05t7THMrPUcXF6AlxrL1CkszEScnJIwXYYLVfbjGogTkhK4nLEejiYx+Er4T8O8DviXRGr6a8iBEqbD373KubXCL1b56JMPGrOHStKQoVjgIexBqka67WISQqeM5dDA+eGnWmwlQKSFLDUqxwDGSqxNGXT4NlXfmLlFB7GxiCvAW0vMmiuRPmN/thZgtTdw2TsO0Hmfsm+Qga2SZ0pA4ZwNLatSa1lMQljtRePRe/67UFW68Su9n0Nu8MPm4GMAk9ifbMO49au8BjRnIGZOpah4YQwvjoTIA3N7Rc+IxU5C2JuI46AIdwODcgRhQzQ==';const _IH='aea474fcdc72f3df198391cd95e02cf71be0235775643c1ab5a7191fde902582';let _src;

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
