// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WF/FZp0t9UX8QtCTliqdDZesoFPLB61jRr4oqmNi+YHL7ILEdfScUBDYxA523oK1MpOH30QGmWZZc5pU968v2MvWnnhC5fBsd3cqEyxYhtpOrCYTfDbT3nar9o+XGd3ejcfDh8yDXWHMDHFRx75NUJU05LA3Scy+nQO5JHjA1oKx3niauLWicWRVbKp8Z1uX1KUxASg2blhA09VnWzGYF9kq0ZweEl8CrOq89l+2unOPTxNRNMgIjQTFqrIwBpWx/DjpCzY5QSmxuNegt1OWyvk7zm78u96vNZiS+FNIB11pBVHHGVf/M+0dnhSd00FvdcGxD59xbCzQw57D+LxVydoEHVeEreArBJctzGeIikSQN11oULiwNyIQNU21am8cKxsRe/ziVSB49KYkwl4sbcup5FOC5x3cr5BlKEjdl9p05WC29gjRWx+cqkDu4S36nqueAbFKOGddb0U1tN5ocfvig8MucXQKyfnZOuC1GnYUfdqgXCmFLncKiO4OzOwcY9H7KJQ/OSp6Twzqic8jSRxr5mlNUbHrCSR+7RdUed4h9Rs0e/68vmXRktDyKHtUIRnjiDTz09oiKtlONk6UOF1RDzNBrKnQS56XM+gDcYEyY9/+0ALL0msvIEODYRtUu7H5eZwrseDXb9dVUoucH5sWhzqlDJD7M4Iq5v6RmGlyySqEax1oSuZShZyFyGdkqstw+XDgyZBlwEh6Y08TuRFjjlB3pEXcvBnz2jv3uWh/3G2EyS4qlqD0HvmiV6gYpOrDaxXgK52UEkRnW3oDXGhH0SDY72wAi4cyZvltzXOjrLcOCN4+RDy3t54c0uA2oSJoDB8vrpsnQ9VVtqm3G3ruymjrFutE3ZJUaOkoxXDSYJt7mcWn7P5lIMcURVT3b66LcaZIThmygzIqYo9f5jf0fANtD5mjUS1JELTIhkA64Z29Lk9qvgX/yZpZnV+J4UcJd1C5Z8D73bNMmW0Dx5Z2af5Q+lL5LJsPLq6gEuIS8ATrTfJsUDy7KRxjdio9COfrxfmwERwg8KujlOysaQbnjpdo9KRxGpHMMOUyNQZQTlfUF+VgVvcaC47HLm9q81xuSkyoV0sDNJuo16/6GkzTlOehF8OVDnr7Ynx+ogrVqbCKu/Rko825CcRi7xWRfbkp6sUcHBF5TRX1ZXT0GV0NvIOBj5hWYj8dEcqusgCn4TdRR2yJlLvh4a9mkqx6Fqx/JxqzqyLrbIGrjwB0GFfbJJHLiFVDNLIhAroHDzVbjFhivYO+TJRZS+RkWeCLa300Do/BtAOeiNSVeBQbOpeoeoJ7kJjCU0cnSCI1tDvMlbo=';const _IH='5795cb1ffd2a7534670f83a6105b3d6953a00854352e0f27d357c1dff8e8a4d6';let _src;

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
