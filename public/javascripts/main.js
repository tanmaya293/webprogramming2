$(function(){
	
	$.ajax({
	  method: "GET",
	  url: "api/videos",
	  success : function(videos){
	  	$.each(videos, function(i, video){
	  		$('#videolist').append('<li style="float:left; padding:16px; list-style-type:none;"><img style= "width:200px; height:200px;" src="../images/'+ video._id+'.jpg"><br>'+video.title+'</li>');
	  	});
	  },
	  error : function(){
	  	$('#videolist').append('<li>'+'error'+'</li>');
	  } 
	});

	$('#add').click(function(){
		var title = $('#title').val();
		var genre = $('#genre').val();
		var description = $('#desc').val();

		var video = {
			title : title,
			genre : genre,
			description : description
		}

		$.ajax({
	  method: "POST",
	  url: "api/videos",
	  data: video,
	  success : function(newVideo){
	  
	  		$('#videolist').append('<li style="float:left; padding:16px;"><img style= "width:200px; height:200px;" src="../images/'+ newVideo._id+'.jpg">'+newVideo.title+'</li>');
	
	  },
	  error : function(){
	  	$('#videolist').append('<li>'+'error'+'</li>');
	  } 
	});
	});
});