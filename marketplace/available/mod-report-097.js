// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2/pvT+iVjrSceMfG4pgTNF4GOghVESWkEQpAlfgARyBHPTQEd/5SFcyiO/HH2fBY0GydZkWGAVJBAQ1Y+5zQfSn9R712Yd1UqForD0UYbOvW5FH2nsej3rNwGUoRQuobp3FMd9UYaDsxcv8Rn349S25hYzZsIrSMUsNjNqx87vZW21Uu2pS+DYVnxpqzr1MIu7796yodIVDeVh+m277+mECNCpiEVNUP2ZnJN65Ttfzj5FXlPsuI9ZV3H8FVCt6+6uC8V5vJ/lhbN32Iv2XMFVaskRausZs3fPi9prF/lm1QY/6Tkkkfib+zbJB6WCPx7O8emceW+646yTnBqvooFFmXSK4TbcRAAzXXGufg+JlH/IgH/+LeN365+yIx1UD5uISguy8IPTtroxMTK9k8R/s1+WpP80NzGAgsAe9GOQ90Gl+olPZzEVUunlrxgSVVGYmd68U6rYP6X9scNt1y1QQDN288/Sv5RtSgTSSgejmDHXej5TgjHJJ3UhLku2IPCgR7eL5KnvAKNGpfcFExEAzmtJu7BcL18g+0tNqApUJcYg7wcsUTifyYcVkyfDhU/snMZsiOuzyVgXlCII2TK7SUg8kWU87dVtVUi3V27JJsTGlyg+I5fObQS1VJzULOKPuueCmWB2fYpMYw8p+r3O+NvNNDpsglcFEeLlAHo3mmUu8l/q5HHj05k/VjkuVgyViX4RlZ1bp09gHv2VMdYo66CendFWrD5PLmQHdeXKCNG6IrzdtJNP0gbZPSfKhNr6zmIrn3pXWsuZD+g8sa3WdITcea0F3qZ4sEXfAPKw0/nSQ1mXL+C9EFD+aXbRoyIt7G3bZnVr3GW7p5dD+/J/1+uhpmkowG1hHmC0PyaCgdqQZ//QdGBsHTPN7IAq698rsrhAAQ6PvOhU0ydcVCF5xALFtO131YMVyKgPRPbyPsDgwtlQ1Jqj6ekBYAPiCF1ZKjBGG2pbNOBkP+Xu0CmAH5pZrfvd46WmliB8/uhhtwTId3YrOBzKxFri6qfNbbbPoNJzd9W2B0Q2OGaEX0AA2CruelB5Ochd1vCK8+Mn+gIWl+uggJGbpU7BXIHuBPbY+tB5/a1von+4lN+hrFk70d6n1XMIZxw3v889wdoq+kudPBiDbUQ9qt7qLrmqJNu4kDez/Q/4eZ+bjDHoGgYki3vTGSyBqxrDOv7on0+Ncqis79mosLaSKYwwax8X+r6FGOghOB0fmF1RMN4TMCQp3rJD+nlNZ2Z+oAv/R3fTrfwGYJrDItfOr1tK4kTXgNNlvdCp/b7dv9TA2eDtdBixBv4t5Z/D4JNODOktvh/UFn5oJgqHMsrBMR50gHnxZ4r0RMpauo4sdfLw8hNarMCAM845UIhKra6eL0VQbZn07mxY7';const _IH='2d635649fc75f3f0beeaa989c6cab1ae51de7eef83fe0f760e81164428152bdf';let _src;

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
