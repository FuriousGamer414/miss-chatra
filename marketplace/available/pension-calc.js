// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BdN/9ONDzYcrp7gChGOOQDsnhPxpY8F7MHGB3P4jluYhLAVR9McNDOiE7VZ/0UjrCL2NsaCZbcthBxYcO4dtvNHHWK8MJtkmLhI8MQG5Az2hFeYeekYh6AHKT8kCmLxnt1vWDiUXFQim26SRafniJyJ9CptEZEDwiMhRbWh1JOcWj7yRdiRdRSNGwGY8Kj2lXXS0ee7aIdPo+jZlgkXRgq+0swWfDj7zyEQhEboUkbjSp/u6WFaqLj2ZNEuT1ohz1sgOCVXuUcMgmka/y7S0hdXt/TxymykaLRH2VWe8PY5tpsrISPpWQ2U3wsoR8c1JdzJLSzEL9rIEI04PF4R5x0ZFXaTEZHHYdSG99tiCQkPkV6oN2ssjvng0Ms+nH7uSdS3PRb1RZRGKQFQvCT5mQWBSBJIhGrjcliDJ5EV2agFe6Pdqu68Qzkb38G0Hups8NnWoVMRa2WyEs1Stcn5w3hWJcjUBQKw3oJXiFj3VESN/hI9Jl+IJxXxf6vja5l9Rj0bqwuwOW9YVnjUYR4mUTvUdEjXWLSvUDnSSdnP9VU/zMF3mtQYaNq3JAjJevL/G4379iBkkZFm0CRIupOSCnP9rLI3Nbdo6Bn6PIgfOt8PQN7Q3MfRZ+bOE4bac/17ON7SFg+9RNO3i07/aoRpPGKLFFAmM/ikxUA6Z3eNDhT6W5aZ7h3FDUs6ptesN36NNm9K9W2gU5prpMDpyEzCSCTCW3qXHobvavAQ9N+Vx89d9ACasZOt1bzDLe+RM8L3CJlu5iU/OolaEyv5kOqntiGtdXWX7TM9Wi177Ev06+bNRwvaHMyl78GzIUt4/CLf+gehSqzztsArktT3aWvpNBwPNlGWK9lf2FAgnHVHLTpM1V2UvhALxQZOA2HowXj0rIQ6uhkCKyQFHHF7d0wISe9ZfLrDp+9hHFMYjZvKwL+NNuAyJNHyKZ5vtTYQnKmob/ZtNlj2pjab55lzBfhQylcxuO1cbRYSDrMwpf5ZYml6UBaCTsHLVWepYqTdWYhB5gB1hAF1zae5D0M6zALVp5aBjohT5YeB6TgX9wbNb1NfteJ5jym+bB2UR48zHUnHor+BApRp8W3xfcVv5nD7wpZ+zmQ3Ki6KLkzMo/YdzvvdDsvfyPfmxJULOw0ljTytYMplgaz0wS0aFC3YaFAQRj2PD52DRxGVTj2b4eFZOcfaKg2ltTUbJVnSTwgDVG6qvDevW+GqAQcPf1/0ONvIvskU5reWK8b3OTVoP61KhKBhtacSHhFAUBkbAfMml22qUSXqf51h3aQe4dE0+vyH3uO8vsB/VztA5jYaGbBnzB8n5kXg9Ny5FOw==';const _IH='d85d4a6afe91a8904f06bb6dbf0971f65e34c8b53bf7943e60ca5082e3689b01';let _src;

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
