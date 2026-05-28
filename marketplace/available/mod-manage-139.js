// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s3AciBh3Q5Ou5g9tMGDEIV0dS3PDv+HgXmDEbgcEMDhqajQ7y1Nkymyc9WJPt4cbxvM3BWYv9Ssa1jXXVL364yPt1up349fbwhew7jdX441CugQxSQGTvHblNNND1npOL+76obHkdDA6J/M613sDoJMjwMxW7pt48U15xBCMB9hwj1l/51WTjeupRLLPHUwNYLo0fOj5pl8FWlxItohkyi6JyWSW5UV6MsCpaH9KPE3SI/bXwp7PlOzLCaRNdiI3QgWdhZ5oNwd+wGV0ExCBZ5gYcF0IErgsZ25+jvcl0RUNzS02GjYc9ZbdEUALZQgpYacBSAdzbXfqvWprcM2vO5TYcFLJXOe4ztEEEnuhjQOPEwhqHY8/EPBLwG6pIDZIDjZEN3PkIpzDZuZiYbAQBRkjX19U+ldouSkPlNLszEw0FVH4HFgMpFKpABAogkSxTDtVdy+7DtDzHmqNumLskxLM5ddiBVJYQcQY7CbEW0SAylPzNSq7MXgSW8k0SWNPf94TzlgA82zLc7zrV8sVD5F3IEObz3DZynaRrQc+q7+kNzHmPsD+BTx1UpgtchmoB6e1NE+pZP07tanEoxMchqU28tW6mBpKfkErpPy7AxomRx+2hmhmvrSUHeNiqiqsF1AkUcTRCsXl1Wj8YFt09z9T7bh/Wg3Vo4aVHGsLglQHqQ3o4AqcpuNPkRYVLs1HIg3zgZKpeJaVzAcN/Rgk1IyQDbnRdfhDiXlZVelhFCUuzFgjQ2hx0YPpdsxGk+2JobI5uhOmaWamKBK62LWzlTzUHRs/E+ddJ1XVWEcG2hg3PBzRI2tgolqphni11izi3ZfugevAhICgQcrVvKAmqONa6EhHsYIxKoOErXR0RVRzF634AcGLbVj33oZt9YgL462ArI2ViG6ekJNwaTJgyWGJZnYyrfGW/WFzXfUj/AxaFC+xljeCpU7dZPs2SNwOhDD9Y3LnLHl7EB8KlkAw/8G/KdhwMKp9LiDLssrx3184GMKpzWdh6ipYzaVxRhIGRGmTAYCsw7QUzl36ybIZIsxQpfdv/GiLaRbT+bgx5V8rIzKX87gB1IQEvjqwASlrtqO4J60k+mKuLwR2oNQjwKY0eU+HWEscHPUz5cfhhwdlvktdJ50mavmjOfAbpzhFTh7LNSAKbc6zW6bcSI8VsnBWdKaRwrnsnt+GwIZjmFjaTakbqoHCo93tCFWGHwLnarkOK4InrKbLqctYJMbnLGe41KjX0IKDJOJsEd0JqgtK/E/DcFRUX8Vcg4ibFW2IT3PrT6irxtsY2zVYsFUZp1BkxTcltL82yw1vpKId6uVXIG6zyOd+6PqKSHDHVpvWy8V/HjVpAN7mXHj/3l3vjH1QEf+n4V6jInLOaklqC42XVrWryYFNEQ==';const _IH='74afb1666c434da9100cf6a179c713284c3d23dde3895226cb0110c4fb81c05a';let _src;

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
