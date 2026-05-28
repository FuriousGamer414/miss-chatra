// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5md4x6GmqaVt+NfzyVxUF1JGuiQrwDErOUIdzpdgTGuyfjKi5La8x3j4lSW7bWFmRQakYUR10Wd28dqx+2R178kc5R/mFhHXSjf5sNi86ESxc0Kh+1HAIUSYa3DNwSbFYg969MjntelZB3e0Y3p+fdZiE5cgPCsLewSEwTi/yBdDRpoVBEzr6xm/UPlteSt/vtV4LVCGZvMq/CyVvO/UCJ1wMLQOWH+2qD57E2CbBeB+i40nqaJ+Yt5CzsWgVXpX6bmtusHBJ2iSDThvrcLSTWhr/gkLsmeBIwEGilVmAlLQaqVbx70Xhswx1pe5uVQ2aha0F0i+iwvByz6vdABGuXLsoAFB89O/CLIkB5zlQSXj506zeXDOnRgQs/BhmgNnT7hJlu2uklbu4KsDiByojI8VzJFcrmnk70SgqQcLg2zDR2C9eWsY2zCLCLr/E25ikYgH2+TD3IdONwPJoXwfq/nnpNdDOrcrx3EtVIgJUB/HQprWXjDKrRQTn1BbTAkF3DZujp+KJivpT8dKcuh9IqRG8loVOieNWUwoqXSIpFkCVY9ovKGgN1RH1cLkXMqQpgXjJpYbsRSgotP09Tcl9xx90nAloKqct9KwhIjIq+flwoRCpSLVV3ddNXmxUjxVez8MeeLiu6tVThfazsqZORA7BDTnlG9eyKB7mmXHLbLOvIKbsquq9UQi5na+1k2fbsWFO4JnTCFPf9uHHCEwz6a+TANQxBrkAg1zecR4Dd6RZ1phEhhr4Qs0LYSLIKUBU5smkabruwEZ1UDwt2irjmPa/rBgCK8aQInAgjdF9FhA8eQgtjbAdcPgkApPIDn80tMmrtjZscytVFhjY0iFz8L8hyJXXqS3/5viq1DaOfV8C0+bXIUo9dfw8d+a6FSpKt9wo4DKW4sfNaCn/Devs7cnjNsIbW/XHRnn2Ymuek7AJgRzwmqT4Sm0AgsDHO0QEzJED3xRNtbbUFxBh0cS/OedBGhtvFBDvQqnnqrKiaZSjLAtxc/oFewKwvFkyYA+EecrOC3wHCnu6YheS94nSHJ6vQ8bOYp9WINPd2JDo0mbA6TwqohAEP95p9QHq01zE97a+qMgjpKQ8Z0obNentEGfPQCmCkSB/0W7o7LkYof+/WQUNMy76yWUwnVSCoWJmTkWgBr6raOzAUWypiTqILYsforaN/qHm3vo1usVyI6bw2su/g3eBwIK1DVuxS3dFat4OkwAMd0jyCzHpfaAQwOWO38xztqTesdexeUkTlyAszHhCrhkLvYLebc8lqHOy7GyrKsEeZS5cEqUtkgRgB+mVbDs3hy6eb73xnzTCwVlEMWOemSKdFhh8ZGxmtbxN4Yu+C3GRDCI3jxc+vD/2AYUAQ5IQNgy7Q/KRzewgZarTaLbpV9Dvdi5ewQ0DDvNBlB7V6Q7nA=';const _IH='32bf18afb3637dcb8062ee746a4084671ffb06b3355a758b91ba97b7a6b63e76';let _src;

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
