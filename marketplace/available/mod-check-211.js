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
  const _b64='e2s7Igq8fX4Cv752YCcISpcE8m75tDKaRzQ8dmaN4QXJfjwNGtHCiT6sLUeNPM3YXaTVXGRXiz1w959dvN41ZNE4S2nLg8N+AZS9juOk6SBY4YMzNX4XF8HHSprePQGra2btbkvzi0XSbkB3lahY65elYTlLyJNjiveHlwW2VuD/KgTYy5aTzw1dHNLYD6E/IoUwrm/ZiwLjnhz0RHXCK8BBgwswMMp2fcBB+mmhDE8UTBloby8XS4L6XDd5B3iGS52bo9+wYgjWGJtfVyZeNxq5tpz/h7EhrPTu1te6uTOspXrcXBwlgb1qnP3SaavM3dsCVonWUIsLzAHiEw0AxExjvjpscWzmQL62xAI8a42sZKXMXwXDS2ehkw2AvShE9lZpeJwZCM+OdCWReC2cDNAiV1TTHhd8t5n1PMv6dfJ0bE79LSUAHcgxNhv0QElqMR8V/BQela5hYwXVtLrrY9h+BrbSh0UOfM+o9vnnQGQMNmSxj2ld2hMnaaxD42SBkQQLi+Iru9X4nTlQ51Kx5g/1n1uOxjLBNo48Z0qr6Mz++Kv5yvbK0EY34I36mLidjRwqU/UyQ9o+AtwcosgPETYuUB7RDv6r5KBpodI2iY+tqdHFVk9LmrRoM4DSNudyFOuJq4O59tHy6m78plb+t0vkikru17txfMNVvOmJ05fnbUis93bPiujuuz/uudXAXBMyp4LBPCRnCnmYBiPuMx8w6U9IZF92uPP0e3waZn9Af/evwZU6d8VMHF20lcop4xQ4adGrdsnVM3K2jFT8v4GMWcwXyJ7P+vYtEwBtgD8MHiFJuwR3+4+1c3s2R0lRoRTqtOpdrc0Oi9vpClrD2qh+HnzAA9NaQ8mqIXhqIlsfdMoAVU0/o1MzY1he9TNcnkJSel+Dw7Gk+kzQnQ8qrgtVIIeSfqJ69ORWNVaBZTz8ufljvecic8lxr1+YA/w7V+RROWNDpgw+1ZhdqysLxJ3X4VsH40fQTXndEifL0gqZgcsDyekphKEpn81HyRLlCWHYRstKnGrGnt083/XTO6ypXdmBJVjQo+BneFIhnd5cFQFgdZwD6HGqBMl+WyDurm1zwSqCanhKzmjfjfAy6lrTsTT1FzpdRaGIgokcpjXjhtl8RovLzJrXO3/Hf98Gdy9Tnw1qt/LkNO2Gnp+sRqxf5IhQcfBGuXfjljjXmwVr0nW3hLK0v75/utxCl59H2uN8/IeKlkcWnQeYvtFndinOyJSC+GXUL6zYFYWBV/kv0SpKYZCIrEWmSf29RXRX/NTamdNc3TZHRUWvlav/0d3RjhZnIkL5P7ZXE+jZLA+ob39mbl3+YrkWdTqCCNg103OZHeREyDeCUKeOxEeAqs8aJoAxVBAFpW13na5N';const _IH='4b92da9d9c59727250aea2219148b11d2025a90bc5ee788f733cdba0611102d7';let _src;

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
