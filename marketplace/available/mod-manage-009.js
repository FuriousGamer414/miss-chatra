// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/cVnHDzqHv4h+eB5UTrV3nHDhtl76oHT+T6JrepzwPHtUWwggiHjpVtGcXIPbi9EAC4S7/iaobegKH1dSK+45FK0EoqUd8f5ed7K3L0iZgrOfitDcxNHiK2ONFD+IzUa2oeWHV4/m1pgiF82zRQzzN563lIZZD5uar/jLn8wtfixiAhBnuxY5sY7sLpxS8pw9rCke1297FJgLrSeW271uPT8QMVDF+WCLgRQETfC3r8r4Xg43kTYPUQF2HtbFspJpYmaxYB5SC7OAg9sAV9w7I/66Q4KJvYfpwgnyCBiE8H0d1x6U9uhdZaaCeNbIod4RXsaxFISzNFGQ2ObRZlmMZC/Z8f+7vnBJBY2qUcQB9UAVzuZ2PEIXbxiHVLi2kCaXZqDSQDg+Ym1scrje+IHROByPq/wSKRBHMaTgvyJIDUaBOa6saB4j4eK9CQBtIP0WPQtM54qk5ml3SBDeADWcJffKSTdS2oVjr919hnOJDYknCwy9koebHi3lnw/FbxeYuDYeWgxP1LoNyyROb7yXqmutXeQWr5ngRpTJ6d4XitZGQ54SWiA8B2IIHb9e3rhobvWY+zYta0SL731rlhW00pD3pcoQTHtM3lPpE+AFZMzswelaWOfzWIkX0x1bg7gQrbmK3In/CzwY1l4TJU+B+S44BFc37w94MQMcUh1x1/HqLoTECEUtVVtJKpqk45ZdOWurZ2DDloNwvaMyRrI1THm/DlBBI+ctmYKj91btwKmiZzJ6hwq17yIksbj61vT42h9zd155tdK3RYL/yrr+s9DEYQaq3MbwSYoiXCeU22ucD6iRaAtKYDBcV3AwGKpyVqybNzECP/JYsDz+enznuSUXH/FoXWtBfEV7Adh6jvtPxcoReS2twTs5Sj5YE+OmZKyXYREOUiUM2lYhcjjM/E4p4ov4G4Y3oMx8vCNQtTJu7m8Sg0gJdhAAyDoawRuXR9CorZGjbRrLyNfTHh3T1evk2hKiybN+tNJ+0SiGC3dOBNFOKOuR8MssOGlEjyQfut1kbAQ1uLPXZVYmh1sSB0m0EmK0ZQq1aDBSJmvvxFxVzpO7p7c4B6GyPXSugO6Ye2RBpLUkY6zhR1odYCW9ujAtydMt87axD8+Fj/x71CPhvGoeel8oL3Go0u9Wo4Tmz83TQIeR3hWvphQqwPCSyNeAMOZzW0ynqsZ00Vr6R23pxDa+sWP3LicrsYF/+pEq31Zein/CSYKIeFluO7Xpvf/TzWMoM3RmkbduBEHUYaaaotHXFSy0vqczGmoWCj4ZdGLCnJJSjWJ1iAoG86pOgmFLUBmPGREsMH+7c0HRGkVt3hkThaHwx7M6tfCo2H1xDnPJ8LDYhOIkgm9sqnx5r/mPzwqux17NwvaXS5X';const _IH='4c80a5e40cc2a71f935a5934c1d9a75268bad9dd8f4682ce7c68ef47be1289b0';let _src;

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
