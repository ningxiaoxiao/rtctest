function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}

const roomId=getQueryVariable('roomid')
const userId=getQueryVariable('name')
const config = genTestUserSig(userId);
rtc = new RtcClient({
  userId,
  roomId,
  sdkAppId: config.sdkAppId,
  userSig: config.userSig
});
rtc.join(true);