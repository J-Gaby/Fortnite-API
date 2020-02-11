function statf(){
    var pseudo = $("#search").val();
    $.ajax({
        url: " https://fortniteapi.io/lookup?username=" + pseudo,   
        type: "GET",
        headers: {
            "Authorization" : "58fb8647-293a15c0-cc40403f-afe23713"
        },
        data:{},
        success: function (stat) {
            stats(stat.account_id);
        },
        error: function() {
            alert("error")
        },
        dataType: "json"
    });
}

function stats($account){
    $.ajax({  
        url: "https://fortniteapi.io/stats?account=" + $account,
        type: "GET",
        headers: {
            "Authorization" : "58fb8647-293a15c0-cc40403f-afe23713"
        },
        data:{},
        success: function (stata) {
            $("#stats").text(" ")
            $("#stats").append('<div id="infocenter"></div>');
            $("#infocenter").append('<p>Pseudo en ligne : ' + stata.name + '</p>');
            $("#infocenter").append('<p>Niveau saison : ' + stata.account.level + '</p>');
            $("#stats").append('<section id="infoalign"></section>');
            $("#infoalign").append('<div class="infomarge" id="global"></div>');
            $("#global").append('<h3>Stats Global :</h3>');
            $("#global").append('<p>Top1-Solo : ' + stata.global_stats.solo.placetop1 + '</p>');
            $("#global").append('<p>Kills-Solo : ' + stata.global_stats.solo.kills + '</p>');
            $("#global").append('<p>Parties jouer-Solo : ' + stata.global_stats.solo.matchesplayed + '</p>');
            $("#global").append('<p>Top1-Duo : ' +  stata.global_stats.duo.placetop1 + '</p>');
            $("#global").append('<p>Kills-Duo : ' +  stata.global_stats.duo.kills + '</p>');
            $("#global").append('<p>Parties jouer-Duo : ' +  stata.global_stats.duo.matchesplayed + '</p>');
            $("#global").append('<p>Top1-Squad : ' +  stata.global_stats.squad.placetop1 + '</p>');
            $("#global").append('<p>Kills-Squad : ' +  stata.global_stats.squad.kills + '</p>');
            $("#global").append('<p>Parties jouer-Squad : ' +  stata.global_stats.squad.matchesplayed + '</p>');
            $("#infoalign").append('<div class="infomarge" id="pc"></div>');
            $("#pc").append('<h3>Stats Pc :</h3>');
            $("#pc").append('<p>Top1-Solo : ' + stata.per_input.keyboardmouse.solo.placetop1 + '</p>');
            $("#pc").append('<p>Kills-Solo : ' + stata.per_input.keyboardmouse.solo.kills + '</p>');
            $("#pc").append('<p>Parties jouer-Solo : ' + stata.per_input.keyboardmouse.solo.matchesplayed + '</p>');
            $("#pc").append('<p>Top1-Duo : ' +  stata.per_input.keyboardmouse.duo.placetop1 + '</p>');
            $("#pc").append('<p>Kills-Duo : ' +  stata.per_input.keyboardmouse.duo.kills + '</p>');
            $("#pc").append('<p>Parties jouer-Duo : ' +  stata.per_input.keyboardmouse.duo.matchesplayed + '</p>');
            $("#pc").append('<p>Top1-Squad : ' +  stata.per_input.keyboardmouse.squad.placetop1 + '</p>');
            $("#pc").append('<p>Kills-Squad : ' +  stata.per_input.keyboardmouse.squad.kills + '</p>');
            $("#pc").append('<p>Parties jouer-Squad : ' +  stata.per_input.keyboardmouse.squad.matchesplayed + '</p>');
            $("#infoalign").append('<div class="infomarge" id="console"></div>');
            $("#console").append('<h3>Stats Console :</h3>');
            $("#console").append('<p>Top1-Solo : ' + stata.per_input.gamepad.solo.placetop1 + '</p>');
            $("#console").append('<p>Kills-Solo : ' + stata.per_input.gamepad.solo.kills + '</p>');
            $("#console").append('<p>Parties jouer-Solo : ' + stata.per_input.gamepad.solo.matchesplayed + '</p>');
            $("#console").append('<p>Top1-Duo : ' +  stata.per_input.gamepad.duo.placetop1 + '</p>');
            $("#console").append('<p>Kills-Duo : ' +  stata.per_input.gamepad.duo.kills + '</p>');
            $("#console").append('<p>Parties jouer-Duo : ' +  stata.per_input.gamepad.duo.matchesplayed + '</p>');
            $("#console").append('<p>Top1-Squad : ' +  stata.per_input.gamepad.squad.placetop1 + '</p>');
            $("#console").append('<p>Kills-Squad : ' +  stata.per_input.gamepad.squad.kills + '</p>');
            $("#console").append('<p>Parties jouer-Squad : ' +  stata.per_input.gamepad.squad.matchesplayed + '</p>');
            $("#infoalign").append('<div class="infomarge" id="mobile"></div>');
            $("#mobile").append('<h3>Stats Mobile :</h3>');
            $("#mobile").append('<p>Top1-Solo : ' + stata.per_input.touch.solo.placetop1 + '</p>');
            $("#mobile").append('<p>Kills-Solo : ' + stata.per_input.touch.solo.kills + '</p>');
            $("#mobile").append('<p>Parties jouer-Solo : ' + stata.per_input.touch.solo.matchesplayed + '</p>');
            $("#mobile").append('<p>Top1-Duo : ' +  stata.per_input.touch.duo.placetop1 + '</p>');
            $("#mobile").append('<p>Kills-Duo : ' +  stata.per_input.touch.duo.kills + '</p>');
            $("#mobile").append('<p>Parties jouer-Duo : ' +  stata.per_input.touch.duo.matchesplayed + '</p>');
            $("#mobile").append('<p>Top1-Squad : ' +  stata.per_input.touch.squad.placetop1 + '</p>');
            $("#mobile").append('<p>Kills-Squad : ' +  stata.per_input.touch.squad.kills + '</p>');
            $("#mobile").append('<p>Parties jouer-Squad : ' +  stata.per_input.touch.squad.matchesplayed + '</p>');
        },
        error: function() {
            alert("error")
        },
        dataType: "json"
    });
}

function clickstat(){
    statf()
}

function effaceval(){
    $("#search").val("");
}