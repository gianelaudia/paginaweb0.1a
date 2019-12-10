var myJSONText = JSON.stringify(feed);

jQuery.getFeed({
       url: '_.xml',
       success: function(feed) {
           
           alert(feed.title);
       }
   });