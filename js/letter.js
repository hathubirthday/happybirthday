
var aparted = false;

$("#open").click(function(){
	
	if(!aparted)
	{
		var typed = new Typed('.letter', {
			strings: ["^1000Hi là chú đây,", 
				"Gửi cháu tui,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p style=''>&nbsp;&nbsp;&nbsp;Sinh nhật vui vẻ nha cô bé! Tuổi mới hi vọng mọi thứ tốt đẹp sẽ đến với cháu. Chú biết có đôi lúc cháu thấy mệt mỏi, áp lực vì công việc, cuộc sống và cả chuyện tình cảm nữa... Những lúc như thế hi vọng cháu sẽ nhớ đến chú chỉ cần 1 cuộc gọi bất kể cháu ở đâu, lúc nào chú sẽ đến bên cạnh cháu ngay. Hãy yên tâm vì chú sẽ luôn là nơi để cháu dựa vào.</p>&nbsp;&nbsp;&nbsp;Từ người đã ở cạnh cháu suốt 2 năm qua 💕!<br><br><p style='float:right; display:block;'>お誕生日おめでとう Ha Thu!\</p><br><p style='float:right; display:block;'>27/08/2022</p>&nbsp;&nbsp;&nbsp;&nbsp;"],
			typeSpeed: 25,
			backSpeed: 20
		});
		
		$('#open').find("span").eq(0).css('background-position', "0 -150px");
		
		aparted = true;
		
		var music = document.getElementById('music2');		
		if (music.paused)
		{
			music.play();
			$('#music_btn2').css("opacity", "1"); 
		}
	}
	
});

function playPause() 
{
    var music = document.getElementById('music2');
    var music_btn = $('#music_btn2');
	
    if (music.paused)
	{
        music.play();
		music_btn.css("opacity", "1"); 
    }
    else
	{
        music.pause();
		music_btn.css("opacity", "0.2"); 
    }	
}


window.onload = function () 
{	

	var currentUrl = window.location.href;
	var firstIndex = currentUrl.indexOf("#");	
	if (firstIndex <= 0) window.location.href = currentUrl + "#contact";

	$('#music2').attr('src', bgmsrc);

	document.addEventListener('touchstart',function (event) { if(event.touches.length > 1) event.preventDefault(); });
	
	var lastTouchEnd = 0;
	
	document.addEventListener('touchend',function (event) {
		
		var now = (new Date()).getTime();
		if(now - lastTouchEnd <= 300) event.preventDefault();
		lastTouchEnd = now;
		
	}, false);
	
	document.addEventListener('gesturestart', function (event) { event.preventDefault(); });

	$('body').css('opacity', '1');
	$('#jsi-cherry-container').css('z-index', '-99');
	
}
