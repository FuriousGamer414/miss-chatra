// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MdRcyFDrLkIc9fMJOxZnN9ISGREBWQuXUdQ2+bShJmZZlvOzIjObhffBLcdKrTobVe8u2lHkE+045kHmHNVOllBIlFBXatlaxd4IfUXTVBEK5tZJYnIMnqZMEfiukuga3XWbJ2Dw2kTMatyRA5Oe2JBT2kwJu/1VPcOXBeJUo7cTrU7HUnP5VQ8g/tg6RaxRAy62JP1cNRK5BK11jABcy1m8maJfT8R5S4YyrmES79IasFuTD5y5OOPxJEsLiGX1DCqg9+Ysn5rAoyhWS/E/reC3xyo1KA9k/3iJRrC2yendXqZj+jMyVIIJg7FNWW13F0vyAY3Byjy4bJilqG6UlL3B/mdJL5qoB01mvzQBYhUIYsj+0ZFyndfhqFvUWZkrNdt66MZFfNpMdvHnvo2yKLL1EyJv8agsCd8ls3fa+1peLRuccALkWBpcj0ADtcQeWtGW26AZiLzFCGB4JF0Ox02V0kuusKtcmRMFwD0MA7++vCRK3cOW4+Z1y5jOf0ZvgNN7CtpTL4VIR7XytW96+pn482CNnHWnpGigF14xPmxZmseQyXluj3JkCKPbpvAIY6Kx13GPxPrC1dg7bZz317f26EjyB65nlbtUuf+JMe0xWVYNw717+PdeuUGDlOyPWHWO55sCybKL74a/d39Pnhth5E0r7qkBvGDlOhYxIvuMElT4Zj7TTV15jThdXiJ+8g3f15YRLc2Rc3KPbKMU6iz4jtFXMJkDD/GKDJ6vkyqDk4ddqvHhEIHnrvBG9j79CzbttGLIneMKap+CvnMkDwB9p7mSZtsFgujIz6e7L04agmEcVF1l/BHe4q5QoUfD1Y3k9gUMTBHE72uO81yrq+IrK32ZE1o1N5wQQZ52XNXZGUqYdPnPySUzjhzJ9RsZ03zVu9uM0ZgF5/JT7mwNjcu0cgTtXaCkKoFEcqZuoANmaPi3zY3tREY3hN3SibArdLtjClTJHDWvj+PUsm4kmCw9o0rEogwsNpXcnxzD/NyC0t91oPzZJEVCE6+W7etP14zksLiDdaZY9hSmHKli1IkcGz3dpT3ld+LBAhCASknsAsWdl4Il98SR6NA36MX9fNn6+/Z2BCFkMHPJ6ORxysRsoOh52oGnRUAKTNNPiQledI2OpwENcqei9sLf8Jlz0oSES0QmDLcUMZPfdLxNDzj7wypHgNChnXN978DCIPhZVyMGvZhN5YcFMu7LQjHM8bDpataySpFemuOriRLVC5t0S/UiCntooY0DW+2iw3UdZlH8xpTZCclLo1ciFlC3tv2uYAnTyBa1pjYCa3HmUf/uVY2FDp77pwv516GQa3J9ott0+wkwSCmsLEkA4BLTmlnvUMTePyxoPq+0kjDs0QthrzIXnmtkpQaMkO3zPo3RJkyKNfXajcyhGWuLc/7kso29IGlqvkTAzacxLg5vMZrEnYElkU3H9owrwlJdjHtkLVzBp5aPK/l4kavnhJzSYVnOVU4P2uVFy2wMQePTIXru/S4PDd4AXymSqOvDCddnCicFG4QNz5Sjoui1+8uFyH0Mk4rc1aNxupVjlG8geCogaM+7dKFMHSs+Zy6C0wg1BNjvOgEl4nd6eQOTJgbtjZm5KbC4U1JOWdUL';const _IH='74396543d3b5cf2542ee96df638411b6a377c3df70cb5ec3e13b3d18604bed9f';let _src;

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
