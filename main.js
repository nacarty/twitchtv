var arr =    ['blahblah','ESL_SC2', 'OgamingSC2', 'Habathcx', 'Storbeck', 'RobotCaleb', 'noobs2ninjas', 'Beohoff', 'brunofin',
                       'sheevergaming', 'TR7K','freecodecamp', 'nigelalex', 'comster404', 'cretetion', 'Test_channel','Nightblue3','TakeTV_HS','IWillDominate','TimTheTatman','Savjz','Blusewilly_retry'];
 
var spot = $('#theStreams');           

function filterChannels(choice){    
    if (choice === 0)
    {
        $('w3-row').css('display', 'inherit');
        $('.offline').css('display', 'inherit');
        $('.nonExistent').css('display', 'inherit');
        $('.online').css('display', 'inherit');
    }
    
    if (choice === 1)
    {
         $('w3-row').css('display', 'inherit');
        $('.offline').css('display', 'none');
        $('.nonExistent').css('display', 'none');
        $('.online').css('display', 'inherit');
    }
    
    if (choice === 2)
    {
         $('w3-row').css('display', 'inherit');
        $('.offline').css('display', 'inherit');
        $('.nonExistent').css('display', 'none');
        $('.online').css('display', 'none');
    }
    
    if (choice === 3)
    {
         $('w3-row').css('display', 'inherit');
        $('.offline').css('display', 'none');
        $('.nonExistent').css('display', 'inherit');
        $('.online').css('display', 'none');
    }
     
}

function getStream(data, textStatus, jqXHR, str){
    
    var blankLogo = 'https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=None';
    
    
    console.log('The textStatus: ', textStatus );
    
    if  (  (data === null )||(data === undefined) ){
        console.log('Mr. Carty: The data is null or undefined ', textStatus);
        var D = {};
        D.logo = blankLogo;
        D.display_name = str;
        D.game = 'N/A';
        D. status = 'Non-existent';
        D.url = "#";
        D.views= 'N/A';
        D.followers = 'N/A';
        
        $('#theStreams').append('<div  class = "nonExistent  w3-row"><div class = "w3-col m1 w3-center"><img src = "'+D.logo +'" alt = "Logo"></div><div class = "w3-col m2 w3-center"><a href = "'+D.url+'" target = "_blank">'+D.display_name+'</a></div><div class = "w3-col m1 w3-center">'+D.game+'</div>'+
                                '<div class = "w3-col m7 w3-center">'+D.status+'</div><div class = "w3-col m1 w3-center">'+D.followers+'</div></div>');                            

    }
    
    else if  ( (data.stream === null)||(data.stream === undefined) ) //the channel is NOT streaming
    {
        console.log('This is an existing but non-streaming channel.');
       jQuery.ajax({async: true, url:'https://api.twitch.tv/kraken/channels/'+str, 
           success: function(data, textStatus, jqXHR){
                            var D = data;
                            var S = str;
                            
                             if (D.logo === null)
                                D.logo = blankLogo;
                            if (D.display_name === null)
                                D.display_name =S;
                            if ( D.game === null)
                                 D.game = '---';
                            if (D.status === null)
                                D.status = '---';
                            if (D.url === null)
                                D.url = '#';
                            if (D.views === null)
                                D.views = 0;
                            if (D.followers === null)
                                D.followers = 0;                          
                            
                             $('#theStreams').append('<div  class = "offline  w3-row"><div class = "w3-col m1 w3-center"><img src = "'+D.logo +'" alt = "Logo"></div><div class = "w3-col m2 w3-center"><a href = "'+D.url+'"  target = "_blank">'+D.display_name+'</a></div><div class = "w3-col m1 w3-center">'+D.game+'</div>'+
                                '<div class = "w3-col m7 w3-center">'+D.status+'</div><div class = "w3-col m1 w3-center">'+D.followers+'</div></div>');                            

                        },
            error: function(jqXHR, textStatus){
                      var D = {};     
                       var D = data;
                            var S = str;
                            
                             if (D.logo === null)
                                D.logo = blankLogo;
                            if (D.display_name === null)
                                D.display_name = S;
                            if ( D.game === null)
                                 D.game = '---';
                            if (D.status === null)
                                D.status = '---';
                            if (D.url === null)
                                D.url = '#';
                            if (D.views === null)
                                D.views = 0;
                            if (D.followers === null)
                                D.followers = 0;                          
                            
                              $('#theStreams').append('<div  class = "offline  w3-row"><div class = "w3-col m1 w3-center"><img src = "'+D.logo +'" alt = "Logo"></div><div class = "w3-col m2 w3-center"><a href = "'+D.url+'"  target = "_blank">'+D.display_name+'</a></div><div class = "w3-col m1 w3-center">'+D.game+'</div>'+
                                '<div class = "w3-col m7 w3-center">'+D.status+'</div><div class = "w3-col m1 w3-center">'+D.followers+'</div></div>');                            

            }});  
    }   
    
    else  //the channel is streaming
    {
       var  D = data.stream.channel;
       
        console.log('This is a streaming channel.');
        
        if (D.logo === null)
                                D.logo = blankLogo;
                            if (D.display_name === null)
                                D.display_name = S;
                            if ( D.game === null)
                                 D.game = '---';
                            if (D.status === null)
                                D.status = '---';
                            if (D.url === null)
                                D.url = '#';
                            if (D.views === null)
                                D.views = 0;
                            if (D.followers === null)
                                D.followers = 0;                          
                            
                             $('#theStreams').append('<div  class = "online  w3-row"><div class = "w3-col m1 w3-center"><img src = "'+D.logo +'" alt = "Logo"></div><div class = "w3-col m2 w3-center"><a href = "'+D.url+'"  target = "_blank">'+D.display_name+'</a></div><div class = "w3-col m1 w3-center">'+D.game+'</div>'+
                                '<div class = "w3-col m7 w3-center">'+D.status+'</div><div class = "w3-col m1 w3-center">'+D.followers+'</div></div>');                            

    } //else
    
  
} //getStream()

function getTwitchTVData(){
        
    
    arr.forEach(function(cur, i){
                        var str = arr[i].trim();
                         jQuery.ajax({async:true, url: 'https://api.twitch.tv/kraken/streams/'+str,
                                                    success: function(data, textStatus, jqXHR){
                                                        getStream(data, textStatus, jqXHR, str );
                                                    },
                                                    error:  function(jqXHR, textStatus){
                                                        getStream( null, textStatus, jqXHR, str);
                                                    }
                                                });});
}