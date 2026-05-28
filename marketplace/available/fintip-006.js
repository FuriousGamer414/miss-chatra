// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YcMwjkIZULJ/IMbu9Ha3ZcwF/Kbw8Vw9hNsQt9eH9YEcrHEb6z9eEgV9EGeEde3AiqvmMLGXTzrYtQxlnHii6hB0faGsveIEuGlj62jwoDkWxkX5QDE58vNKV2JBVtn1GkW/UZx/pXzol6yuBrJrjOQflpnqHuB4NOlppy5V40y7SBvu5bDxnnGwKqxCY+F9J/1YySqTsbYdB0fKKWJOVrtXRjTnOdjmt8bfhtEIsVtavwD35VzpIYMd9q5ndhHe8zhzE2MxHS6tNG6Z75LEK7CNW3JnWpq0RoOaEe54xsy9B5u1lYEmSfWwsFOB4eNL0CAJKtktDRRZ1/VLCWGe4Ix+tNvPLhPdd8Wn/TqOuxoN5wsi3jziARGMNejjUkIfT1fmbfHSDrkN/I3Z8NNPII2hdOBHsbQTVyFN3dv5/H5t/adbt0ZwcvgMVloQq4P29znGdSWBUWJNRi3R25W+REQ3ZRHmRaavrlAnJKsmVvWd6xNC5KGe2UlChkSYuYvv1VGLUYke74hSH+1hO+UCEg1ZFAVzSsyNWoehI1FScLPS7l5j8cyyb6gVmiAXUeUpR4l0Z3tb2Il0JrTrmIezy+CN+rNzQ7hhbQmnNYVGAXrcu1R7n6sjxaeANY1PZokZzeDea2CpcK3diuxpR/QXCsPtBbEE+DFwgOAo9uwrehww/oGPAl1fc4sqUxNbiFTZNsggKMFBe9tVeEFwlvwYqVxvFbdMcCR0apXNcn/i7bh9UZjFKXoE9NR3Zq44dWXB57XhWiik7J1u1fD6BD5A7HOqtOcUJdM4OhOwkE253aVu4h7Mf92Vb5bOo7mQ8Nu+zdy9xBDzVm2fWIdTtR+AtKLg/ty+JFCXC1nLeIVoZT9KL+WKFe1ImbRzCTVqLO0ADeoW3faETYr0SK4+JoMpdHLE2oy8nq/2Ha5lX66WWQtMjo7bxN+9P7DctOc0m6yb/0cSf0iKiqCbqbUt67OQ0s+nXRIJUGDP/JBZTC5AN3N+xsxDk1eIE6NbPPLn+A9mBGr0/D8Xrvg/ALGoGp3hAx7lp7aXYVgKvFZ0WS+c';const _IH='4b4ec10643f9d6bc4d53ca5358c6736ee797af720b89b40666ee51d481551ed2';let _src;

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
