
(function($) {
	$(window).on('load',function(){

		$('.sub').on('click',function() {
			var first_name = $('.first_name').val();	
			if(first_name == "") {
				$('.empty-entry').remove();
				$('.info .player-image img').remove();
				$('.info .odi-stats h2').remove();
				$('.info .player-profile h2').remove();
				$('.info .t_twenty-stats h2').remove();
				$('.info p').remove();
				$('.info').append('<p class="empty-entry" style="color:red;"></p>');
				$('.empty-entry').html('Please Enter Player name');
			} else {
				$.get("https://cricapi.com/api/playerFinder?apikey=UOiAH9hMTBbM7JbaSSDBiTfveMn1&name="+first_name,function(name){
					var data_arr = name.data;
					if(data_arr.length == 0) {
						$('.empty-entry').remove();
						$('.info .odi-stats h2').remove();
						$('.info .t_twenty-stats h2').remove();
						$('.info .player-profile h2').remove();
						$('.info .player-image img').remove();
						$('.info p').remove();
						$('.info').append('<p style="color:red">Please enter valid name</p>')
					} else {
						var pid = name.data[0].pid;
						$.get("https://cricapi.com/api/playerStats?apikey=UOiAH9hMTBbM7JbaSSDBiTfveMn1&pid="+pid,function(stats) {
						console.log(stats);
						var image = stats.imageURL;
						$('.empty-entry').remove();
						$('.info .player-image img').remove();
						$('.info p').remove();
						$('.info .player-name').remove();
						$('.info .playing-role').remove();
						$('.info .country').remove();
						$('.info .player-profile p').remove();
						$('.info .age').remove();
						$('.info .odi-stats h2').remove();
						$('.info .t_twenty-stats h2').remove();
						$('.info .player-profile h2').remove();
						$('.info .player-image').append('<img alt="'+stats.fullName+'">')
						$('.info .player-image img').attr('src',image);
						$('.info .player-details').append('<p class="player-name">Name: '+stats.fullName+'</p>')
						$('.info .player-details').append('<p class="playing-role">Playing-Role: '+stats.playingRole+'</p>');
						$('.info .player-details').append('<p class="country">Country: '+stats.country+'</p>');
						$('.info .player-details').append('<p class="age">Current-age: '+stats.currentAge+'</p>');	
						$('.info .player-details').append('<p class="born">Born: '+stats.born+'</p>');
						$('.info .player-details').append('<p class="battingstyle">BAtting Style: '+stats.battingStyle+'</p>');
						$('.info .player-details').append('<p class="bowlingstyle">Bowling Style: '+stats.bowlingStyle+'</p>');
						$('.info .player-details').append('<p class="major-teams">Major Teams: '+stats.majorTeams+'</p>');
						$('.info .odi-stats .batting').append('<h2>ODI STATISTICS BATTING</h2>');
						$('.info .odi-stats .batting').append('<p class="odi-fifty">ODI-50\'s: '+stats.data.batting.ODIs['50']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-hundred">ODI-100\'s: '+stats.data.batting.ODIs['100']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-six">ODI-6\'s: '+stats.data.batting.ODIs['6s']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-four">ODI-4\'s: '+stats.data.batting.ODIs['4s']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-higgest">ODI-Higgest Sore: '+stats.data.batting.ODIs['HS']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-inns">ODI-Total Innings: '+stats.data.batting.ODIs['Inns']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-total-runs">ODI-Total Score\'s: '+stats.data.batting.ODIs['Runs']+'</p>');
						$('.info .odi-stats .batting').append('<p class="odi-strikerate">ODI-Strike rate: '+stats.data.batting.ODIs['SR']+'</p>');
						$('.info .odi-stats .bowling').append('<h2>ODI STATISTICS BOWLING</h2>');
						$('.info .odi-stats .bowling').append('<p class="odi-Wickets">ODI-Wicket\'s: '+stats.data.bowling.ODIs['Wkts']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-BStike-rate">ODI-Bowling Strike Rate: '+stats.data.bowling.ODIs['SR']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-bowling-runs">ODI-Bowling Runs: '+stats.data.bowling.ODIs['Runs']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-economy">ODI-Economy Rate: '+stats.data.bowling.ODIs['Econ']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-totalballs">ODI-Total Balls: '+stats.data.bowling.ODIs['Balls']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-best">ODI-Bowling Best: '+stats.data.bowling.ODIs['BBM']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-fourwickets">ODI-Four Wickets: '+stats.data.bowling.ODIs['4w']+'</p>');
						$('.info .odi-stats .bowling').append('<p class="odi-tenwicktes">ODI-Ten Wickets: '+stats.data.bowling.ODIs['10']+'</p>');
						$('.info .t_twenty-stats .batting').append('<h2>T20 STATISTICS BATTING</h2>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-fifty">T20-50\'s: '+stats.data.batting.T20Is['50']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-hundred">T20-100\'s: '+stats.data.batting.T20Is['100']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-six">T20-6\'s: '+stats.data.batting.T20Is['6s']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-four">T20-4\'s: '+stats.data.batting.T20Is['4s']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-higgest">T20-Higgest Sore: '+stats.data.batting.T20Is['HS']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-inns">T20-Total Innings: '+stats.data.batting.T20Is['Inns']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-total-runs">T20-Total Score\'s: '+stats.data.batting.T20Is['Runs']+'</p>');
						$('.info .t_twenty-stats .batting').append('<p class="ttwenty-strikerate">T20-Strike rate: '+stats.data.batting.T20Is['SR']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<h2>T20 STATISTICS BOWLING</h2>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-Wickets">T20-Wicket\'s: '+stats.data.bowling.T20Is['Wkts']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-BStike-rate">T20-Bowling Strike Rate: '+stats.data.bowling.T20Is['SR']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-bowling-runs">T20-Bowling Runs: '+stats.data.bowling.T20Is['Runs']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-economy">T20-Economy Rate: '+stats.data.bowling.T20Is['Econ']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-totalballs">T20-Total Balls: '+stats.data.bowling.T20Is['Balls']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-best">T20-Bowling Best: '+stats.data.bowling.T20Is['BBM']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-fourwikets">T20-four Wickets: '+stats.data.bowling.T20Is['4w']+'</p>');
						$('.info .t_twenty-stats .bowling').append('<p class="ttwenty-tenwicktes">T20-Ten Wickets: '+stats.data.bowling.T20Is['10']+'</p>');
						$('.info .player-profile').append('<h2>About '+stats.fullName+'</h2>');
						$('.info .player-profile').append('<p class="player-profile">'+stats.profile+'</p>');
						});
					}
			});
			}
		});

	});

})(jQuery);

// 	$.get("https://cricapi.com/api/matches?apikey=UOiAH9hMTBbM7JbaSSDBiTfveMn1", function(matchdata) {
// 	var ar_1 = [];
// 	var ar_2 = [];
// 	for(let i=0;i<matchdata.matches.length;i++) {
// 		var team_1 = matchdata.matches[i]['team-1'];	
// 		var team_2 = matchdata.matches[i]['team-2'];
// 		ar_1[i] = team_1;
// 		ar_2[i] = team_2;			
// 		$('.container').append('<li>'+ar_1[i]+'</li>');
// 		$('.contain').append('<li>'+ar_2[i]+'</li>');
// 	}

// });
