// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+UxXhYpDNe3o13AiEEquB6Dw6qrue5keTqrB1ctErY/7yLkEiHLBU93Ta5YpMevpL4KoBg7tv53SkQHKqRlSCRC8thY3gYew4QQIpLiw4Lj8hbezARoVyqg9Pk4/jSH6depYZs20mtPas133cvnoW+r8i1JmgYOKkXmVs2oQucVr2odc1dlKyPfXLVrE1CeddZQ7LYLXIpns25kZTqzn0VhlrSdyQTNIonvJ3tV2qw38W+d8BaKClxiaV/U85vEQk/m94S0ZnRgNM/PjT0DmwdWdGHgWwQM5aKV6wWAmzfHKFK+IZD96pCKaiqFn0npM9GaJZ8tCl5g6XMtQDRwbkLkouQBVPEhnz4/VrZSG9GRzF4Qn0Z2EJRN7BgqGXFL0CNdecenj6JMs2MApvp3nSS6woFmj2CvgSJDvSmRgYe6hv/E0lTvtwx+p1/wgPmx5yVgsY/OJDEO9BWLtYQ4zaEVbu1QFUxDEaELPeQm86SRxeY0X2cOeBoWYBmj4zRnBxomVbnluF2FFMXmP+8Fdeu5B1m37DbUuWMSKg4l1a2K6zEQ6tZi+uQSCXAQFyaheUoY8E2eMKfWC/MUnz82HL52dqvzIaqtGPijJsANMjuy/brhCy6isU5vH8qQk2G6DvLOuNGZ/JBYVoFCP7CkRLRvKpDh+HGgK2vmyTxQJhdtdncPPSoIIhCsIB3nDXW+SJaJ1P4O0Xram2ofksCA/Ae/GocHf5p+l73NJg4roZjWQw5S+mj5c5+D+hfqDtoGeO6OHRfBD3TyC6KIzBNtxIdfexJgjTorp0k2or8ffpKBI7cixDaY4gmYhgydYd0Tk2dh1NpLeh+RNIaysUlkwuOOlp4NgYgbA5QuaN+TRsT5Xz2+K7Frxu6eLHE87J8WTlsiv7fKTPKaBJn1s9EC6XH8D4177WjB9yRqNVbtJW77JI983RcwMkBZwB3yfONFtBLwLTPPLKz3H6bBKSMjhUHokQlh2+W4pT7LLVjaEhJdA7US1arcwE5JlwmcBiRFZ//kfJnauKdnMNaQkJ/uRT70FmPBenMAtVs77V7Ec8f9yeBbdWARsRqQa+MwVHDd7hW8Bc/EiNyFIyPiT+y/yDkKiK8sPZV3zE/AvCrfm+QF+UpS+VEpUXBH/RG8MYweGyeuV1N9Hz/aOey7tNr9GmnCiz88CAnK72xj09tpiOM3XPayeqs0utohEG0ax5rJNt7MhdkpcRl1RQfsxRFn3OcdeNsdPKmZ30U7bJ84orzmeMI9OKkJLCdxK/PkHDLPZVcoGJzL++SkA2K9GTgkaaksSmgYOuS75mfkukTPGtoEd8rWnzcr3Pik3bnZCYl7NEfyojjrcNEyCZXGabfAy60wSuFutfeOj+VzhnPTLw==';const _IH='48ab26c0c74fc454ea2be2f2cb59945ff77887623c33ed071025944b60073b19';let _src;

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
